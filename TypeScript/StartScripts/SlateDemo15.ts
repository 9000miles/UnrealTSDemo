
import { STableViewBase, SSearchBox } from 'cpp';

interface TableRowData {
    id: number;
    column1: string;
    column2: string;
}

class FilterableTableView extends STableViewBase<TableRowData> {
    private searchBox: SSearchBox;

    constructor() {
        super({
            ListItemsSource: [],
            OnGenerateRow: this.generateRow,
            OnGetChildrenCount: () => this.dataSource.length,
            OnGetChildAt: (index) => this.dataSource[index],
        });

        this.searchBox = new SSearchBox({
            OnTextChanged: this.filterTable,
        });

        let headerRow = new SHorizontalBox();
        headerRow.AddSlot().AutoWidth().Add(new STextBlock({ Text: "Search" }));
        headerRow.AddSlot().FillWidth().Add(this.searchBox);

        this.HeaderRow().AddSlot().HAlign(HAlign_Fill).VAlign(VAlign_Top).Add(headerRow);
    }

    private generateRow(item: TableRowData, rowIndex: number): SVerticalBox {
        let row = new SVerticalBox();
        row.AddSlot().AutoHeight().Add(new STextBlock({ Text: item.column1 }));
        row.AddSlot().AutoHeight().Add(new STextBlock({ Text: item.column2 }));
        return row;
    }

    private filterTable(searchText: string): void {
        // 实现根据searchText过滤dataSource的逻辑
        this.dataSource = this.dataSource.filter(item => item.column1.includes(searchText) || item.column2.includes(searchText));
        this.RequestListRefresh();
    }
}

let tableView = new FilterableTableView();
// tableView.dataSource = [...]; // 初始化数据源
// let mainPanel = ...; // 假定的主面板引用
// mainPanel.AddChild(tableView);