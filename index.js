const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "white",
  "black",
  "yellow",
  "purple",
  "silver",
  "brown",
  "gray",
  "pink",
  "olive",
  "maroon",
  "violet",
  "charcoal",
  "magenta",
  "bronze",
  "cream",
  "gold",
  "tan",
  "teal",
  "mustard",
  "navy blue",
  "coral",
  "burgundy",
  "lavender",
  "mauve",
  "peach",
  "rust",
  "indigo",
  "ruby",
  "clay",
  "cyan",
  "azure",
  "beige",
  "offwhite",
  "turquoise",
  "amber",
  "mint",
];

let btn = document.querySelector(".btn");
let color = document.querySelector(".color");
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
