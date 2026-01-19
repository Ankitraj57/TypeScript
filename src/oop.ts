// class Chai {
//     flavour: string;
//     price: number

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour
//         this.price = price
//     }

// }

// const masalaChai = new Chai("Ginger", 20)
// masalaChai.flavour = "masala"   

class Chai {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients //ok
    }

    protected shopName = "Chai corner"

}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName //OK
    }
}


class Walet {
    #balance() {
        return this.#balance
    }
}

const w = new Walet()

class Cup {
    readonly capacity: number = 250

    constructor(capacity:number) {
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value:number) {
        if (value > 5) throw new Error("Too Sweet");
        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string) {}
}
console.log(EkChai.shopName);

abstract class Drink {
    abstract make(): void 
}

class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
} 

class Heater {
    heat() {}
}

class ChaiMaker{
    constructor(private heater: Heater) {}

        make() {
            this.heater.heat
        }
}