class Car{
    constructor(make , model){
        this.make = make
        this.model = model
    }
}

// let obj = new Car('ford' , 'xxx')
// let obj2 = Reflect.construct (Car, ['ford' , 'xxx'] )

// console.log(obj.__proto__ == obj2.__proto__);


// class IranCar {
//     constructor() {}
// }
// let obj = new Car('ford' , 'xxx')
let obj = Reflect.construct (Car, ['ford' , 'xxx'])

// console.log(obj2);


// let user = {
//     name :'hesam',
//     email: 'hesam@gmail.com'
// }

// function sayHello(age,x) {
//     console.log(x);
//     return `hello ${this.name}, your email is : ${this.email}, you're ${age}`
// }

// console.log(sayHello.apply(user,[26,'13']));

// console.log(Reflect.apply(sayHello,user,[26,'13']));


// console.log(Reflect.getPrototypeOf(obj));
let obj3 ={
    age:"2000"
}

Reflect.setPrototypeOf(obj , obj3)

console.log(Reflect.getPrototypeOf(obj))
