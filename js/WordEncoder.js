

let btnEncrypt = document.getElementById("btnEncrypt")

btnEncrypt.onclick   = function(event){

    let eventTarget = event.target
    let buttonValue = event.target.value
    let id = event.target.id
    console.log(eventTarget)
    console.log("value = "+buttonValue)
    console.log("ID = ", id)


    let messageBoxControl = document.getElementById("messageBox");
    let encryptedTextControl = document.getElementById("encryptedText")
    let decryptedTextControl = document.getElementById("decryptedText")

    let inputText = messageBoxControl.value

   let outputText =   encryptText(inputText)

    encryptedTextControl.textContent = outputText

    let decryptedText = decryptText(outputText)

    decryptedTextControl.textContent = decryptedText;


}

function encryptText(word){

    let wordList =[]

    for(let w of word){
        let code = w.charCodeAt()
        let newCode = code + 200
       wordList.push(newCode)
    }

    let outputText =String.fromCharCode(...wordList)
   return outputText

}

function decryptText(word){

    let wordList =[]

    for(let w of word){
      let code = w.charCodeAt()
      let newCode = code -200
      wordList.push(newCode)
    }

    let outputText = String.fromCharCode(...wordList)
    return outputText;

}


// function btnClickedFunction(event){

//     console.log("btn Clicked Function ")

// }