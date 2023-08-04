export class DayTheme {
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
