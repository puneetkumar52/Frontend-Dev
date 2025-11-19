let marks = [85, 78, 92, 88, 90];
let detained = false;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        detained = true;
    }
}

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

let percent = (total / marks.length).toFixed(2);

if (detained) {
    console.log("Detained");
} else if (percent >= 85) {
    console.log("Promoted with Distinction");
} else if (percent >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}