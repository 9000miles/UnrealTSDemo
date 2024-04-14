import {Vector2D} from 'ue';
import {SScrollBox, SListView, STextBlock} from 'cpp';

class MyListItem extends STextBlock {
    constructor(public itemName: string) {
        super();
        this.Text = itemName;
    }
}

let scrollBox = new SScrollBox();
scrollBox.ScrollBarVisibility = EScrollBarVisibility.AlwaysVisible; // 确保滚动条始终可见

let itemList = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
let listView = new SListView<MyListItem>({
    OnGenerateRow: (context) => {
        let item = new MyListItem(context.Item);
        return item;
    },
    NumItems: itemList.length,
    ItemHeight: 30,
});

listView.SetItemsSource(itemList);

scrollBox.AddChild(listView);
