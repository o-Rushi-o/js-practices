//promise is use  to handle asynchronous operation in javascript.
//It allows you to write asynchronous code that behaves

//---------------------
/*
What Is a Promise?
A promise acts as a placeholder or proxy for the value of an ongoing operation.
You typically use promises when you need to wait for the outcome of an operation. 

//------
For example:
Uploading files to a server and awaiting the response.
Making an API call and waiting for the result.
Asking the user to choose a file from their computer.
//---------
Promise Basics:
A promise represents a value that will be available sometime in the future.
If the promise is successful, it produces a resolved value.
If something goes wrong, it produces a reason for failure.
//-----
Creating a Promise:
You can create a promise using the Promise constructor.
It takes a function with two parameters: myResolve (for success) and myReject (for error).
Inside this function, you write the producing code (which may take some time). 


*/

let arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "Rushikesh" });
      if (arr.length > 0) resolve("Data Fetched Successfully");
      //resolve is use  to end the promise and send data to then block
      else reject("Failed to Fetch Data"); // reject is  used when we want to stop the execution and send back an error message
    }, 2000);
  });
};

fetchData(arr)
  .then((msg) => console.log(msg))
  .catch((msg) => console.log(msg))
  .finally(() => console.log(arr));
