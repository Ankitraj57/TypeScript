function getChai(kind: string | number) {
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

function serverChai(msg?: string) {
    if(msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small") {
        return `small cutting chai...`
    }
    if(size === 'medium' || size === 'large'){
        return `make extra chai`
    }
    return `chai order #${size}`
}

class kulhadChai {
    serve() {
        return `Serving kulhad Chai`;
    }
}

class Cutting {
    server() {
        return `Serving Cutting Chai`;
    }
}

function serve(chai: kulhadChai | Cutting) {
    if(chai instanceof kulhadChai) {
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar == "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "elaichi":
            return `Elachi Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
    }
}