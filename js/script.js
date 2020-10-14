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

    run(){
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
    go(){
        return this.run
    }
}

let car1 = new IranCar ("ford", "mustung" , 2000 , 'red' )
console.log(car1);
