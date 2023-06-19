// let num1_Element = document.getElementById('num1') as HTMLInputElement;
// let num2_Element = document.getElementById('num2') as HTMLInputElement;
// let  button_Element = document.querySelector('button');
// function add(num1:number| string,num2:number | string){
//     if(typeof num1==='number'&& typeof num2==='number'){
//         return num1+num2;
//     }else if(typeof num1==='string'&& typeof num2==='string'){
//         return num1+' '+num2;
//     }
//     return +num1 + +num2;
// }
// if(button_Element){
// button_Element.addEventListener('click',function(){
//     const number1 = num1_Element.value;
//     const number2 = num2_Element.value;
//     const result = add(+number1,+number2);
//     const stringResult = add(number1,number2);
//     console.log(result);
//     console.log(stringResult);
// });
// }
var num1_Element = document.getElementById('num1');
var num2_Element = document.getElementById('num2');
var button_Element = document.querySelector('button');
var numResults = [];
var textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
if (button_Element) {
    button_Element.addEventListener('click', function () {
        var number1 = num1_Element.value;
        var number2 = num2_Element.value;
        var result = add(+number1, +number2);
        var stringResult = add(number1, number2);
        numResults.push(result);
        textResults.push(stringResult);
        printResult({ val: result, timestamp: new Date() });
        console.log(numResults, textResults);
    });
}
