document.addEventListener("DOMContentLoaded", function () {
  const moon = document.querySelector(".moon");
  const heading = document.getElementById("theme-heading");
  const paragraph = document.getElementById("paragraph");
  const theme = localStorage.getItem("theme");

  if (theme === "night-theme") {
    document.body.classList.add("night-theme");
    moon.style.opacity = "1"; // Показываем луну при загрузке страницы с темной темой
    heading.textContent = "Ночная тема";
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
  } else {
    document.body.classList.remove("night-theme");
    moon.style.opacity = "0"; // Скрываем луну при загрузке страницы со светлой темой
    heading.textContent = "Дневная тема";
    paragraph.textContent = `
      Дневная тема - это прекрасное время солнца и света.
    `;
  }

  const nightThemeBtn = document.getElementById("night-theme-btn");
  nightThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("night-theme");

    const theme = document.body.classList.contains("night-theme")
      ? "night-theme"
      : "";

    localStorage.setItem("theme", theme);

    if (theme === "night-theme") {
      moon.style.opacity = "1"; // Показываем луну при переключении на темную тему
      heading.textContent = "Ночная тема";
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
    } else {
      moon.style.opacity = "0"; // Скрываем луну при переключении на светлую тему
      heading.textContent = "Дневная тема";
      paragraph.textContent = `
        Дневная тема - это прекрасное время солнца и света.
      `;
    }
  });
});
