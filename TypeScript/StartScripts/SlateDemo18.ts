
import { SSlider, SNumericEntryBox } from 'cpp';

class SliderWithNumericInput {
    private slider: SSlider;
    private numericInput: SNumericEntryBox;

    constructor() {
        this.slider = new SSlider({
            Value: 50,
            MinValue: 0,
            MaxValue: 100,
            OnValueChanged: this.onSliderValueChanged,
        });

        this.numericInput = new SNumericEntryBox({
            Value: 50,
            MinValue: 0,
            MaxValue: 100,
            OnValueChanged: this.onNumericValueChanged,
        });

        this.numericInput.Value = this.slider.Value; // 初始化同步
    }

    private onSliderValueChanged(newValue: number) {
        this.numericInput.Value = newValue;
    }

    private onNumericValueChanged(newValue: number) {
        this.slider.Value = newValue;
    }

    addToPanel(panel: any) {
        let horizontalBox = new SHorizontalBox();
        horizontalBox.AddSlot().AutoWidth().Add(new STextBlock({ Text: "Value: " }));
        horizontalBox.AddSlot().FillWidth().Add(this.numericInput);
        horizontalBox.AddSlot().AutoWidth().Add(this.slider);

        panel.AddChild(horizontalBox);
    }
}

let sliderInput = new SliderWithNumericInput();
// let settingsPanel = ...; // 假定的设置面板引用
// sliderInput.addToPanel(settingsPanel);