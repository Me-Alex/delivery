let btn1 = document.querySelector("#button-yes");
let btn2 = document.querySelector("#button-no");
let signIn = document.querySelector(".sign-in");
let buttons = document.querySelector(".question-buttons");
let text = document.querySelector(".h1-text");
let closeWindow = document.querySelector(".close-window");
let container = document.querySelector(".index-container-header");
let accountExist = document.querySelector(".user-has-an-account");
let loginForm = document.querySelector(".log-in");





btn1.onclick = () => {
    console.log("da");
    signIn.style.display = "inherit";
    buttons.style.display = "none";
    text.innerText = "You need to sign in first";
    console.log("ceve");
};
btn2.onclick = () => {
    console.log("nu");
    text.innerText = "Te doare la pula";
}
closeWindow.onclick = () => {
    container.style.display = "none";
}
accountExist.onclick = () => {
    loginForm.style.display="inherit";
    signIn.style.display = "none";
    text.innerText = "Log in";
}