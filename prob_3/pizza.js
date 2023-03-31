var Pizza = /** @class */ (function () {
    //constructor of the class setting all the properties
    function Pizza(size, extraCheese, numberPepperoni, numberHam, numberPineapple) {
        this.size = size;
        this.extraCheese = extraCheese;
        this.numberPepperoni = numberPepperoni;
        this.numberHam = numberHam;
        this.numberPineapple = numberPineapple;
    }
    Object.defineProperty(Pizza.prototype, "getSize", {
        //getters and setters for each property
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "setSize", {
        set: function (value) {
            this.size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "getExtraCheese", {
        get: function () {
            return this.extraCheese;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "setExtraCheese", {
        set: function (value) {
            this.extraCheese = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "getNumberPepperoni", {
        get: function () {
            return this.numberPepperoni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "setNumberPepperoni", {
        set: function (value) {
            this.numberPepperoni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "getNumberHam", {
        get: function () {
            return this.numberHam;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "setNumberHam", {
        set: function (value) {
            this.numberHam = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "getNumberPineapple", {
        get: function () {
            return this.numberPineapple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "setNumberPineapple", {
        set: function (value) {
            this.numberPineapple = value;
        },
        enumerable: false,
        configurable: true
    });
    //function generating the cost
    Pizza.prototype.genCost = function () {
        var baseCost = 0; //the base cost depending on the pizza size
        var extraCheeseCost = this.extraCheese ? 2 : 0; //checks if extracheese
        var additional = 0; //addiotional cost depending the toppings
        switch (this.size) {
            case 'small':
                baseCost = 10;
                additional = 2 * (this.numberPepperoni + this.numberHam + this.numberPineapple) + 1 * extraCheeseCost;
                break;
            case 'medium':
                baseCost = 12;
                additional = 2 * (this.numberPepperoni + this.numberHam + this.numberPineapple) + 2 * extraCheeseCost;
                break;
            case 'large':
                baseCost = 14;
                additional = 3 * (this.numberPepperoni + this.numberHam + this.numberPineapple) + 3 * extraCheeseCost;
                break;
            case 'extra-large':
                baseCost = 18;
                additional = 4 * (this.numberPepperoni + this.numberHam + this.numberPineapple) + 3 * extraCheeseCost;
                break;
            default:
                throw new Error('Something went wrong!');
        }
        return baseCost + additional;
    };
    return Pizza;
}());
var pizza1 = new Pizza('small', true, 2, 1, 0);
console.log(pizza1.genCost());
pizza1.setExtraCheese = false; //we should see a decrease of two in the cost
console.log(pizza1.genCost()); //total of decrase:2
var pizza2 = new Pizza('medium', false, 3, 0, 1);
console.log(pizza2.genCost());
pizza2.setNumberHam = 2; //we should see an increase of 4 in the cost
console.log(pizza2.genCost()); //total of increase:4
var pizza3 = new Pizza('large', true, 1, 2, 2);
console.log(pizza3.genCost());
pizza3.setNumberPepperoni = 2; //whe should see an increase of 3 in the cost
pizza3.setNumberPineapple = 5; //we should see an increase of 9 in the cost
console.log(pizza3.genCost()); //total of increase:12
var pizza4 = new Pizza('extra-large', false, 2, 4, 0);
console.log(pizza4.genCost());
pizza4.setNumberHam = 2; //whe should see a decrease of 8 in the cost
pizza4.setNumberPineapple = 1; //we should see an increase of 4 in the cost
console.log(pizza4.genCost()); //total of decrease of: 4
