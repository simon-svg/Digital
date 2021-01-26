const itemLinks = document.querySelectorAll(".header__item_link");

itemLinks.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.classList.remove("header__item_link-trans");
        item.classList.remove("header__item_link-dis");
        item.classList.add("header__item_link-active");
    })
    item.addEventListener("mouseleave", () => {
        item.classList.remove("header__item_link-trans");
        item.classList.remove("header__item_link-active");
        item.classList.add("header__item_link-dis");
        setTimeout(() => {
            item.classList.remove("header__item_link-dis");
            item.classList.add("header__item_link-trans");
        }, 500)
    })
})





const burgerMenu = document.querySelector(".header__burger-menu");
const navBurgerMenu = document.querySelector(".nav__burger-menu");
const navigation = document.querySelector(".navigation");
const navBurgerMenuItems = document.querySelectorAll(".nav__burger-menu__item");

navBurgerMenu.addEventListener("click", () => {
    navigation.style.transform = "translateX(-100%)"
})
burgerMenu.addEventListener("click", () => {
    navigation.style.transform = "translateX(0)";
    setTimeout(() => {
        navBurgerMenuItems[0].style.width = "100%";
        setTimeout(() => {
            navBurgerMenuItems[1].style.width = "100%";
        }, 500)
    }, 1000)
});
navBurgerMenu.addEventListener("mouseenter", () => {
    navBurgerMenuItems[0].style.width = "50%";
    navBurgerMenuItems[1].style.width = "50%";
})
navBurgerMenu.addEventListener("mouseleave", () => {
    navBurgerMenuItems[0].style.width = "100%";
    navBurgerMenuItems[1].style.width = "100%";
})








const detailsItems = document.querySelectorAll(".details__item");
let yellowBool = true;
let blueBool = true;
let greenBool = true;

detailsItems[0].addEventListener("click", () => {
    if (yellowBool) {
        detailsItems[0].style.transform = "translateX(0)";
    }
    else {
        detailsItems[0].style.transform = "translateX(calc(100% - 300px))";
    }
    yellowBool = !yellowBool;
})
detailsItems[0].addEventListener("mouseenter", () => {
    if (yellowBool) {
        detailsItems[0].style.transform = "translateX(calc(100% - 330px))";
    }
})
detailsItems[0].addEventListener("mouseleave", () => {
    if (yellowBool) {
        detailsItems[0].style.transform = "translateX(calc(100% - 300px))";
    }
})


detailsItems[1].addEventListener("click", () => {
    if (blueBool) {
        detailsItems[1].style.transform = "translateX(100px)";
    }
    else {
        detailsItems[1].style.transform = "translateX(calc(100% - 200px))";
    }
    blueBool = !blueBool;
})
detailsItems[1].addEventListener("mouseenter", () => {
    if (blueBool) {
        detailsItems[1].style.transform = "translateX(calc(100% - 230px))";
    }
})
detailsItems[1].addEventListener("mouseleave", () => {
    if (blueBool) {
        detailsItems[1].style.transform = "translateX(calc(100% - 200px))";
    }
})


detailsItems[2].addEventListener("click", () => {
    if (greenBool) {
        detailsItems[2].style.transform = "translateX(200px)";
    }
    else {
        detailsItems[2].style.transform = "translateX(calc(100% - 100px))";
    }
    greenBool = !greenBool;
})
detailsItems[2].addEventListener("mouseenter", () => {
    if (greenBool) {
        detailsItems[2].style.transform = "translateX(calc(100% - 130px))";
    }
})
detailsItems[2].addEventListener("mouseleave", () => {
    if (greenBool) {
        detailsItems[2].style.transform = "translateX(calc(100% - 100px))";
    }
})








const appTransform = document.querySelector(".app__transform");
let translateZ = 0;

appTransform.onwheel = (e) => {
    translateZ -= event.deltaY * 0.025;

    if(translateZ < -40){
        translateZ = -40;
    }
    else if(translateZ > 0){
        translateZ = 0;
    }
    appTransform.style.transform = `perspective(400px) translateZ(${translateZ}px)`
}