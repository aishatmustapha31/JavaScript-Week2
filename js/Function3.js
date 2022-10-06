// Unlimited Numbers of Arguments Or Parameters 

function average(...val){
   console.log("Length=>", val.length)
   let sum =0
   let numberOfScores = val.length
   for(let n of val){
      sum = sum + n 
   }

   let average = sum / numberOfScores
   console.log("Average Score => ", average);
   return average
}

let scores = [16,12,15,10,8,14,4,7,9,17]

 average(...scores)

 // Calculate mode , media , Standard Deviation
 
 // Default Value 
 function alartUs(message=" Break Time "){
    console.log("Alart message => ", message)
 }

 alartUs("Morning Prayer ")