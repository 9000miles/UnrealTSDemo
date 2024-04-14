
import { SListView, SDragDropOperation, FDragDropEvent } from 'cpp';
import { Vector2D } from 'ue'; // 假设的UE引擎绑定

interface ListElementData {
    id: number;
    name: string;
}

class DragDropListView extends SListView<ListElementData> {
    constructor() {
        super({
            ListItemsSource: [], // 列表数据源
            OnGenerateRow: this.generateRow,
            OnContextMenuOpening: this.onContextMenuOpening,
            OnDragDetected: this.onDragDetected,
            OnDrop: this.onDrop,
        });

        this.Style = {}; // 自定义样式
    }

    private generateRow(context: any, index: number): SVerticalBox {
        let item = context.ListItems[index];
        let row = new SVerticalBox();

        let label = new STextBlock({ Text: item.name });
        let handle = new SBorder({ Style: { Cursor: EMouseCursorgrabHand } }); // 拖拽手柄样式

        row.AddSlot().AutoHeight().Add(label);
        row.AddSlot().AutoHeight().Add(handle);

        return row;
    }

    private onDragDetected(event: FPointerEvent, item: ListElementData): SDragDropOperation | null {
        if (event.IsMouseButtonDown(EKeys.LeftMouseButton)) {
            let operation = new SDragDropOperation();
            operation.DefaultDragVisual = new SBorder({
                Content: new STextBlock({ Text: item.name }),
                Style: {},
            });
            operationPayload = item;
            return operation;
        }
        return null;
    }

    private onDrop(operation: SDragDropOperation, targetIndex: number): void {
        let payload = operation.GetPayload() as ListElementData;
        // 实现数据移动或交换逻辑
    }

    // 可选：右键菜单处理
    private onContextMenuOpening(menuBuilder: any, context: any): void {
        // 添加右键菜单项
    }
}

let listView = new DragDropListView();
// listView.SetListItemsSource([...]); // 设置数据源
// let mainViewport = ...; // 假定的主视口引用
// mainViewport.AddChild(listView);