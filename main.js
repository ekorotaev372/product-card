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
