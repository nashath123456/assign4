function validate(event) {
  event.preventDefault();
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  var err1 = document.getElementById("err1");
  var err2 = document.getElementById("err2");
  err1.innerText = "";
  err2.innerText = "";
  if (user.value !== "admin") {
      err1.innerText = "Enter a valid username!";
      return false;
  }
  if (pass.value !== "12345") {
      err2.innerText = "Password is incorrect.";
      return false;
  }
  window.location.href = "home.html";
  return true;
}