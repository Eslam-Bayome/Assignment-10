let inBtn = document.getElementById("inBtn");
let inEmail = document.getElementById("inEmail");
let inPass = document.getElementById("inPass");
let goUp = document.getElementById("goUp");
let signIn = document.getElementById("signin");

let wrongMass2 = document.getElementById("fixWrong2");
wrongMass2.classList.add("text-danger");

inBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let userInfo = {
    pass: inPass.value,
    email: inEmail.value,
  };
  if (
    inPass.value === "" ||
    inEmail.value === "" ||
    !localStorage.getItem("allUsers")
  ) {
    wrongMass2.innerHTML = "All inputs is required";
  } else {
    JSON.parse(localStorage.getItem("allUsers")).forEach((us) => {
      if (us.pass === userInfo.pass && us.email === userInfo.email) {
        wrongMass2.innerHTML = inPass.value = inEmail.value = "";
        sessionStorage.setItem("nameLoged", us.name);
        window.location = "./welcome.html";
      } else {
        wrongMass2.innerHTML = "incorrect email or password";
      }
    });
  }
});
// ======================================================
// ========================================================
