const btn = document.getElementById("myButton");

btn.style.backgroundColor = "blue";
btn.style.color = "#fff";
btn.style.padding = "1vmax 2vmax";
btn.style.cursor = "pointer";
btn.style.border = "none";

const btns = document.getElementById("btn2");
btns.style.display = "flex";
btns.style.backgroundColor = "blue";
btns.style.color = "#fff";
btns.style.padding = "1vmax 2vmax";
btns.style.cursor = "pointer";
btns.style.border = "none";

const bt = document.querySelectorAll("button");

bt[1].style.display = "flex";
bt[1].style.backgroundColor = "blue";
bt[1].style.color = "#fff";
bt[1].style.padding = "1vmax 2vmax";
bt[1].style.cursor = "pointer";
bt[1].style.border = "none";

bt[1].onclick = bringHeading;

btn.onclick = bringHeading;
btns.onclick = deleteHeading;

function bringHeading() {
  const h2 = document.createElement("h2");
  h2.innerText = "Welcome boss";
  document.body.prepend(h2);
}

function deleteHeading() {
  const h2 = document.querySelector("h2");
  h2.remove();
}
