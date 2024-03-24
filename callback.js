/* 

// ------  raf work ------- //

let sum = (a, b) => (a + b) * 10; //arrow function in one line.
const p = (document.querySelector("p").innerText = sum(15, 15));

*/

const arr = [1, 2, 3, 4, 5];

setTimeout(() => {
  function cal(arr = [], callback) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
      const element = callback(arr[i]);
      ans.push(element);
    }
    return ans;
  }

  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p.innerText = cal(arr, (a) => a * 10);
  p2.innerText = cal(arr, (a) => a / 10);
  p3.innerText = cal(arr, (a) => a + 100);
  document.body.append(p, p2, p3);

  console.log("after callback");
}, 5000);
setTimeout(() => {
  console.log("Before callback", arr);
}, 3000);
