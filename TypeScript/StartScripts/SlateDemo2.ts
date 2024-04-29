import {Vector2D, ETextJustify} from 'ue';
import {SButton, STextBlock} from 'cpp';

// 创建一个按钮
let myButton = new SButton({
    Text: "Click Me"
});

// 创建一个文本块用于显示消息

const args = new STextBlock.Arguments()
args.Text = "Hello from TypeScript!";
args.Justification = ETextJustify.Center; // 假设ETextJustify已正确绑定
// 在窗口中添加一个文本块
let greetingText = new STextBlock(args);

// 设置按钮的点击事件处理
myButton.SetOnClicked((sender, args) => {
    messageText.Text = "Button was clicked!";
});

// 将文本块和按钮添加到一个垂直框布局中
let verticalBox = new SVerticalBox();
verticalBox.AddChildToVerticalBox(messageText);
verticalBox.AddChildToVerticalBox(myButton);

// 假设存在一个宿主窗口或面板，将垂直布局添加到其中
// let mainWindow = ...; // 主窗口或面板的引用
// mainWindow.ContentSlot.Add(verticalBox);



const btn = SButton.SNew({
        Text: "my name is button",
        OnClicked: () => {
            console.log("button clicked !!!")

            const text = stbPtr.Get().GetText()
            console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)

            //扩展函数self传递有问题
            // stbPtr.Get().SetText("new text by Extension")
            // stbPtr.Get().SetText(new TAttribute<string>("new text by Extension"))
            GameInstance.SetTestWidget(sfwe)
        },
    },
    __filename)
