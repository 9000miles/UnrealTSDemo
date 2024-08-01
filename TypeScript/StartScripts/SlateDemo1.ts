import {STextBlock, TSharedPtr} from "cpp"
import {$ref, $unref} from "puerts"
import * as cpp from "cpp";
import * as UE from "ue";
import * as puerts from "puerts";


const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance


function Func1() {
    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: "AAA",
            ColorAndOpacity: "#5dc513",
            // ColorAndOpacity: "#5dc513",
            WrapTextAt: 33,
            AutoWrapText: true,
            // ShadowOffset: new UE.Vector2D(3, 4),
            ShadowOffset: {X: 6, Y: 9},
        },
        __filename)
    GameInstance.SetShowWidget(widget)


    const text = widget.Get().GetText()
    console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)
}

function Func1_1() {
    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: () => {
                return "ss"
            },
            ColorAndOpacity: "rgb(185,19,197)",
            WrapTextAt: () => {
                console.log("aaa");
                return 10
            },
            AutoWrapText: () => {
                console.log("bbb");
                return false
            },
            ShadowOffset: () => {
                return new UE.Vector2D(3, 4)
                return {X: 23, Y: 33}
            },
        },
        __filename)
    GameInstance.SetShowWidget(widget)

    // widget.Get().SetWrapTextAt(() => {
    //     console.log("xxxx")
    //     return 23
    // })
    //
    // widget.Get().SetAutoWrapText(() => {
    //     console.log("xxxx")
    //     return true
    // })

    // widget.Get().SetText("Call SetText after creation")
    // widget.Get().SetText(() => "Call SetText after creation")


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
    GameInstance.SetShowWidget(widget)
}

function Func4() {
    function setTextFunc() {
        return UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
    }

    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({}, __filename)
    // widget.Get().SetText("sss");
    widget.Get().SetText(() => "sss");
    widget.Get().SetText(setTextFunc);
    GameInstance.SetShowWidget(widget)
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
Func1_1()