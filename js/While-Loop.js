
let booting = true;
let percent =10;

while( booting == true  ){

      percent +=10;
      console.log(` ${percent}% Booting..`);
      if(percent >=  100){
        booting = false;
      }
}

console.log("System completely booted!");

//  Do While 

  let age = 16;

  do{
      console.log(" Age Range=> ",age);
      age +=1;
  }
  while( age <=24)