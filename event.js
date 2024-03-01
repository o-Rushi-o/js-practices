const h1 = document.getElementById("heading");
const box2 = document.getElementById("box1");
const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", () => {
  box2.classList.add("box1");
  //   console.log("Button Clicked!");
});
box2.addEventListener("mouseover", () => {
  alert("Red Zone");
});
box2.addEventListener("mouseout", () => {});
