import * as cpp from "cpp";
import * as UE from "ue";
import * as puerts from "puerts";
import {BaseClass, ChildClass, Script_ChildClass} from "cpp";

const GameInstance: UE.TestPuertsSlateGameInstance = puerts.argv.getByName("GameInstance") as UE.TestPuertsSlateGameInstance


let aa = new cpp.ChildClass();


class TS_Class1 extends ChildClass {
    Tick(p0: number) {
        super.Tick(p0);
        console.log("TS_Class1::Tick")
    }
}

aa = new TS_Class1()

class tt {
    Tick() {
        // super.Tick()
    }
}

class TS_Class2 extends ChildClass {
    age: number
    t: tt

    constructor() {
        super()
        // super({});
        // this.Register(this)
        this.age = 456
        this.t = new tt()
    }

    Tick(p0: number) {
        super.Tick(p0);
        console.log("TS_Class2222::Tick", p0, this.age)

        // const v = new tt()
        // const ab = Object.getOwnPropertyDescriptor(v, "Tick")
        // console.log(ab)
        // console.log("TS_Class2222::Tick", p0, this.age)
    }
}


class TS_Class3 extends Script_ChildClass {
    age: number
    t: tt

    constructor() {
        super({});
        this.Register(this)
        this.age = 456
        this.t = new tt()
    }

    Tick(p0: number) {
        // super.Tick(p0);
        this.Super.Tick(p0);
        // this.constructor.prototype.Tick.call(this, p0)
        console.log("TS_Class2222::Tick", p0, this.age)

        // const v = new tt()
        // const ab = Object.getOwnPropertyDescriptor(v, "Tick")
        // console.log(ab)
        // console.log("TS_Class2222::Tick", p0, this.age)
    }
}

aa = new TS_Class3()


GameInstance.SetScriptClass(aa)


class A {
    Tick(d: number) {
        console.log("A:Tick")
    }
}


class B extends A {
    Tick(d: number) {
        super.Tick(d)
        console.log("B:Tick")
    }
}


class C extends B {
    Tick(d: number) {
        // A.prototype.Tick.call(this, d)
        super.Tick(d)
        console.log("C:Tick")
    }
}

const f = new C()
f.Tick(2)