export class NightTheme {
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
