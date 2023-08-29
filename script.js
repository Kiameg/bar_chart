const list = document.querySelector("ul");

let arr = [];
let interval = 0;

function displayNumbers() {
  list.innerHTML = "";
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const li = document.createElement("li");
    li.style.setProperty("--height", element);
    list.appendChild(li);
  }
}

setInterval(() => {
  if (interval < 20) {
    randomNumber();
    interval++;
    displayNumbers();
  } else {
    interval = 0;
    arr = [];
    displayNumbers();
  }
}, 500);

function randomNumber() {
  let randnum = Math.floor(Math.random() * 100);
  arr.push(randnum);
}
