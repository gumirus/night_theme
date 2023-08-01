const nightThemeBtn = document.getElementById("night-theme-btn");
const moon = document.querySelector(".moon");
const heading = document.getElementById("theme-heading");
const paragraph = document.getElementById("theme-paragraph");

nightThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("night-theme");

  const theme = localStorage.getItem("theme");

  if (theme === "night-theme") {
    localStorage.setItem("theme", "");
    moon.style.opacity = "0"; // Скрываем луну при переключении на светлую тему
    heading.textContent = "Дневная тема"; // Обновляем текст и заголовок для дневной темы
    paragraph.textContent = `Дневная тема - это прекрасное время солнца и света.`;
  } else {
    localStorage.setItem("theme", "night-theme");
    moon.style.opacity = "1"; // Показываем луну при переключении на темную тему
    heading.textContent = "Ночная тема"; // Обновляем текст и заголовок для ночной темы
    paragraph.textContent = `
        Ночная тема - это особенное явление, когда природа облачается в мягкие
        темные тона, а небо становится полотном, украшенным тысячами мерцающих
        звезд. Она обладает своей уникальной прелестью и неповторимой
        атмосферой, которые привлекают людей со всего мира. Вот некоторые из
        аспектов, которые делают ночную тему прекрасной:
        Звездное небо: Когда солнце заходит за горизонт, наступает время
        звездного неба. Вдали от светового загрязнения городов, звезды
        становятся особенно яркими и четко видны на темном небе. Природа
        удивляет нас своей бесконечной красотой и загадочностью.
        Луна: Лунный свет придает ночной теме особый шарм. Полная луна создает
        романтическую атмосферу и освещает окружающий мир деликатными сияющими
        лучами.
    `;
  }
});
