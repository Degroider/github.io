let op;
let oper;
let one;
let number = "";
const btn = document.querySelector(".btn");
const c = document.querySelector(".btnc");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    content.classList.toggle("hidden");
}

c.addEventListener("click", clear);

function clear() {
    number = "";
    document.getElementById("sub_number").textContent = '';
    document.getElementById("first_Number").value = '';
}


function add_number() {
    
    switch (one) {
        case '0':
            number += '0';
            break;
        case '1':
            number += '1';
            break;
        case '2':
            number += '2';
            break;
        case '3':
            number += '3';
            break;
        case '4':
            number += '4';
            break;
        case '5':
            number += '5';
            break;
        case '6':
            number += '6';
            break;
        case '7':
            number += '7';
            break;
        case '8':
            number += '8';
            break;
        case '9':
            number += '9';
            break;

    }
    document.getElementById("first_Number").value = number;
}

function finding_result() {
    let result;
    let first_Number = Number(document.getElementById("first_Number").value);
    oper = "";
    switch (op) {
        case '√':
            result = Math.sqrt(first_Number);
            clear();
            break;
        case '^':
            result = first_Number * first_Number;
            clear();
            break;
        case '10^':
            result = Math.pow(10, first_Number);
            clear();
            break;
        case 'log':
            result = Math.log(first_Number);
            clear();
            break;
        case 'ln':
            result = Math.log10(first_Number);
            clear();
            break;
        case 'n!':
            result = factorial(first_Number);
            clear();
            break;
        case '|x|':
            result = Math.abs(first_Number);
            clear();
            break;
        case 'e^x':
            result = Math.exp(first_Number);
            clear();
            break;
            case '1/x':
            result = 1/first_Number;
            clear();
            break;
        case '+':
            result = first_Number;
            oper = "+";
            break;
        case '-':
            result = first_Number;
            oper = "-";
            break;
        case '*':
            result = first_Number;
            oper = "*"
            break;
        case '/':
            result = first_Number;
            oper = "/";
            break;
        default:
            result = 'ВЫБЕРИТЕ ОПЕРАЦИЮ';
    }
    number = document.getElementById("first_Number").innerHTML;
    document.getElementById("sub_number").textContent = result;
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}




function answer() {
    let second_Number = Number(number);
    let res = Number(document.getElementById("sub_number").innerHTML);
    switch (oper) {
        case 'emp':
            res = '';
            break;
        case '+':
            res += second_Number;
            break;
        case '-':
            res -= second_Number;
            break;
        case '*':
            res *= second_Number;
            break;
        case '/':
            if (second_Number != 0) {
                res /= second_Number;
            } else {
                res = 'БЕСКОНЕЧНОСТЬ';
            }
            break;
        default:
            res = 'ВЫБЕРИТЕ ОПЕРАЦИЮ';
    }
    oper = "emp";
    document.getElementById("sub_number").innerHTML = res;
}