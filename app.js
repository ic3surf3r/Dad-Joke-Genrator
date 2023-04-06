document.getElementById("randomjoke").addEventListener("click", getDadJoke);
document.addEventListener("DOMContentLoaded", getDadJoke);
const display = document.getElementById("display");

// function getDadJoke(e) {
//   console.log("get joke");

//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://icanhazdadjoke.com/", true);

//   xhr.setRequestHeader("Accept", "application/json");

//   xhr.onload = function () {
//     let output = "";
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       output = `<h1>${response.joke}</h1>`;
//     }
//     document.getElementById("display").innerHTML = output;
//   };

//   xhr.send();

//   e.preventDefault();
// }

async function getDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  const joke = await data.joke;

  display.innerHTML = `<h1>${joke}</h1>`;
}
