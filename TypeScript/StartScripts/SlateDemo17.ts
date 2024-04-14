
import { SGridPanel, SEditableTextBox } from 'cpp';

interface EditableTableData {
    columns: string[];
    rows: any[][];
}

class EditableTable extends SGridPanel {
    constructor(data: EditableTableData) {
        super();

        this.columns = data.columns;
        this.rows = data.rows;

        this.createHeader();
        this.createBody();
    }

    private createHeader() {
        for (let i = 0; i < this.columns.length; i++) {
            let headerLabel = new STextBlock({ Text: this.columns[i] });
            this.AddSlot(0, i)
                .ColumnSpan(1)
                .HAlign(HAlign_Fill)
                .VAlign(VAlign_Center)
                .Add(headerLabel);
        }
    }

    private createBody() {
        for (let rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
            for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
                let value = this.rows[rowIndex][colIndex];
                let editableTextBox = new SEditableTextBox({ Text: value.toString() });

                this.AddSlot(rowIndex + 1, colIndex)
                    .ColumnSpan(1)
                    .HAlign(HAlign_Fill)
                    .VAlign(VAlign_Center)
                    .Add(editableTextBox);
            }
        }
    }
}

// 使用示例
let tableData: EditableTableData = {
    columns: ['ID', 'Name', 'Age'],
    rows: [
        [1, 'Alice', 30],
        [2, 'Bob', 25],
        [3, 'Charlie', 35],
    ],
};
let editableTable = new EditableTable(tableData);
// let mainViewport = ...; // 假定的主视口引用
// mainViewport.AddChild(editableTable);