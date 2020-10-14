// function Car(company, model , year ) {
//     this.company = company
//     this.model = model
//     this.year = year
// }


// let car1 = new Car("ford", "mustung" , 2000 )


// console.log(car1);

class Car{
    constructor(company, model , year ){

    this.company = company
    this.model = model
    this.year = year 
    }

    static run(){
        return ' speed up to 200'
    }
}

class IranCar extends Car {
    constructor (make , model , year , color){
        super(make , model ,year)
        this.color = color
    }
    
    fly(){
        return 'car is flying'
    }

    static run(){
        return ' speed up to 40'
    }

    static go(){
        // console.log(this);
        return this.run()
    }
}

let car1 = new IranCar ("ford", "mustung" , 2000 , 'red' )
console.log(car1);
// console.log(car1.go());


// console.log(IranCar.go());


class AdvanceArray extends Array{
    find(value){
        let val = this.filter(item => item === value);
        return val.length === 0 ? 'error' : val[0];
    }
}

let list = new AdvanceArray('vahid' , 'pes' , 'mmd')

console.log(list.find("vahid"));
console.log(list.reverse());