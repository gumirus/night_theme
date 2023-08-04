class DayTheme {
  applyTheme() {
    document.body.classList.remove("night-theme");
    moonIcon.hide();
    sunIcon.show();
    heading.textContent = "Дневная тема";
    paragraph.textContent = `
      Дневная тема - это прекрасное время солнца и света.
    `;
  }
}

class NightTheme {
  applyTheme() {
    document.body.classList.add("night-theme");
    moonIcon.show();
    sunIcon.hide();
    heading.textContent = "Ночная тема";
    paragraph.textContent = `
      Ночная тема - это особенное явление, когда лунный свет придает ночной теме особый шарм. Полная луна создает романтическую атмосферу и освещает окружающий мир деликатными сияющими
      лучами.
    `;
  }
}

class ElementWithToggle {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}

const dayTheme = new DayTheme();
const nightTheme = new NightTheme();
const moonIcon = new ElementWithToggle(".moon");
const sunIcon = new ElementWithToggle(".sun");
const heading = document.getElementById("theme-heading");
const paragraph = document.getElementById("paragraph");
const theme = localStorage.getItem("theme");

if (theme === "night-theme") {
  nightTheme.applyTheme();
} else {
  dayTheme.applyTheme();
}

const nightThemeBtn = document.getElementById("night-theme-btn");
nightThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("night-theme");

  const theme = document.body.classList.contains("night-theme")
    ? "night-theme"
    : "";
  localStorage.setItem("theme", theme);

  if (theme === "night-theme") {
    nightTheme.applyTheme();
  } else {
    dayTheme.applyTheme();
  }
});
