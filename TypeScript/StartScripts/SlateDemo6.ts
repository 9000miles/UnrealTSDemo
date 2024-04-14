
import { SSlider, SSpinBox, EOrientation } from 'cpp';

let slider = new SSlider({
    Orientation: EOrientation.Horizontal,
    Value: 50,
    MinValue: 0,
    MaxValue: 100,
});

let spinBox = new SSpinBox({
    MinValue: 0,
    MaxValue: 100,
    Value: 50,
});

// 绑定滑块和Spinbox的值
spinBox.OnValueChanged.Add((sender, args) => {
    slider.SetValue(args.NewValue);
});
slider.OnValueChanged.Add((sender, args) => {
    spinBox.SetValue(args.NewValue);
});

// let controlPanel = ...; // 假定的控制面板引用
// controlPanel.AddChild(slider);
// controlPanel.AddChild(spinBox);