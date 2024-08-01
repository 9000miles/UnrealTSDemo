import {LinearColor} from 'ue';
import {SButton, SCheckBox, STextBlock} from 'cpp';
import * as UE from "ue";
import * as puerts from "puerts";
import * as cpp from "cpp";


const GameInstance: UE.SlateTSGameInstance = puerts.argv.getByName("GameInstance") as UE.SlateTSGameInstance

function getContentWidget() {
    console.log("getContentWidget")
    return STextBlock.SNew({
            Text: "Mowoweij",
            ColorAndOpacity: new UE.LinearColor(0.3, 0.6, 0.5, 1.0),
            // ColorAndOpacity: "#5dc513",
            WrapTextAt: 33,
            AutoWrapText: true,
            // ShadowOffset: new UE.Vector2D(3, 4),
            ShadowOffset: new UE.Vector2D(4, 5),
        },
        __filename)
}

function Func1() {
    const widget = SCheckBox.SNew({
            OnGetMenuContent: getContentWidget
        },
        __filename)
    GameInstance.SetTestWidget(widget)
}


/**
 * ================= 测试 =================
 **/
Func1()