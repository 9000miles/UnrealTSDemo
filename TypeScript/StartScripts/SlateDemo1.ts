import {SButton, STextBlock, TAttribute, TSharedPtr} from "cpp"
import {$ref, $unref} from "puerts"
import * as cpp from "cpp";
import * as UE from "ue";
import * as puerts from "puerts";
import {Color} from "ue";

// const args: STextBlock.Arguments = {
//     Text: "AAA"
// }
// const stbPtr0: TSharedPtr<STextBlock> = SNew(STextBlock, {
//     Text: "AAA"
// })
// const text0 = stbPtr0.Get().GetText()
// console.log(text0)


const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance

const TestType = 0;

if (TestType == 0) {

} else if (TestType == 1) {

}


const stbPtr: TSharedPtr<STextBlock> = STextBlock.SNew({
        Text: () => {
            return "sss"
        },
        // Text: "AAA",
    },
    __filename)
const af = "#09097e";
const asf = "rgba(41,41,133,0.69)";
let sasPtr = $ref(STextBlock.MakeShared())
// let sasPtr = new TSharedPtr<STextBlock>()
STextBlock.SAssignNew(sasPtr, {
        Text: "this is SAssignNew STextBlock"
    },
    __filename)
const sfwe = $unref(sasPtr)
const a = sfwe.Get().GetText()
console.log(a)

const text = stbPtr.Get().GetText()
console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)

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


GameInstance.SetTestWidget(btn)
