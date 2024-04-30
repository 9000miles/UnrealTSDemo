import {STextBlock, TSharedPtr} from "cpp"
import {$ref, $unref} from "puerts"
import * as cpp from "cpp";
import * as UE from "ue";
import * as puerts from "puerts";


const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance


function Func1() {
    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: "AAA",
            ColorAndOpacity: "#5dc513"
        },
        __filename)
    GameInstance.SetTestWidget(widget)


    const text = widget.Get().GetText()
    console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)
}

function Func1_1() {
    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: () => {
                return "ss"
            },
            ColorAndOpacity: "rgba(93,197,19,0.92)"
        },
        __filename)
    GameInstance.SetTestWidget(widget)


    const text = widget.Get().GetText()
    console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)
}

function Func2() {
    class AA {
        classFunc() {
            return String(UE.KismetMathLibrary.RandomInteger(60))
        }
    }

    function getColor() {
        return "rgba(128,19,115,0.89)"
    }

    function getText() {
        return String(UE.KismetMathLibrary.RandomFloat())
        return "this is getText"
    }

    const aa = new AA()

    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: getText,
            // Text: aa.classFunc,
            // Text: () => null,
            ColorAndOpacity: getColor
        },
        __filename)
    GameInstance.SetTestWidget(widget)
}

function Func3() {
    let widgetRef = $ref(STextBlock.MakeShared())
    STextBlock.SAssignNew(widgetRef, {
            Text: "this is SAssignNew STextBlock"
        },
        __filename)
    const widgetPtr = $unref(widgetRef)
    const a = widgetPtr.Get().GetText()
    console.log(a)
}

/**
 * ================= 测试 =================
 **/
Func2()



