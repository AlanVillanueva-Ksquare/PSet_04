type Size = 'small' | 'medium' | 'large' | 'extra-large' //restricting the values for pizza size

class Pizza{
    size: Size //all the propeties of pizza class
    extraCheese: boolean
    numberPepperoni:number
    numberHam: number
    numberPineapple: number

    //constructor of the class setting all the properties
    constructor(size:Size, extraCheese:boolean, numberPepperoni: number, numberHam: number, numberPineapple:number){
        this.size=size
        this.extraCheese=extraCheese
        this.numberPepperoni=numberPepperoni
        this.numberHam=numberHam
        this.numberPineapple=numberPineapple
    }

    //getters and setters for each property
    get getSize():string{
        return this.size
    }
    set setSize(value:Size){
        this.size=value
    }

    get getExtraCheese():boolean{
        return this.extraCheese
    }
    set setExtraCheese(value:boolean){
        this.extraCheese=value
    }

    get getNumberPepperoni():number{
        return this.numberPepperoni
    }
    set setNumberPepperoni(value:number){
        this.numberPepperoni=value
    }

    get getNumberHam():number{
        return this.numberHam
    }
    set setNumberHam(value:number){
        this.numberHam=value
    }
    
    get getNumberPineapple():number{
        return this.numberPineapple
    }
    set setNumberPineapple(value:number){
        this.numberPineapple=value
    }

    //function generating the cost
    public genCost():number{
        let baseCost=0 //the base cost depending on the pizza size
        const extraCheeseCost = this.extraCheese?2:0 //checks if extracheese
        let additional=0 //addiotional cost depending the toppings
        switch (this.size){
            case 'small':
                baseCost=10
                additional = 2*(this.numberPepperoni+this.numberHam+this.numberPineapple)+1*extraCheeseCost
                break
            case 'medium':
                baseCost=12
                additional = 2*(this.numberPepperoni+this.numberHam+this.numberPineapple)+2*extraCheeseCost
                break
            case 'large':
                baseCost=14
                additional = 3*(this.numberPepperoni+this.numberHam+this.numberPineapple)+3*extraCheeseCost 
                break
            case 'extra-large':
                baseCost=18
                additional = 4*(this.numberPepperoni+this.numberHam+this.numberPineapple)+3*extraCheeseCost 
                break
            default:
                throw new Error('Something went wrong!')
        }
        return baseCost+additional
    }

}

const pizza1 = new Pizza('small',true,2,1,0)
console.log(pizza1.genCost())
pizza1.setExtraCheese=false //we should see a decrease of two in the cost
console.log(pizza1.genCost())//total of decrase:2


const pizza2 = new Pizza('medium', false, 3, 0, 1);
console.log(pizza2.genCost())
pizza2.setNumberHam=2 //we should see an increase of 4 in the cost
console.log(pizza2.genCost()) //total of increase:4


const pizza3 = new Pizza('large', true, 1, 2, 2)
console.log(pizza3.genCost())
pizza3.setNumberPepperoni=2 //whe should see an increase of 3 in the cost
pizza3.setNumberPineapple=5//we should see an increase of 9 in the cost
console.log(pizza3.genCost()) //total of increase:12

const pizza4 = new Pizza('extra-large', false, 2, 4, 0)
console.log(pizza4.genCost())
pizza4.setNumberHam=2 //whe should see a decrease of 8 in the cost
pizza4.setNumberPineapple=1//we should see an increase of 4 in the cost
console.log(pizza4.genCost()) //total of decrease of: 4
