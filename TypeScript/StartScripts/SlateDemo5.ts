import {Vector2D} from 'ue';
import { SButton, SDragDropOperation, SDragDropPayload } from 'cpp';

class MyDragDropPayload extends SDragDropPayload {
    constructor(public sourceButton: SButton) {
        super();
    }

    OnDrop(TargetWidget: SlateWidget) {
        console.log(`Dropped on ${TargetWidget.constructor.name}`);
        // 实现drop逻辑
    }
}

let button1 = new SButton();
button1.Text = "Drag Me";
button1.OnDragDetected.Add((sender, args) => {
    let operation = new SDragDropOperation();
    operation.DefaultDragVisual = button1;
    operation.Payload = new MyDragDropPayload(button1);
    args.Operation = operation;
});

let dropZone = new SButton();
dropZone.Text = "Drop Here";
dropZone.OnDragOver.Add((sender, args) => {
    args.OutOperation = SDragDropOperation.MovementAllowed;
});
dropZone.OnDrop.Add((sender, args) => {
    let payload = args.Operation.Payload as MyDragDropPayload;
    if (payload) {
        payload.OnDrop(dropZone);
    }
});

// let mainPanel = ...; // 假定的主面板引用
// mainPanel.AddChild(button1);
// mainPanel.AddChild(dropZone);