document.addEventListener("DOMContentLoaded", function () {
  const dog = "img/dog.png";
  const cat = "img/cat.jpeg";
  const hamster = "img/hamster.jpeg";
  const fish = "img/fish.jpeg";
  const bird = "img/bird.png";
  const leopard = "img/leopard.jpeg";
  const luna = "theme/3_luna.png";
  const clouds = "theme/4_oblako_pered.png";
  const korova = "img/korova.png"
  const kosmonavt = "img/kosmonavt.png"
  const sun = "img/sun.png"
  const tarelka = "img/tarelka.png"
  const zemlya = "img/zemlya.png"
  const solnce = "theme/solnce.png"

  function Cards() {
    const container = document.getElementById("cards-container");
    // Create and append image elements
    container.appendChild(createImage(dog, "dog"));
    container.appendChild(createImage(cat, "cat"));
    container.appendChild(createImage(hamster, "hamster"));
    container.appendChild(createImage(fish, "fish"));
    container.appendChild(createImage(bird, "bird"));
    container.appendChild(createImage(leopard, "leopard"));
    container.appendChild(createImage(luna, "luna"));
    container.appendChild(createImage(clouds, "clouds"));
    container.appendChild(createImage(kosmonavt, "kosmonavt"));
    container.appendChild(createImage(sun, "sun"));
    container.appendChild(createImage(tarelka, "zemlya"));
    container.appendChild(createImage(zemlya, "zvezdi"));
    container.appendChild(createImage(solnce, "solnce"));
    container.appendChild(createImage(korova, "korova"));
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
