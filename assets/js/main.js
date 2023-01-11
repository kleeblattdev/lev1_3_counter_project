let x = document.getElementById("output");
let n = 1;

x = n-1;


//addition
function plusOne(){
    let n = x ++;
    document.getElementById("output").innerHTML = n;
}

function plusTen(){
    const n = x + 10;
    document.getElementById("output").innerHTML = n;
}

function plusHundred(){
    const n = x + 100;
    document.getElementById("output").innerHTML = n;
}

function newStart(){
    document.getElementById("output").innerHTML = 0;
}


//substraction

function minusOne(){
    const n= x --;
    document.getElementById("output").innerHTML = n;
}

function minusTen(){
    const n = x - 10;
    document.getElementById("output").innerHTML = n;
}

function minusHundred(){
    const n = x - 100;
    document.getElementById("output").innerHTML = n;
}

// multiplication

function double(){
    const n= x * 2;
    document.getElementById("output").innerHTML = n;
}