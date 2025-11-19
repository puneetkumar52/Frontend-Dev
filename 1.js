let userName = "Puneet";
let hour = new Date().getHours();
let msg = "";

if (hour < 12) {
    msg = `Good Morning ${userName}!`;
} else if (hour >= 12 && hour < 17) {
    msg = `Good Afternoon ${userName}!`;
} else {
    msg = `Good Evening ${userName}!`;
}

console.log(msg);