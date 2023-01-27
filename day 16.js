// Set the current date
const today = new Date();

// Set the date 30 days ago
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(today.getDate() - 30);

// Array to store the dates of the streak
const streak = [];

// Loop through the last 30 days and add them to the streak array
for (let i = 0; i < 30; i++) {
    let currentDate = new Date();
    currentDate.setDate(today.getDate() - i);
    streak.push(currentDate);
}

// Check if the streak is unbroken (no gaps in the dates)
let unbroken = true;
for (let i = 0; i < 29; i++) {
    let currentDate = new Date();
    currentDate.setDate(today.getDate() - i);
    let nextDate = new Date();
    nextDate.setDate(today.getDate() - i - 1);
    if (currentDate - nextDate !== 86400000) { // 86400000 milliseconds in one day
        unbroken = false;
        break;
    }
}

if (unbroken) {
    console.log("You have a 30-day streak!");
} else {
    console.log("Your streak is broken.");
}
