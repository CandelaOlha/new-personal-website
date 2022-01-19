const hamburgerMenu = document.querySelector(".hamburger-menu");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const modeSwitchers = document.querySelectorAll(".mode-switcher");
const modeSwitcherTexts = document.querySelectorAll(".mode-switcher-text");
const body = document.querySelector("body");
const arrows = document.querySelectorAll(".arrow");
const moonIcons = document.querySelectorAll(".fa-moon");
const sunIcons = document.querySelectorAll(".fa-sun");

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

for (let i = 0; i < modeSwitchers.length; i++) {
    modeSwitchers[i].onclick = () => {
        for (let j = 0; j < modeSwitcherTexts.length; j++) {
            if (modeSwitcherTexts[j].textContent === "Dark mode") {
                modeSwitcherTexts[j].textContent = "Light mode";
              }
              else {
                modeSwitcherTexts[j].textContent = "Dark mode";
              }
        }
    
        for (let j = 0; j < moonIcons.length; j++) {
            moonIcons[j].classList.toggle("is-hidden"); 
        }

        for (let j = 0; j < sunIcons.length; j++) {
            sunIcons[j].classList.toggle("is-hidden"); 
        }
    
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
          for (let i = 0; i < modeSwitcherTexts.length; i++) {
            modeSwitcherTexts[i].textContent = "Light mode";
          }

          for (let i = 0; i < moonIcons.length; i++) {
            moonIcons[i].classList.add("is-hidden");
          }

          for (let i = 0; i < sunIcons.length; i++) {
            sunIcons[i].classList.remove("is-hidden");
          }

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