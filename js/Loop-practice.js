
let output= document.getElementById ("output");
let output2= document.getElementById ("output");
// for Loop

let statement="";

for (let counter=1; counter <=20; counter= counter + 1) {
    if (counter % 5 == 0){
        statement= "<div>" + statement + `<button class= "btn btn-danger line-btn"> ${counter} </button> </div>`;
    }else{
        statement= statement + `<button class= "btn btn-danger line-btn">${counter}</button>`
    }
}

output. innerHTML= statement
