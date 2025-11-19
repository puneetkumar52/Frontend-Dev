let a = Math.floor(Math.random() * 20) + 1;
let b = Math.floor(Math.random() * 20) + 1;
let ops = ["+", "-", "*", "/"];
let index = Math.floor(Math.random() * ops.length);
let op = ops[index];
let ans;

switch (op) {
    case "+":
        ans = a + b;
        break;
    case "-":
        ans = a - b;
        break;
    case "*":
        ans = a * b;
        break;
    case "/":
        ans = (a / b).toFixed(2);
        break;
}

console.log(a + " " + op + " " + b);
console.log("Answer:", ans);