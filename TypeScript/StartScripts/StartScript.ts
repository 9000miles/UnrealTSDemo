import * as puerts from "puerts";
import * as UE from "ue";
import * as cpp from "cpp";

console.log("Hello Unreal Puerts Slate")
const stb: cpp.TSharedPtr<cpp.STextBlock> = UE.SNew<cpp.STextBlock>({
    Class: cpp.STextBlock
    Argruments:
})
stb.Get().SetText("OFOJWOEI^9979799797")

const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance
const textBlock = GameInstance.GetTextBlock().Get()
const myText = textBlock.GetText()
console.log(myText, "UUUUUUUUU")
const ttt = new cpp.TAttribute<string>("ssssss")
textBlock.SetText(ttt);
// GameInstance.GetTextBlock().Get().SetText("XXXX MMMMMMMMMM __MM ");
// GameInstance.GetTextBlock().Get().SetText(ttt);
const mm = new cpp.TAttribute<UE.Margin>(new UE.Margin(20, 40, 50, 40));
textBlock.SetMargin(ttt)

console.log("XXXXXXXXXX", myText)



