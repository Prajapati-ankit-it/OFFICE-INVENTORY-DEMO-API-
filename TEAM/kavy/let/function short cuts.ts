// short cuts for function 
const sayhello1 = ()=> {
    console.log("hello world")
}
sayhello1()
// function without curly bracket {}

const sayhello2 = () => console.log("hello world")

sayhello2()
// function with arguments 

const sayhello2 = (name)=>  console.log("hello" + name)
sayhello2("kavya")
//function with double arguments

const sayhello3 = (name,greeting)=>  console.log( name +greeting)
sayhello3("kavya" , "good afternoon")


// const is object here and show is function. 

const x = {
    name:"kavya",
    role:"full stack ",
    export:30,
show: function() {
    console.log(`the name is ${this.name}\n the role is ${this.role}`)
}
}
x.show()


