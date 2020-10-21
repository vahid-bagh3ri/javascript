// let mySymbol = Symbol('my data')
// let myObj = {}
// let myFunc = function () {}

//     let list = new Map()
//     list.set('key1' , 'vahid agha')
//     list.set(mySymbol , 22)
//     list.set(myObj, 'razaviiii ')
//     list.set(myFunc , 500)



//     console.log(list.get)

let mySymbol = Symbol('my data')
let arr=[['key1' , 'hesam' ],['key2' , 'vahid jon' ],['key3' , 'vahid nafes' ]]

    let list = new Map(arr)
    // list.set('key1' , 'vahid agha')
    // list.set('key2' , 'vahid jon')
    // list.set('key3' , 'vahid nafes')
    // list.set(mySymbol , 22)

    // list.clear()
    // console.log(list.has('key2'));
    // console.log(list)

    // list.forEach((val , key) => {
    //     console.log(key , val);
    // })

    // console.log(list.entries());

    // for (const [key , value]  of list) {
    //     console.log(key, value);
    // }

        for (const key  of list.keys()) {
        console.log(key);
    }