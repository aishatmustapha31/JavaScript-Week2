
let maxRow = 12
  let maxCol = 24

   generateHead()

   generateBody()

 

  function generateHead(){
    let cols=""
    for( let x = 1 ; x <= maxCol; x++ ){
        cols = cols + x+" "
    }
    console.log(cols)
  }

  function generateBody(){

    for(let x =1 ; x <= maxRow; x++){

        let cols= ""
        for(let y = 1; y<= maxCol ; y++){
               cols = cols + ( x*y) + " "
        }
        console.log(cols)
    }
  }