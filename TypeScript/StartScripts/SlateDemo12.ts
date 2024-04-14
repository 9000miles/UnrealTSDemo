
import { SGridPanel, SButton, SWidgetSwitcher } from 'cpp';

class ResponsiveLayoutPanel extends SGridPanel {
    constructor() {
        super();

        let button = new SButton({
            Text: "Toggle Content",
            Style: {}, // 样式
            OnClicked: (sender) => {
                let switcher = this.GetChildAt(1) as SWidgetSwitcher;
                if (switcher) {
                    switcher.SetActiveWidgetIndex(switcher.ActiveWidgetIndex === 0 ? 1 : 0);
                }
            },
        });

        let content1 = new STextBlock({ Text: "Visible Content 1" });
        let content2 = new STextBlock({ Text: "Visible Content 2" });

        let switcher = new SWidgetSwitcher([content1, content2]);

        // 网格布局设置
        this.AddSlot(0, 0).ColumnSpan(2).Add(button);
        this.AddSlot(0, 1).Add(content1);
        this.AddSlot(1, 1).Add(content2);

        this.SetColumnFill(0, 1.0); // 第一列填满剩余空间
        this.SetColumnFill(1, 1.0); // 第二列填满剩余空间
    }
}

let responsivePanel = new ResponsiveLayoutPanel();
// let mainWindow = ...; // 假定的主窗口引用
// mainWindow.ContentSlot.Add(responsivePanel);