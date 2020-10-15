class Foo {
    constructor(){
        this.log = []
    }

    set current(value){
        this.log.push(value)
    }


    get latest(){
        if (this.log.length === 0) {
            return undefined
        }
        return this.log[this.log.length - 1]
    }
}




let bar = new Foo();
bar.current='A';
bar.current= 'b';


console.log(bar.latest);