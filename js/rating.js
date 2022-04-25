let raiting = document.querySelector(".rating");
let starReview = 0;
for (let i = 0; i < raiting.children.length; i++) {

    raiting.children[i].onclick = () => {
        starReview = i;
        for (let i = 0; i < raiting.children.length; i++) {
            raiting.children[i].classList = "fa fa-star";

        }
        for (let j = i; j >= 0; j--) {
            raiting.children[j].classList.toggle("checked");
        }
        console.log(starReview+1);

        // raiting.children[i].classList.toggle("checked");
    }
}