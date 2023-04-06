document.getElementById("randomjoke").addEventListener("click", getDadJoke);
document.addEventListener("DOMContentLoaded", getDadJoke);
const display = document.getElementById("display");

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
