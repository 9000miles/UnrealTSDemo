
import { SWindow, SButton, STextBlock } from 'cpp';

class CustomDialog extends SWindow {
    constructor(title: string, message: string, confirmCallback: () => void, cancelCallback: () => void) {
        super({ Title: title });

        let content = this.ContentArea()
            .AddSlot()
            .HAlign(HAlign_Center)
            .VAlign(VAlign_Center)
            .Padding(10);

        content.Add(new STextBlock({ Text: message }));

        let buttonRow = new SHorizontalBox();
        content.Add(buttonRow);

        let confirmButton = new SButton({ Text: "Confirm" });
        confirmButton.OnClicked.AddLambda(() => {
            confirmCallback();
            this.RequestDestroyWindow();
        });
        buttonRow.AddSlot().AutoWidth().Add(confirmButton);

        let cancelButton = new SButton({ Text: "Cancel" });
        cancelButton.OnClicked.AddLambda(() => {
            cancelCallback();
            this.RequestDestroyWindow();
        });
        buttonRow.AddSlot().AutoWidth().Add(cancelButton);
    }
}

// 使用示例
let showDialog = () => {
    let dialog = new CustomDialog(
        "Confirmation",
        "Are you sure you want to proceed?",
        () => console.log("Confirmed"),
        () => console.log("Cancelled")
    );
    dialog.ShowModal();
};

// 触发对话框
showDialog();