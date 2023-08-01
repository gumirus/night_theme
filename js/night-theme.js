// const nightThemeBtn = document.getElementById("night-theme-btn");
// const moon = document.querySelector(".moon");

// nightThemeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("night-theme");

//   const theme = localStorage.getItem("theme");

//   if (theme === "night-theme") {
//     localStorage.setItem("theme", "");
//     moon.style.opacity = "0"; // Скрываем луну при переключении на светлую тему
//   } else {
//     localStorage.setItem("theme", "night-theme");
//     moon.style.opacity = "1"; // Показываем луну при переключении на темную тему
//   }
// });

// const theme = localStorage.getItem("theme");
// if (theme) {
//   document.body.classList.add(theme);
// }

const nightThemeBtn = document.getElementById("night-theme-btn");
const moon = document.querySelector(".moon");

nightThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("night-theme");
  document.body.classList.remove("light-theme"); // Удаляем класс светлой темы при переключении на темную

  const theme = localStorage.getItem("theme");

  if (theme === "night-theme") {
    localStorage.setItem("theme", "");
    moon.style.opacity = "0"; // Скрываем луну при переключении на светлую тему
  } else {
    localStorage.setItem("theme", "night-theme");
    moon.style.opacity = "1"; // Показываем луну при переключении на темную тему
  }
});
