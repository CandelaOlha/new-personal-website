const hamburgerMenu = document.querySelector(".hamburger-menu");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const modeSwitcher = document.querySelector(".mode-switcher");
const modeSwitcherText = document.querySelector(".mode-switcher-text");
const body = document.querySelector("body");
const arrows = document.querySelectorAll(".arrow");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");

// Mobile menu

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

// Dark mode

modeSwitcher.onclick = () => {

    if (modeSwitcherText.textContent === "Dark mode") {
        modeSwitcherText.textContent = "Light mode";
      }
      else {
        modeSwitcherText.textContent = "Dark mode";
      }

    moonIcon.classList.toggle("is-hidden");
    sunIcon.classList.toggle("is-hidden");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].src = "icons/arrow-dark-mode.svg";
        }
      }
      else {
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].src = "icons/arrow.svg";
        }
      }

    saveModeInLocalStorage();
}

const saveModeInLocalStorage = () => {
    if (body.classList.contains("dark-mode")) {
      const mode = {
        mode: "dark", 
      }
      const modeIntoAJSON = JSON.stringify(mode);
      localStorage.setItem("mode", modeIntoAJSON);
    }
    else {
        const mode = {
          mode: "light",
        }
        const modeIntoAJSON = JSON.stringify(mode);
        localStorage.setItem("mode", modeIntoAJSON);
    }
  }

  const getModeFromLocalStorage = () => {
    if (localStorage.getItem("mode")) {
      const JSONModePreference = localStorage.getItem("mode");
      const JSModePreference = JSON.parse(JSONModePreference);
    
      if (JSModePreference.mode === "dark") {

          modeSwitcherText.textContent = "Light mode";
          moonIcon.classList.add("is-hidden");
          sunIcon.classList.remove("is-hidden");

          body.classList.add("dark-mode");

          for (let i = 0; i < arrows.length; i++) {
            arrows[i].src = "icons/arrow-dark-mode.svg";
        }
      }
      else {

        body.classList.remove("dark-mode");

        for (let i = 0; i < arrows.length; i++) {
            arrows[i].src = "icons/arrow.svg";
        }
      }
    }
  }
  
  getModeFromLocalStorage();