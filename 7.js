let secret = Math.floor(Math.random() * 50) + 1;
let guess = 25;
let diff = guess - secret;

if (guess === secret) {
    console.log("Correct guess!");
} else if (diff <= 3 && diff >= -3) {
    console.log("Very close!");
} else if (guess > secret) {
    console.log("Too high");
} else {
    console.log("Too low");
}