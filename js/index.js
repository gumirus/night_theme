(function () {
  // Classes
  class DayTheme {
    applyTheme(heading, paragraph, moonIcon, sunIcon) {
      const navbar = document.querySelector(".navbar");
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

  class NightTheme {
    applyTheme(heading, paragraph, moonIcon, sunIcon) {
      const navbar = document.querySelector(".navbar");
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

  // Element toggle class
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

  // Theme text contents
  const nightThemeText = `
    Ночная тема - это особенное явление, когда лунный свет придает ночной теме особый шарм. Полная луна создает романтическую атмосферу и освещает окружающий мир деликатными сияющими
    лучами.
  `;

  const dayThemeText = `
    Дневная тема - это прекрасное время солнца и света.
  `;

  // Initialize theme classes and elements
  const dayTheme = new DayTheme();
  const nightTheme = new NightTheme();
  const moonIcon = new ElementWithToggle(".moon");
  const sunIcon = new ElementWithToggle(".sun");
  const heading = document.getElementById("theme-heading");
  const paragraph = document.getElementById("paragraph");
  const nightThemeBtn = document.getElementById("night-theme-btn");

  // Apply theme based on user preference or default day theme
  const theme = localStorage.getItem("theme");
  if (theme === "night-theme") {
    nightTheme.applyTheme(heading, paragraph, moonIcon, sunIcon);
  } else {
    dayTheme.applyTheme(heading, paragraph, moonIcon, sunIcon);
  }

  // Event listener for theme toggle button
  nightThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("night-theme");
    const currentTheme = document.body.classList.contains("night-theme")
      ? "night-theme"
      : "";

    localStorage.setItem("theme", currentTheme);

    if (currentTheme === "night-theme") {
      nightTheme.applyTheme(heading, paragraph, moonIcon, sunIcon);
    } else {
      dayTheme.applyTheme(heading, paragraph, moonIcon, sunIcon);
    }
  });
})();
