const input = require("sync-input");

let amount;

const currency = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

function convertCurrencies() {
    console.log("What do you want to convert?");
    let answer = input("From: ").toUpperCase();

    if (!(answer in currency)) {
        console.log("Unknown currency");
        return;
    }

    let answer2 = input("To: ").toUpperCase();

    if (!(answer2 in currency)) {
        console.log("Unknown currency");
        return;
    }

    amount = Number(input("Amount: "));

    if (amount < 0) {
        console.log("The amount can not be less than 1");
    }
    else if (isNaN(amount)) {
        console.log("The amount has to be a number");
    }
    else {
        const convert = currency[answer2] * (amount / currency[answer]);
        console.log(`Result: ${amount} ${answer} equals ${convert.toFixed(4)} ${answer2}`);
    }

}

function startProgram() {
    console.log("Welcome to Currency Converter!");
    console.log("1 USD equals  1 USD");
    console.log("1 USD equals  113.5 JPY");
    console.log("1 USD equals  0.89 EUR");
    console.log("1 USD equals  74.36 RUB");
    console.log("1 USD equals  0.75 GBP");

    while (true) {
        console.log("What do you want to do?");
        let choose = input("1-Convert currencies 2-Exit program\n");

        if (choose === "2") {
            console.log("Have a nice day!");
            break;
        }
        else if (choose === "1") {
            convertCurrencies();
        }
        else {
            console.log("Unknown input")
        }
    }
}

startProgram();


