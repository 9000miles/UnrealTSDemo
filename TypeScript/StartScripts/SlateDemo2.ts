import {$ref, $unref} from "puerts"
import {STextBlock} from "cpp";
import * as UE from "ue";
import * as puerts from "puerts";
import {TSharedPtr} from "ue";


const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance


function Func1() {
    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: "Mowoweij",
            ColorAndOpacity: new UE.LinearColor(0.3, 0.6, 0.5, 1.0),
            // ColorAndOpacity: "#5dc513",
            WrapTextAt: 33,
            AutoWrapText: true,
            // ShadowOffset: new UE.Vector2D(3, 4),
            ShadowOffset: new UE.Vector2D(4, 5),
        },
        __filename)
    const text = widget.Get().GetText()
    console.log(">>>>>>>>>> AAA <<<<<<<<<<", text)
    GameInstance.SetTestWidget(widget)


}

function Func1_1() {
    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
            Text: () => {
                return "sshhhhhhh"
            },
            ColorAndOpacity: () => new UE.LinearColor(0.3, 0.6, 0.5, 1.0),
            WrapTextAt: () => {
                console.log("aaa");
                return 1000
            },
            AutoWrapText: () => {
                console.log("bbb");
                return true
            },
            ShadowOffset: () => {
                return new UE.Vector2D(3, 4)
            },
        },
        __filename)
    GameInstance.SetTestWidget(widget)

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
    widget.Get().SetText(() => "Call SetText after creation ffffff")


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
        return new UE.LinearColor(r, g, b, 1);
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

function Func4() {
    function setTextFunc() {
        return UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
    }

    const widget: TSharedPtr<STextBlock> = STextBlock.SNew({}, __filename)
    widget.Get().SetText("sss");
    widget.Get().SetText(() => "sss");
    widget.Get().SetText(setTextFunc);
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

function Func5() {
    class MyClass {
        myName: string = "九千里"

        setTextFunc() {
            return `${this.myName} + ${UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)}`
            return UE.KismetMathLibrary.RandomFloatInRange(0.0, 1.0)
        }

        show() {
            const widget: TSharedPtr<STextBlock> = STextBlock.SNew({
                // Text: "this.setTextFunc.bind(this)"
                Text: this.setTextFunc.bind(this)
            }, __filename)
            const text = widget.Get().GetText();
            console.log(text)
            widget.Get().SetText("sss");
            GameInstance.SetTestWidget(widget)
        }
    }

    const mc = new MyClass()
    mc.show()
}

/**
 * ================= 测试 =================
 **/
Func1_1()