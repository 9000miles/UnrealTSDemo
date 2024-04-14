
import { SProgressBar } from 'cpp';
import {LinearColor, Vector2D} from "ue";

let progressBar = new SProgressBar({
    Percent: 0.5,
    Style: {}, // 自定义样式
    BarColor: new LinearColor(1,1, 0, 0), // RGB颜色，这里示例为红色
    FillColorAndOpacity:new LinearColor(0,0, 1, 0), // 填充色，示例为绿色
});

progressBar.OnValueChanged.Add((sender, args) => {
    console.log(`Progress Changed to ${args.NewValue * 100}%`);
});

// 假设存在一个循环更新进度的逻辑
let updateProgress = () => {
    progressBar.Percent += 0.01;
    if (progressBar.Percent > 1) progressBar.Percent = 0;
};

setInterval(updateProgress, 1000); // 每秒更新一次进度

// let controlPanel = ...; // 假定的控制面板引用
// controlPanel.AddChild(progressBar);