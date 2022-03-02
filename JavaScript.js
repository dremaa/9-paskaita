console.log('JavaScript.js start');

const text = 'reverse'
const reverse = text[6] + text[5] + text[4] + text[3] + text[2] + text[1] + text[0];
console.log(reverse)

// Hello, {name} {lastname}.

// Your yearly income is ${amount} and you must pay {percents}% of income taxes. Which is ${taxesTotal} in total.
// You must pay the bills till {year} {month_name} {day}.

// Best regards, "Tax Reminder" Inc.

const name = "Emilija";
const lastName = "Drapkinaite";
const amount = "1000";
const textTotal = 1000*15/100;
const year = "2022";
const mounth = "Feb";
const day = "28"

const emailText = `hello, ${firstName} ${lastName}.\nYour yearly income is ${amount} and you must pay ${percents}% of income taxes. Which is $${taxesTotal} in total.\nYou must pay the bills till ${year} ${month_name} ${day}.`