// import { DayTheme } from "./dayTheme.js";
// import { NightTheme } from "./nightTheme.js";
// import { ElementWithToggle } from "./elementWithToggle.js";

// const moonIcon = new ElementWithToggle(".moon");
// const sunIcon = new ElementWithToggle(".sun");
// const heading = document.getElementById("theme-heading");
// const paragraph = document.getElementById("paragraph");
// const theme = localStorage.getItem("theme");

// const dayTheme = new DayTheme();
// const nightTheme = new NightTheme();

// if (theme === "night-theme") {
//   nightTheme.applyTheme();
// } else {
//   dayTheme.applyTheme();
// }

// const nightThemeBtn = document.getElementById("night-theme-btn");
// nightThemeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("night-theme");

//   const theme = document.body.classList.contains("night-theme")
//     ? "night-theme"
//     : "";
//   localStorage.setItem("theme", theme);

//   if (theme === "night-theme") {
//     nightTheme.applyTheme();
//   } else {
//     dayTheme.applyTheme();
//   }
// });
