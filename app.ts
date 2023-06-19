
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




let num1_Element = document.getElementById('num1') as HTMLInputElement;
let num2_Element = document.getElementById('num2') as HTMLInputElement;

let  button_Element = document.querySelector('button')!;

const numResults:number[] = [];
const textResults:string[] = [];


type NumOrString = number | string
type Result = { val:number;timestamp:Date};

interface ResuluObj{
    val:number;timestamp:Date
}


function add(num1:NumOrString,num2:NumOrString){
    if(typeof num1==='number'&& typeof num2==='number'){
        return num1+num2;
    }else if(typeof num1==='string'&& typeof num2==='string'){
        return num1+' '+num2;
    }
    return +num1 + +num2;
    
}

function printResult(resultObj:ResuluObj){
    console.log(resultObj.val);
}

if(button_Element){
button_Element.addEventListener('click',function(){
    const number1 = num1_Element.value;
    const number2 = num2_Element.value;
    const result = add(+number1,+number2);
    const stringResult = add(number1,number2);
    numResults.push(result as number);
    textResults.push(stringResult as string);
    printResult({val:result as number,timestamp:new Date()})
    console.log(numResults,textResults);
});
}


