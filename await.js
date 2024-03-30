const url = "https://dog.ceo/api/breeds/image/random";
const div = document.querySelector("div");
const activities = async () => {
  //async function to fetch data from the API and display it on the webpage
  try {
    const response = await fetch(url); //await is used to make sure the promise resolves before moving on with the code. it will freeze the next line of code or that function an till the await statement is executed.
    const data = await response.json();
    div.innerText = data.message;
    throw new Error("An error occurred!"); //throwing an error for demonstration purposes
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    console.log(`Done`);
  }
};
activities();
