
import { SDropTarget, SBorder, STextBlock } from 'cpp';

interface DropTargetData {
    type: string;
    label: string;
}

class DroppableBorder extends SBorder implements IDragDropHandler<DropTargetData> {
    dropTarget: SDropTarget<DropTargetData>;

    constructor(label: string) {
        super();

        this.dropTarget = new SDropTarget<DropTargetData>({
            OnAllowDrop: this.allowDrop,
            OnDrop: this.handleDrop,
        });

        this.dropTarget.Content()
            .AddSlot()
            .HAlign(HAlign_Center)
            .VAlign(VAlign_Center)
            .Add(new STextBlock({ Text: label }));

        this.SetBorderImage('YourDropTargetBorderStyle');
        this.dropTarget.SetContent(this);
    }

    allowDrop(DragDropEvent: FDragDropEvent<DropTargetData>): boolean {
        return DragDropEvent.GetOperation().GetData().type === 'DraggableType';
    }

    handleDrop(DragDropEvent: FDragDropEvent<DropTargetData>) {
        let droppedData = DragDropEvent.GetOperation().GetData();
        console.log(`Dropped ${droppedData.label} on ${this.dropTarget.Content().ChildAt(0).Widget.Text}`);
    }
}

// 使用示例
let droppable1 = new DroppableBorder("Drop Here 1");
let droppable2 = new DroppableBorder("Drop Here 2");

// 假设你有拖拽源和逻辑来配合这些目标
// ...

// let mainViewport = ...; // 假定的主视口或容器引用
// mainViewport.AddChild(droppable1);
// mainViewport.AddChild(droppable2);