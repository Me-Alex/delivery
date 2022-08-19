let signIn = document.querySelector(".sign-in");
let buttons = document.querySelector(".question-buttons");
let text = document.querySelector(".h1-text");
let container = document.querySelector(".index-container-header-none");
let loginForm = document.querySelector(".log-in");
let signinForm = document.querySelector(".sign-in");
let menuline = document.querySelectorAll(".menu-line");
let logInShow = document.querySelector(".log-in-show");
let btnLogout = document.querySelector(".btn-logout");
let restaurantList = document.querySelector(".restaurant-list");
let restaurant = document.querySelector(".restaurant-result");
let restaurantProduct = document.querySelector(".restaurant-products");
let restaurantProductList = document.querySelector(".restaurant-products-list");
if (restaurantList)
    restaurantList.innerHTML = "";
if (restaurantProductList)
    restaurantProductList.innerHTML = "";



let btn1 = document.querySelector("#button-yes");
btn1.onclick = () => {
    console.log("da");
    signIn.style.display = "inherit";
    buttons.style.display = "none";
    text.innerText = "You need to sign in first";
    console.log("ceve");
};


let btn2 = document.querySelector("#button-no");
btn2.onclick = () => {
    console.log("nu");
    text.innerText = "Please ";
}

// let closeWindow = document.querySelector(".close-window");
// closeWindow.onclick = () => {
//     container.style.display = "none";
// }

let accountExist = document.querySelector(".user-has-an-account");
accountExist.onclick = () => {
    loginForm.style.display = "inherit";
    signIn.style.display = "none";
    text.innerText = "Log in";
}


let menu = document.querySelector(".menu-lines");
menu.onclick = () => {
    menu.classList.toggle("menu-lines1");
    // container.style.display = "inherit";
    menu.style.zIndex = "1";
    childs = menu.children;
    for (let i = 0; i < childs.length; i++) {
        childs[i].classList.toggle("menu-line" + (i + 1));
    }

    container.classList.toggle("index-container-header-normal");
}
let menu1 = document.querySelector(".menu-new");

// logInShow.onclick = () => {
//     container.style.display = "inherit";
// }



// the login form 
console.log(loginForm.email.value);
console.log(signinForm.submit.value);