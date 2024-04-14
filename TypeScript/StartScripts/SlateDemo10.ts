
import {SMultiLineEditableTextBox, STextBlock, SVerticalBox} from 'cpp';

class TextEditor extends SVerticalBox {
    constructor() {
        super();

        let editableTextBox = new SMultiLineEditableTextBox({
            Text: "",
            Font: {}, // 设置字体样式
            Style: {}, // 自定义样式
            OnTextChanged: (sender, args) => {
                // 实时预览逻辑
                this.UpdatePreview(args.NewText);
            },
        });

        let previewBox = new STextBlock({
            Text: "",
            AutoWrapText: true,
            Font: {}, // 设置预览字体样式
            Style: {}, // 预览区样式
        });

        this.AddSlot().HAlign(HAlign_Fill).VAlign(VAlign_Top).Padding(5).Add(editableTextBox);
        this.AddSlot().HAlign(HAlign_Fill).VAlign(VAlign_Bottom).Padding(5).Add(previewBox);

        this.UpdatePreview(""); // 初始化预览
    }

    private UpdatePreview(text: string) {
        // 假设这里有逻辑处理文本，例如Markdown转HTML，然后设置到预览框
        let processedText = this.ProcessText(text);
        let previewBox = this.GetChildAt(1) as STextBlock;
        if (previewBox) {
            previewBox.Text = processedText;
        }
    }

    private ProcessText(text: string): string {
        // 这里可以添加文本处理逻辑，例如转换Markdown为HTML
        // 示例简单直接返回原文本
        return text;
    }
}

let editor = new TextEditor();
// let mainWindow = ...; // 假定的主窗口引用
// mainWindow.ContentSlot.Add(editor);