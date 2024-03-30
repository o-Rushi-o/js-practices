let arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "Rushikesh" });
      if (arr.length > 0) resolve("Data Fetched Successfully");
      else reject("Failed to Fetch Data");
    }, 2000);
  });
};

fetchData(arr)
  .then((msg) => console.log(msg))
  .catch((msg) => console.log(msg))
  .finally(() => console.log(arr));
