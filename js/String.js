
// String Creation 

//  using string literal 
let s1 = "Hello"
let s2 = 'World'
let s3 = ` ${s1} ${s2}`

// From String Object 

let s4 = String(1900)
console.log(typeof s4 )
let s5 = String(false)
console.log(typeof s5)

let n0 = 3000
let n1 = Number(3000)

let n1s = n1.toString()


let s6 = (1900).toString()

// Character Code 

let val1 = "a"
let val1Code = val1.charCodeAt()

console.log(val1, val1Code)

let enCode = [120,675,456,189,98,349,45,78,230]

let deCode = String.fromCharCode(...enCode)

let characters =[]

for(let c of deCode){
    //console.log(c,c.charCodeAt())
    characters.push(c.charCodeAt())
}

console.log(...characters)

//object
 

let human = {
    firstName: "James",
    lastName: "Bond",
    phone : "0908654323",
    color: "Black",
    eat: function(){
        console.log("Human is Eating...")
    },
    dance: function(){
        console.log("Human is Dancing..")
    }
}


console.log(human.firstName, human.lastName)

human.dance()
human.eat()



