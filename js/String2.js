// Convert string from Lower to Upper Case  and vice versa 

let _name = "James Bond 007"

console.log(_name.toUpperCase())
console.log(_name.toLowerCase())


// Splitting String 
let  splittedName = _name.split(" ")

console.log(splittedName)

let s1 = "Hello\aFriends"

console.log( s1)

let s2 = 'King\'s Friends'

let s3 = " King's  \"B\"oy "
let s4 = ' King\'s "B"oy'

let s5 = `King's "Boys" are\tcoming `

console.log(s5)

// The Length of a String 

let book = "Thinking in Java"
let book_length = book.length;

let charAtIndex = book[1]
let charAtIndex2 = book.charAt(3)

console.log( charAtIndex2)

// Getting   Sub String 

let  fullname = "James Bond 007"

// subString(startIndex, endIndex - 1 )
let firstName = fullname.substring(0,5)

let code =  fullname.substring(11,14)


console.log(firstName,code, )

// Searching for letter or word in a string 

let statement = "Everybody love chris, but the love is over."

let searchKey ="love"

let searchResult = statement.indexOf(searchKey,5)

if(searchResult > -1){
    console.log(` ${searchKey} is found at index ${searchResult}`)
}else{
    console.log(` ${searchKey} is not found`)
}



