const h1 = document.getElementById("heading");
const box2 = document.getElementById("box1");
const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", () => {
  box2.classList.add("box1");
  //   console.log("Button Clicked!");
});
box2.addEventListener("mouseover", () => {
  box2.style.transform = "scaleY(1.5)";
});
box2.addEventListener("mouseout", () => {
  box2.style.transform = "";
});
