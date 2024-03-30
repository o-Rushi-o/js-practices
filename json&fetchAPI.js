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

/* GET, POST, PUT, DELETE IN FETCH API METHODS
1. GET FOR GET THE DATA
2. POST FOR CREATE  NEW RESOURCES / SEND DATA
3. PUT FOR UPDATE EXISTING RESOURCE
4.  DELETE FOR REMOVE A RESOURCE */
