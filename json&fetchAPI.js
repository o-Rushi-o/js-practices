const url = "https://dog.ceo/api/breeds/image/random";
const div = document.querySelector("div");

const activities = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (div.innerText = data.message))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finished"));
};

activities();
