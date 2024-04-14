
import { SSlider, STextBlock } from 'cpp';

class CustomSlider extends SVerticalBox {
    constructor() {
        super();

        let slider = new SSlider({
            Value: 0.5,
            MinValue: 0,
            MaxValue: 1,
            Style: {}, // 自定义样式
            OnValueChanged: (sender, args) => {
                let valueText = this.GetChildAt(1) as STextBlock;
                if (valueText) {
                    valueText.Text = `${args.NewValue.toFixed(2)}`;
                }
            },
        });

        let valueDisplay = new STextBlock({
            Text: "0.5",
            Font: {}, // 设置字体样式
            Style: {}, // 样式
        });

        this.AddSlot().HAlign(HAlign_Fill).VAlign(VAlign_Center).AutoHeight().Add(slider);
        this.AddSlot().HAlign(HAlign_Fill).VAlign(VAlign_Center).AutoHeight().Add(valueDisplay);
    }
}

let customSlider = new CustomSlider();
// let controlPanel = ...; // 假定的控制面板引用
// controlPanel.AddChild(customSlider);