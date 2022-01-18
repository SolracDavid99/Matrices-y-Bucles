//https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops

//Exercise #1

var bank = ["Sofia","David","Juan"];
console.log(bank);

bank.push("Sara","Agustin");
console.log(bank);

bank.shift();
console.log(bank);


bank[0]="Renata";
bank.unshift("David");
bank.push("Elena");
console.log(bank);


//Exercise #2

var n=5;
var cadena="";

for(let x=1;x<=n;x++){
    cadena = cadena + "* ";
    console.log(cadena);
}



//Exercise #3

//Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,as long as xValue remains positive.

for(let x=5;x>=0;x-=0.5){
    console.log(x);
}



// Print all the odd numbers between 1 - 100.

function primo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

for (let x=0;x<=100;x++) {
    if (primo(x))
        console.log(x);
}



//Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

var n=6;
var cadena="";

for(let x=1;x<=n;x++){
    cadena = cadena + "[" + x + "] ";
}
console.log(cadena);



// Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

var n = 19;
var res = 0;

while(n>=0){
    res = res + n;
    n--;
}

console.log(res);