class DayTheme {
  applyTheme() {
    const navbar = document.querySelector(".navbar"); // Get the "navbar" div
    navbar.classList.remove("night-theme");
    navbar.classList.add("day-theme");
    document.body.classList.remove("night-theme");
    if (moonIcon && sunIcon) {
      moonIcon.hide();
      sunIcon.show();
    }
    heading.textContent = "Дневная тема";
    if (paragraph) {
      paragraph.textContent = `
        Дневная тема - это прекрасное время солнца и света.
      `;
    }
  }
}

const dayTheme = new DayTheme();

class NightTheme {
  applyTheme() {
    const navbar = document.querySelector(".navbar"); // Get the "navbar" div
    navbar.classList.remove("day-theme");
    navbar.classList.add("night-theme");
    document.body.classList.add("night-theme");
    if (moonIcon && sunIcon) {
      moonIcon.show();
      sunIcon.hide();
    }
    heading.textContent = "Ночная тема";
    if (paragraph) {
      paragraph.textContent = `
        Ночная тема - это особенное явление, когда лунный свет придает ночной теме особый шарм. Полная луна создает
        романтическую атмосферу и освещает окружающий мир деликатными сияющими
        лучами.
      `;
    }
  }
}

const nightTheme = new NightTheme();

class ElementWithToggle {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  show() {
    if (this.element) {
      this.element.style.display = "block";
    }
  }

  hide() {
    if (this.element) {
      this.element.style.display = "none";
    }
  }
}

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

// Check if the paragraph element exists before manipulating its content
if (paragraph) {
  const nightThemeText = `
    Ночная тема - это особенное явление, когда лунный свет придает ночной теме особый шарм. Полная луна создает романтическую атмосферу и освещает окружающий мир деликатными сияющими
    лучами.
  `;

  const dayThemeText = `
    Дневная тема - это прекрасное время солнца и света.
  `;

  // Apply the appropriate text based on the current theme
  paragraph.textContent =
    theme === "night-theme" ? nightThemeText : dayThemeText;
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
    // Update the paragraph text if it exists
    if (paragraph) {
      paragraph.textContent = nightThemeText;
    }
  } else {
    dayTheme.applyTheme();
    // Update the paragraph text if it exists
    if (paragraph) {
      paragraph.textContent = dayThemeText;
    }
  }
});
