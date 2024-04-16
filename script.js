const calculateButton = document.getElementById("calculateBtn");
const age = document.querySelector(".age");
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    const birthday = document.getElementById("date").value;
    const currentDate = new Date().toISOString().split("T")[0];
    const difference = getDateDifference(birthday, currentDate);
    age.innerHTML = `You are <span class="accent-color">${difference.years}</span> years, <span class="accent-color">${difference.months}</span> months and 
    <span class="accent-color">${difference.days}</span> days old`
}

function getDateDifference(birthday, currentDate) {
    // Parse the birthday and current date strings into Date objects
    const birthDate = new Date(birthday);
    const now = new Date(currentDate);

    // Calculate the difference in milliseconds
    const diffInMs = Math.abs(now - birthDate);

    // Convert milliseconds to years, months, and days
    const msInDay = 1000 * 60 * 60 * 24;
    const msInMonth = msInDay * 30.44; // Average number of milliseconds in a month

    // Calculate the number of years, months, and days
    const years = Math.floor(diffInMs / (msInDay * 365));
    const months = Math.floor(diffInMs / msInMonth) % 12;
    const days = Math.floor(diffInMs / msInDay) % 30;

    return {
        years: years,
        months: months,
        days: days
    };
}


calculateButton.addEventListener('click', calculateAge);