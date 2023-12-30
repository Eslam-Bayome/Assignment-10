let youIn = document.getElementById("youIn");
let navBar = document.querySelector("nav");
let logOut = document.getElementById("logOut");

logOut.addEventListener("click", function (e) {
  e.preventDefault();
  youIn.innerHTML = "";
  window.location = "./index.html";
});

youIn.innerHTML = `Welcome  ${sessionStorage.getItem("nameLoged")} `;
