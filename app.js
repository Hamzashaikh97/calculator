function getNum(num){
    var result=document.getElementById("result")
     result.value +=num;

}

function clearResult(num){
    var result=document.getElementById("result")
     result.value ="";

}
function getResult(num){
    var result=document.getElementById("result")
    result.value=eval(result.value)
    console.log(result.value)

}