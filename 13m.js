const input = document.getElementById("myInput");
const btn = document.getElementById("Btn1");

const BtnClick = () => {
  alert(input.value);
};

btn.addEventListener("click", BtnClick);
