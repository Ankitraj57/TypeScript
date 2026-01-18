const obj = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);            
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})    

type chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<chai, "name" | "price">;   

const chaiInfo: BasicChaiInfo = {
    name : "Lemon Tea",
    price: 30
}


type chaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChai = Omit<chai, "secretIngredients"   >