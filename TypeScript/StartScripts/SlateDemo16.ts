
import { SPaginationWidget, SScrollBox, STextBlock } from 'cpp';

interface ListItemData {
    id: number;
    title: string;
    description: string;
}

class PaginatedList extends SPaginationWidget<ListItemData> {
    private scrollBox: SScrollBox;
    private currentPage: number = 1;
    private itemsPerPage: number = 10;
    private totalItems: number = 0;
    private allItems: ListItemData[];

    constructor(items: ListItemData[]) {
        super();

        this.allItems = items;
        this.totalItems = items.length;
        this.scrollBox = new SScrollBox();

        this.setupPagination();
        this.updateDisplayedItems();

        this.Content()
            .AddSlot()
            .HAlign(HAlign_Fill)
            .VAlign(VAlign_Fill)
            .Add(this.scrollBox);
    }

    private setupPagination() {
        this.OnPageChanged.AddLambda((newPage) => {
            this.currentPage = newPage;
            this.updateDisplayedItems();
        });

        this.PaginationBar()
            .SetPageSize(this.itemsPerPage)
            .SetTotalPages(Math.ceil(this.totalItems / this.itemsPerPage));
    }

    private updateDisplayedItems() {
        this.scrollBox.RemoveAllChildren();

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);

        for (let i = startIndex; i < endIndex; i++) {
            const item = this.allItems[i];
            let row = new SVerticalBox();

            row.AddSlot().AutoHeight().Add(new STextBlock({ Text: item.title }));
            row.AddSlot().AutoHeight().Add(new STextBlock({ Text: item.description }));

            this.scrollBox.AddChild(row);
        }
    }
}

// 使用示例
// let listData = [...]; // 假设这是从网络或数据库获取的数据
// let paginatedList = new PaginatedList(listData);
// let mainPanel = ...; // 假定的主面板引用
// mainPanel.AddChild(paginatedList);