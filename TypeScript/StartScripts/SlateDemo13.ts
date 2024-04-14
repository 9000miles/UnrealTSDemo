
import { SCollapsingHeader, SVerticalBox } from 'cpp';

class CollapsibleSection extends SCollapsingHeader {
    constructor(private headerText: string, private content: SVerticalBox) {
        super({
            HeaderText: headerText,
            ShouldBeInitiallyCollapsed: false,
            OnToggleStateChanged: (isOpen) => {
                // 可以在这里添加额外的逻辑，比如动画或者状态更新
            },
        });

        this.HeaderContent()
            .AddSlot()
            .VAlign(VAlign_Center)
            .HAlign(HAlign_Left)
            .AutoWidth()
            .Add(new STextBlock({ Text: headerText }));

        this.ContentRegion()
            .AddSlot()
            .HAlign(HAlign_Fill)
            .VAlign(VAlign_Fill)
            .Add(content);
    }
}

// 使用示例
let settingsContent = new SVerticalBox();
// 向settingsContent添加各种设置项...

let collapsibleSection = new CollapsibleSection("Advanced Settings", settingsContent);
// let settingsPanel = ...; // 假定的设置面板引用
// settingsPanel.AddChild(collapsibleSection);