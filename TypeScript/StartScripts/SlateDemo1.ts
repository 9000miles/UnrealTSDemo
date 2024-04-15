import {SButton, STextBlock, SWidgetBuilder, TSharedPtr} from "cpp"
import {SNew} from "puerts"
import * as cpp from "cpp";
import * as UE from "ue";
import * as puerts from "puerts";

// const args: STextBlock.Arguments = {
//     Text: "AAA"
// }
// const stbPtr0: TSharedPtr<STextBlock> = SNew(STextBlock, {
//     Text: "AAA"
// })
// const text0 = stbPtr0.Get().GetText()
// console.log(text0)


const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance

const stbPtr: TSharedPtr<STextBlock> = STextBlock.SNew({
    Text: "AAA"
})

const text = stbPtr.Get().GetText()
console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)

const btn = SButton.SNew( {
        Text: "my name is button",
        OnClicked: () => {
            console.log("button clicked !!!")

            GameInstance.SetTestWidget(stbPtr)
        }
})

GameInstance.SetTestWidget(btn)
