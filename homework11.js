const emailForm = document.getElementById("footer__submit-form");
const registrationForm = document.getElementById("registration__submit-form");
const userPassword = document.querySelector(".registration__password");
const userPasswordConfirm = document.querySelector(
    ".registration__password-confirm",
);
const submitRegistration = document.querySelector(".registration__submit");
const overLay = document.querySelector(".overLay");
let user = null;

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
});

userPasswordConfirm.addEventListener("input", () => {
    userPasswordConfirm.setCustomValidity("");
});

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userPasswordConfirm.value !== userPassword.value) {
        userPasswordConfirm.setCustomValidity("Пароли не совпадают");
        return
    } else {
        userPasswordConfirm.setCustomValidity("");
    }
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.createdOn = new Date().toLocaleString();
    console.log(data);
    user = data;
    document.querySelector(".overlay").classList.remove("active");
});