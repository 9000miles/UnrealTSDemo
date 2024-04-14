
import { SCheckBox, SListView, STextBlock } from 'cpp';

class CheckboxListItem extends STextBlock {
    constructor(public itemName: string, public isChecked: boolean) {
        super();
        this.Text = itemName;

        let checkbox = new SCheckBox();
        checkbox.IsChecked = isChecked;
        checkbox.Style = {}; // 自定义样式
        checkbox.OnCheckStateChanged.Add((_, args) => {
            this.isChecked = args.IsChecked;
            // 可以在此处添加额外的逻辑
        });

        this.InsertSlotAt(0, checkbox); // 在文本前插入复选框
    }
}

let items = [
    { name: "Item 1", checked: false },
    { name: "Item 2", checked: true },
    { name: "Item 3", checked: false },
];

let listView = new SListView<CheckboxListItem>({
    OnGenerateRow: (context) => {
        return new CheckboxListItem(context.Item.name, context.Item.checked);
    },
    NumItems: items.length,
    ItemHeight: 40,
});

// let mainPanel = ...; // 假定的主面板引用
// mainPanel.AddChild(listView);