

let output = document.getElementById("output");
let output2 = document.getElementById("output2");


//  For Loop 

// for( Loop Initialization ; Condition  ; Incremental ;  )

let statement = "";

for (let counter = 1; counter <= 20; counter = counter + 1) {

    if (counter % 5 == 0) {
        statement = "<div>" +  statement + `<button class="btn btn-danger line-btn"> ${counter} </button> </div>`;
    } else {
        statement = statement + `<button class="btn btn-danger line-btn"> ${counter} </button> `;

    }


}

output.innerHTML = statement;


/// 

let students = ['James', 'Kings', 'Mary', 'Jones', 'Mark', 'Glory', 'Batty']

for (let index = 0; index <= students.length - 1; index++) {
    console.log(students[index])
}

//  Printing in Reverse form 

console.log("========================================")

for (let counter = students.length - 1; counter >= 0; counter--) {
    console.log(students[counter]);
}

//  For of  Loop 

for (let student of students) {
    console.log("Student=>", student);
}

let message = "Welcome to Javascript Class";

for (let m of message) {
    console.log(m.toUpperCase());
}


//  While Loop 

// You initialize the control variable  from before the loop declaration

// Put the increment in the loop body
// Put the terminating condition in the loop body 

let total = 0;

while (total < 20) {

    total = total + 2;

    console.log("New Total => ", total);
}

// Infinity Loop 

let index = 55;

for (; ;) {

    index += 5;
    if (index >= 60)
        break;

}

for(let counter = 1; counter <= 20; counter++){
 
    if(counter==5) continue;

    console.log("C=>",counter);

    if(counter== 10)  break;
}