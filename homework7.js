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


// смена цвета первой карточки
const card = document.querySelector(".card");
const colorChangerFirstButton = document.querySelector("#color-changer-first-button");

colorChangerFirstButton.addEventListener("click", () => {
  card.style.backgroundColor = "green";
});


// смена цвета всех карточек
const cards = document.querySelectorAll(".card");
const colorChangerAllButton = document.querySelector("#color-changer-all-button");

colorChangerAllButton.addEventListener("click", () => {
  cards.forEach((card) => { card.style.backgroundColor = "blue"; });
});


// открытие Google
const openGoogleButton = document.querySelector("#open-google");
openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы хотите открыть Google?");
  if (answer===true) {
    window.open("https://www.google.com");
  } else {
    return;
  }
}


// вывод консоль лог
const outputConsoleLogButton = document.querySelector("#outputConsoleLog");
outputConsoleLogButton.addEventListener("click", outputConsoleLog);
function outputConsoleLog() {
  console.log("Hello, World!");
}


// смена цвета кнопки
const changeColorButton = document.querySelector("#changeColorButton");
changeColorButton.addEventListener("click", changeColor);

function changeColor() {
  const currentColor = changeColorButton.style.backgroundColor;
  
  if (currentColor === "red") {
    changeColorButton.style.backgroundColor = "blue";
  } else {
    changeColorButton.style.backgroundColor = "red";
  }
}