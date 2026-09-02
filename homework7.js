const temperature = 25; 
const city = "Казань"; 
const message = `В городе ${city} сейчас ${temperature}°C`;
console.log(message);


const SPEED_OF_LIGHT = 299; 

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Досветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

let product = "Яблоко";
let price = 20;

function checkPurchase(currentBudget) {
    if (currentBudget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        let difference = price - currentBudget;
        console.log(`Вам не хватает ${difference} рублей, пополните баланс`);
    }
}

function calculate_average(num1, num2) {
    "Возвращает среднее арифметическое двух чисел";
    return (num1 + num2) / 2
}

const age = 25;
const height = 1.75;
const name = "Егор";