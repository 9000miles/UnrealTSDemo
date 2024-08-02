import { LinearColor, TSharedPtr } from 'ue';
import { SButton, SCheckBox, SHorizontalBox, STextBlock } from 'cpp';
import * as UE from "ue";
import * as puerts from "puerts";
import * as cpp from "cpp";

const GameInstance: UE.SlateTSGameInstance = puerts.argv.getByName("GameInstance") as UE.SlateTSGameInstance

const func_map = {
    test_SNew_SHorizontalBox: function () {
        const widget: TSharedPtr<SHorizontalBox> = SHorizontalBox.SNew({}, __filename)

        widget.AddSlot({
            Padding: 10,
            AutoWidth: true,
            VAlign: UE.EVerticalAlignment.VAlign_Center,
            HAlign: UE.EHorizontalAlignment.HAlign_Center,
            AttachWidget: STextBlock.SNew({
                    Text: "测试",
                    ColorAndOpacity: new LinearColor(0.3, 0.6, 0.5, 1.0),
                    WrapTextAt: 100
                },
                __filename)

        })

        widget.AddSlot({
            Padding: 10,
            AutoWidth: true,
            VAlign: UE.EVerticalAlignment.VAlign_Center,
            HAlign: UE.EHorizontalAlignment.HAlign_Center,
            AttachWidget: SCheckBox.SNew({
                    Content: () => {
                        return STextBlock.SNew({
                                Text: "测试",
                                ColorAndOpacity: new LinearColor(0.3, 0.6, 0.5, 1.0),
                                WrapTextAt: 100
                            },
                            __filename)
                    },
                    IsChecked: UE.ECheckBoxState.Checked,
                    OnCheckStateChanged: (new_state: UE.ECheckBoxState) => {
                        console.log("OnCheckStateChanged", new_state)
                    }
                },
                __filename)
        })

        widget.AddSlot({
            Padding: 10,
            AutoWidth: true,
            VAlign: UE.EVerticalAlignment.VAlign_Center,
            HAlign: UE.EHorizontalAlignment.HAlign_Center,
            AttachWidget: SButton.SNew({
                    Text: "测试",
                    OnClicked: () => {
                        console.log("OnClicked")
                        return cpp.FReply.Handled();
                    }
                },
                __filename)
        })

        GameInstance.SetShowWidget(widget)
    },
}

/**
 * ================= 测试 =================
 **/
func_map.test_SNew_SHorizontalBox()
/**
 * UEDataBinding.hpp 修改ScriptTypeNameWithNamespace，将cpp.修改为UE.
 *
 */