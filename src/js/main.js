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







// const videos = document.querySelectorAll("video");
// videos.forEach((item) => {
//     item.play();
// });