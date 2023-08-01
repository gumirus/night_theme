document.addEventListener("DOMContentLoaded", function () {
  const dog = "img/dog.png";
  const cat = "img/cat.jpeg";
  const hamster = "img/hamster.jpeg";
  const fish = "img/fish.jpeg";
  const bird = "img/bird.png";
  const leopard = "img/leopard.jpeg";
  // const luna = "theme/3_luna.png";
  // const clouds = "theme/4_oblako_pered.png";
  // const clouds2 = "theme/2_oblako_zad.png";

  function Cards() {
    const container = document.getElementById("cards-container");
    // Create and append image elements
    container.appendChild(createImage(dog, "dog"));
    container.appendChild(createImage(cat, "cat"));
    container.appendChild(createImage(hamster, "hamster"));
    container.appendChild(createImage(fish, "fish"));
    container.appendChild(createImage(bird, "bird"));
    container.appendChild(createImage(leopard, "leopard"));
    // container.appendChild(createImage(luna, "luna"));
    // container.appendChild(createImage(clouds, "clouds"));
    // container.appendChild(createImage(clouds2, "clouds2"));
  }

  // Call the function to create the cards
  Cards();
  function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
  }
});
