


// let symbol1 = Symbol('fullname')
// let symbol2 = Symbol('fullname')



// let obj = {
//     name: 'vahid' ,
//     [symbol1] : 22
// }


// console.log(obj);

// for (let o in obj) {
//     console.log(o);
    
// }

// console.log(obj[Symbol('fullname')]);
// console.log(symbol1 == symbol2);

// ------------------------------------------------------------

// let symbol1 = Symbol.for('fullname')

// let obj = {
//     name : 'vahid' , 
//     [symbol1] : 22
// }

// let symbolN = Symbol.for('fullname')


// console.log(symbol1 == symbolN);

// console.log(obj[symbolN]);

class ReplaceX {
    constructor(value){
        this.value = value
    }

    // [Symbol.replace](string){
    //     return 'vahid'
    // }

    [Symbol.replace](string){
        return `/${string}/${this.value}`
    }
}

console.log('foo'.replace(new ReplaceX('bar')));