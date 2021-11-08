function sigin(e) {
  e.preventDefault();

  let users_email = document.getElementById("user_email");
  let email = users_email.value;
  let users_password = document.getElementById("user_password");
  let password = users_password.value;

  let arr = JSON.parse(localStorage.getItem("users"));

  let found = 1;
  arr.forEach(function (el) {
    if (email === el.email && password === el.password) {
      found = 0;
      console.log("here");
      window.location.href = "home.html";
    }
  });

  if (found) {
    alert("Invalid password");
  }
  users_email.value = "";
  users_password.value = "";
}
