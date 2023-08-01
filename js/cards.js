document.addEventListener("DOMContentLoaded", function () {
  const dog = "../img/dog.jpeg";
  const cat = "../img/cat.jpeg";
  const hamster = "../img/hamster.jpeg.jpeg";
  const fish = "../img/fish.jpeg";
  const bird = "../img/bird.jpeg.jpeg";
  const leopard = "../img/leopard.jpeg.jpeg";

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
