import {LinearColor} from 'ue';
import {SButton, SBorder} from 'cpp';

// 创建一个边框控件作为背景
let background = new SBorder();
background.Panels[0].Brush.Color = new LinearColor(0.5, 0.5, 0.5, 1); // 设置背景颜色

// 创建一个按钮，并在点击时改变背景颜色
let changeColorButton = new SButton();
changeColorButton.Text = "Change Color";
changeColorButton.OnClicked.Add((sender, args) => {
    let randomColor = new LinearColor(Math.random(), Math.random(), Math.random(), 1);
    background.Panels[0].Brush.Color = randomColor;
});

// 将按钮添加到背景中
background.ContentSlot.Add(changeColorButton);

// 将背景添加到窗口