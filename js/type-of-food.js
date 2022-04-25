let typeOfFood=document.querySelector(".type-of-food");
for (let i = 0; i < typeOfFood.children.length; i++) {

    typeOfFood.children[i].onclick = () => {
        let store=i;
        starReview = i;
        for (let i = 0; i < typeOfFood.children.length; i++) {
            typeOfFood.children[i].classList = "";
        }
            typeOfFood.children[i].classList.toggle("type-of-food-clicked");
        console.log( typeOfFood.children[i].innerHTML);

        // raiting.children[i].classList.toggle("checked");
    }
}