let typeOfFood = document.querySelector(".type-of-food");
for (let i = 0; i < typeOfFood.children.length; i++) {

    typeOfFood.children[i].onclick = () => {
        let store = i;
        starReview = i;
        for (let i = 0; i < typeOfFood.children.length; i++) {
            typeOfFood.children[i].classList = "";
        }
        typeOfFood.children[i].classList.toggle("type-of-food-clicked");
        console.log(typeOfFood.children[i].innerHTML);

        // raiting.children[i].classList.toggle("checked");
    }
}


//what happends if you click on a restaurant listed on the page
// let rest = document.querySelectorAll(".restaurant-result");
// for (let i = 0; i < rest.length; i++)
//     rest[i].onclick = () => {
//         let restaurantName = rest[i].querySelector(".actual-restaurant").children[0].innerHTML;//get the innerHTML text from the element from restaurants.html
//         localStorage.setItem("restaurantName", restaurantName);
//         window.location.href = "detalied-info-restaurant.html";
//         console.log(restaurantName);
//     }

