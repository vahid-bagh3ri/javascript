// let myFirstPromise = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         reject('this is an error')
//     } , 2000)

// })



// console.log('run 1');
// myFirstPromise
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))
// console.log('run 3');

// function getData(url) {
//     const httpRequest = new XMLHttpRequest()
//     httpRequest.open("get", url)
//     httpRequest.onreadystatechange = function () {
//             if (this.readyState == XMLHttpRequest.DONE) {
//                 if(this.status == 200){
//                     return this.responseText
//                 }
//             else if(this.status == 404) {
//                 return "data not found"
//             } else {
//                 return "something goes wrong"
//             }
//         }
//     }
//     httpRequest.send()
// }

// console.log(getData ('https://jsonplaceholder.typicode.com/todos/1'))
// -----------------------------------------------------------------------------------------------------------

// function getData(url) {
//     return new Promise((resolve , reject) => {
//             const httpRequest = new XMLHttpRequest()
//             httpRequest.open("GET", url)
//             httpRequest.onreadystatechange = function() {
//                     console.log(XMLHttpRequest.DONE);
//                     if (this.readyState == XMLHttpRequest.DONE) {
//                         if(this.status == 200) {
//                             resolve(this.responseText)
//                         }
//                         else if(this.status == 404) {
//                             reject("data not found") 
//                         } else {
//                             reject("something goes wrong")
//                         }
//                 }
//             }
//             httpRequest.send()
//     })
// }
// getData ('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
// ------------------------------------------------------------

// function getData(url) {
//     return new Promise((resolve , reject) => {
//             const httpRequest = new XMLHttpRequest()
//             httpRequest.open("GET", url)
//             httpRequest.onreadystatechange = function() {
//                     console.log(XMLHttpRequest.DONE);
//                     if (this.readyState == XMLHttpRequest.DONE) {
//                         if(this.status == 200) {
//                             resolve(this.responseText)
//                         }
//                         else if(this.status == 404) {
//                             reject("data not found") 
//                         } else {
//                             reject("something goes wrong")
//                         }
//                 }
//             }
//             httpRequest.send()
//     })
// }


// function paresToJason(dataText) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             try {
//                 resolve(JSON.parse(dataText))
//             } catch (error){
//                 reject(error)
//             }
//         }, 2000)
//     })
// }

// getData ('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .then((json) => {
//         console.log(json)
//     })
//     .catch(err => console.log(err))


// function doSomething() {
//     let name = 'hesam'
//     return Promise.reject('erroooor')
//     return Promise.resolve(name)


// }

// doSomething().then((data) => console.log(data) , err => console.log(err))



let promise1 = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject('rejected')
    }, 2000)
})

let num =42


let promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve('resolved')
    }, 1000)
})

Promise.race([promise1 , num , promise3])
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))

