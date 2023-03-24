document.getElementById("randomjoke").addEventListener("click", getDadJoke);

function getDadJoke(e) {
  console.log("get joke");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://icanhazdadjoke.com/", true);

  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
    let output = "";
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      output = `<h1>${response.joke}</h1>`;
    }
    document.getElementById("display").innerHTML = output;
  };

  xhr.send();

  e.preventDefault();
}
