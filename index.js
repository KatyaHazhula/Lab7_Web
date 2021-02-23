//В перше текстове поле вводиться рядок тексту. В друге текстове поле вводиться
// число, яке вказує кількість символів n. При змінні значень текстових полів має
// виконатись функція. Функція виконує обрізання довгого текстового рядка за
// наступним принципом: якщо кількість символів введеного тексту є більшим за
// задану довжину n, то функція повертає перші n символів введеного рядка та
// додає багатокрапку (…). Якщо введений рядок є меншим за задану довжину n,
// то функція повертає весь введений рядок.

let inputText1=document.getElementById('inputText1');
let inputNum1= document.getElementById('inputNum1');
inputNum1.onchange=(ev)=>{
    task1();
    ev.preventDefault();
}

function task1(){
    let newString=inputText1.value;
    if(newString.length>inputNum1.value){
        newString=newString.slice(0,inputNum1.value);
        newString=newString+'...';
    }
    inputText1.value=newString;
}
//При натисканні на кнопку має виконатись функція яка виводить на екран
// поточну дату-час у форматі '12:59:59 31.12.2020'.Якщо місяць або день
// містять лише одну цифру, то перед такою датою або місяцем має додаватись 0
// (наприклад, з дати 1.9.2019 буде утворено 01.09.2019).

 let currentDate = new Date();
let showDateButton=document.getElementById('showDate');

showDateButton.onclick=(ev)=> {
    showDate();
    ev.preventDefault();
}

function showDate(){
    let hours=("0" + currentDate.getHours()).slice(-2)
    let minutes=("0" + currentDate.getMinutes()).slice(-2)
    let seconds=("0" + currentDate.getSeconds()).slice(-2)
    let year=(currentDate.getFullYear())
    let month=("0" + (currentDate.getMonth() + 1)).slice(-2)
    let day=("0" + currentDate.getDate()).slice(-2);
    let fullDate=hours+':'+minutes+':'+seconds+' '+year+':'+month+':'+day;
    alert(fullDate);

}

//В текстове поле вводиться число. При натисканні на кнопку має виконатись функція
// яка вираховує квадратний корінь з суми введеного числа і числа, утвореного з
// введеного числа у зворотному порядку. Наприклад, введено число 123. Функція має
// порахувати квадратний корінь від (123+321).

let input2=document.getElementById('input2');
let button2= document.getElementById('button2');
let result= document.getElementById('result');

button2.onclick=(ev)=>{
    task3();
    ev.preventDefault();
}
function task3(){
    debugger;
    let num= +input2.value;
    let reverse = parseInt(String(num).split("").reverse().join(""));
    let sum= num+ reverse;
    let sqrt= Math.sqrt(sum);
    result.textContent=sqrt;
}