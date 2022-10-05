




function multiplicationTable() {
    var table;
    table='<table id="mtable">';

    var num1=document.getElementById("number1").value;
    var num2=document.getElementById("number2").value;
    if(num1==null || num1=="")
    num1=1;
    if(num2==null || num2=="")
    num2=12;
    for(i=1;i<=12;i++){
     table+='<tr>';
      for(num=num1;num<=num2;num++){
          table+='<td>'+num*i+'</td>';
       }
       table+='</tr>';
      }

    table+='</table>';
    document.getElementById("result").innerHTML = table;
    }




