import { DayTheme } from "./components/dayTheme.js";
import { NightTheme } from "./components/nightTheme.js";
import { ElementWithToggle } from "./components/elementWithToggle.js";

(function () {
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
