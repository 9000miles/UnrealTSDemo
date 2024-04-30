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
        const r = UE.KismetMathLibrary.RandomInteger(255)
        const g = UE.KismetMathLibrary.RandomInteger(255)
        const b = UE.KismetMathLibrary.RandomInteger(255)
        return `rgba(${r},${g},${b},255)`
    }

    function getColor1() {
        const r = UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        const g = UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        const b = UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        // return {R: r, G: g, B: b, A: 255}
        return new UE.LinearColor(0.11, 0.1, 0.2, 1)
        return new UE.LinearColor(r, g, b, 1)
    }

    function getColor2() {
        const r = UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        const g = UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        const b = UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        return {R: r, G: g, B: b, A: 1}
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
            ColorAndOpacity: getColor2
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



