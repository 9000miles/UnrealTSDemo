import {Vector2D, ETextJustify} from 'ue';
import {SWindow, STextBlock} from 'cpp';

// 创建一个新的窗口
let mainWindow = new SWindow();
mainWindow.Title = "My TypeScript Window";
mainWindow.ClientSize = new Vector2D(640, 480);

const args1: STextBlock.Arguments = {}
args1.Text = ""
const args = new STextBlock.Arguments()
args.Text = "Hello from TypeScript!";
args.Justification = ETextJustify.Center; // 假设ETextJustify已正确绑定
// 在窗口中添加一个文本块
let greetingText = new STextBlock(args);

// 将文本块添加到窗口的内容区域
mainWindow.SetContent(greetingText);

// 显示窗口
mainWindow.ShowWindow();