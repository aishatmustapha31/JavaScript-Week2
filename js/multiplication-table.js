let output= document.getElementById ("output")


function multiplicationTable() {
    var table;
    table='<table id="mtable">';

    var num=document.getElementById("number").value;
    if(num==null || num=="")
    num=5;
       for(i=1;i<=10;i++){
          table+='<tr><td>'+num+'*'+i+'='+num*i+'</td></tr>';
       }

    table+='</table>';
    document.getElementById("result").innerHTML = table;
    }

output.innerHTML=statement;