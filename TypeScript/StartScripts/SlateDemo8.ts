
import { SPopupMenu, SButton, SMenuAnchor } from 'cpp';

let menuContent = new SPopupMenu({
    OnOpenChanged: (isOpen) => {
        console.log("Menu Open State Changed:", isOpen);
    },
    MenuItems: [
        { Label: "Option 1", CommandList: null },
        { Label: "Option 2", CommandList: null },
        { Label: "Option 3", CommandList: null },
    ],
});

let menuButton = new SButton();
menuButton.Text = "Click for Menu";

let menuAnchor = new SMenuAnchor();
menuAnchor.SetMenuContent(menuContent);
menuAnchor.AddChild(menuButton);

// let mainWindow = ...; // 假定的主窗口引用
// mainWindow.ContentSlot.Add(menuAnchor);