let upBtn = document.getElementById("upBtn");
let upEmail = document.getElementById("upEmail");
let upPass = document.getElementById("upPass");
let upName = document.getElementById("upName");
let goIn = document.getElementById("goIn");
let signup = document.getElementById("signup");

let wrongMass = document.getElementById("fixWrong");

let usersAcc = [];
if (localStorage.getItem("allUsers")) {
  usersAcc = JSON.parse(localStorage.getItem("allUsers"));
}

//!============================================================
function regexUp(inp, reg) {
  let theVal = inp.value;
  return reg.test(theVal);
}
//!============================================================

upBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    regexUp(upName, /^[\w]{3,20}$/) &&
    regexUp(upEmail, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
    regexUp(upPass, /^[\w]{3,20}$/)
  ) {
    if (
      localStorage.getItem("allUsers") &&
      JSON.parse(localStorage.getItem("allUsers")).some(
        (v) => v.email === upEmail.value
      )
    ) {
      wrongMass.classList.remove("text-success");
      wrongMass.classList.add("text-danger");
      wrongMass.innerHTML = "Email Already Exist";
    } else {
      let user = {
        name: upName.value,
        pass: upPass.value,
        email: upEmail.value,
      };
      usersAcc.push(user);
      localStorage.setItem("allUsers", JSON.stringify(usersAcc));
      wrongMass.innerHTML = "Success";
      wrongMass.classList.add("text-success");
      wrongMass.classList.remove("text-danger");
    }
  } else {
    wrongMass.classList.remove("text-success");
    wrongMass.classList.add("text-danger");
    wrongMass.innerHTML = "All inputs is required";
  }
});
//!============================================================

goIn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location = "./index.html";
});
