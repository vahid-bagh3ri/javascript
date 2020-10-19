// let nameIt = names[Symbol.iterator]()
// console.log(nameIt.next);
// for (const name of names) {
//     console.log(names);
// }


// let user ={
//     id: 1,
//     name: 'vahid' ,
//     email: 'vahid@gmail.com',
//     posts: [
//         {
//             id : 1,
//             title : 'this is post one'
//         },
//         {
//             id : 2,
//             title : 'this is post two'
//         }
//     ]
// }


// names[Symbol.iterator] = function () {
//     let items = this.posts
//     let step = 0
//     return{
//         next(){
//             let obj ={
//                 done : step >=  items.length
//             }
//             step++
//             return obj
//         }
//     }
// }




// let nameIt = names[Symbol.iterator]()
// console.log(nameIt.next());
// for (const name of names) {
//     console.log(name);    
// }