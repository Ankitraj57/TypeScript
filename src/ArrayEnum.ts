const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 25},
]

const cities: readonly string[] = ["Delhi", "Jaipur"]

const table: number[] [] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]

const location: readonly [number, number] = [28.66, 32.22]

const chaiItems: [name: string, price: number] = ["Masala", 25]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiTye {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiTye) {
    console.log(`Making: ${type}`);
}

makeChai(ChaiTye.GINGER)
// makeChai("masala")

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra")