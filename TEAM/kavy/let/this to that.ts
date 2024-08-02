const x = {
    name:"kavya",
    role:"full stack ",
    export:30,
show: function() {
    let that= this
    setTimeout(() => {

        console.log(`the name is ${this.name}\n the role is ${this.role}`)
    },2000)
}
}
x.show()
