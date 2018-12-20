// open closed principle
// Software entities should be open for extension but closed for modification. 
// One should be able to extend our module's behavour without needing to modify existing code.

const flavourList = ['vanila', 'strawberry'];

class IceCreamMaker {
    static makeIceCream(flavour) {
        if(flavourList.indexOf(flavour)> -1){
            return `You have ${flavour} ice cream`;
        } else {
            return `Epic fail. No ice cream`;
        }
    }

    static addFlavour(flavour) {
        flavourList.push(flavour);
        return `You have added ${flavour} flavour`;
    }
}

class IceCreamAndMilkShakeMaker extends IceCreamMaker {
    static makeIceAndMilkShake(flavour) {
        const icecream = this.makeIceCream(flavour);
        if(flavourList.indexOf(flavour)> -1){
            return `You have ${flavour} Milkshake + ${icecream}`;
        }
        else {
            return `Epic fail. No Milkshake`
        }
    }
}

console.log(IceCreamMaker.makeIceCream('strawberry'));
console.log(IceCreamMaker.makeIceCream('choc0late'));
console.log(IceCreamAndMilkShakeMaker.makeIceAndMilkShake('strawberry'));
console.log(IceCreamAndMilkShakeMaker.addFlavour('choc0late'));
console.log(IceCreamAndMilkShakeMaker.makeIceCream('choc0late'));
console.log(IceCreamAndMilkShakeMaker.makeIceAndMilkShake('choc0late'));