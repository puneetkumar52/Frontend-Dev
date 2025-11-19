let userName = "Puneet";
let age = 21;
let isActive = true;
let hobbies = ["coding", "gym"];
let details = { city: "Delhi", course: "BBA" };
let emptyValue = null;
let unknownValue;

console.table([
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Active", value: isActive, type: typeof isActive },
    { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "Details", value: details, type: typeof details },
    { label: "Null Value", value: emptyValue, type: typeof emptyValue },
    { label: "Undefined", value: unknownValue, type: typeof unknownValue }
]);