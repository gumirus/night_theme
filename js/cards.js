document.addEventListener("DOMContentLoaded", function () {
  const dog = "/img/1.jpeg";
  const cat = "/img/2.jpeg";
  const hamster = "/img/3.jpeg";
  const fish = "/img/4.jpeg";
  const bird = "/img/5.jpeg";
  const leopard = "/img/6.jpeg";

  function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
  }

  function Cards() {
    const container = document.getElementById("cards-container");
    // Create and append image elements
    container.appendChild(createImage(dog, "dog"));
    container.appendChild(createImage(cat, "cat"));
    container.appendChild(createImage(hamster, "hamster"));
    container.appendChild(createImage(fish, "fish"));
    container.appendChild(createImage(bird, "bird"));
    container.appendChild(createImage(leopard, "leopard"));
  }

  // Call the function to create the cards
  Cards();
});
