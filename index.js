const hamburgerMenu = document.querySelector(".hamburger-menu");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

hamburgerMenu.onclick = () => {
    mobileMenuContainer.classList.toggle("show-mobile-menu");
    if (mobileMenuContainer.classList.contains("show-mobile-menu")) {
        hamburgerMenu.classList.add("hamburger-menu-closed");
        lineOne.classList.add("line-one-closed");
        lineTwo.classList.add("line-two-closed");
    }
    else {
        hamburgerMenu.classList.remove("hamburger-menu-closed");
        lineOne.classList.remove("line-one-closed");
        lineTwo.classList.remove("line-two-closed");
    }
}

for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].onclick = () => {
        mobileMenuContainer.classList.remove("show-mobile-menu");
        hamburgerMenu.classList.remove("hamburger-menu-closed");
        lineOne.classList.remove("line-one-closed");
        lineTwo.classList.remove("line-two-closed");
    }
}