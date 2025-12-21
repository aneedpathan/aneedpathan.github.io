let users = JSON.parse(localStorage.getItem("users")) || {};

function signup() {
  let uid = document.getElementById("uid").value;
  let phone = document.getElementById("phone").value;
  let pass = document.getElementById("pass").value;

  if (!uid || !phone || !pass) {
    alert("All fields required");
    return;
  }

  users[uid] = {
    phone: phone,
    pass: pass,
    coins: 0
  };

  localStorage.setItem("users", JSON.stringify(users));
  alert("Account Created ✅");
  location.href = "login.html";
}

function login() {
  let id = document.getElementById("loginId").value;
  let pass = document.getElementById("loginPass").value;

  for (let u in users) {
    if ((u === id || users[u].phone === id) && users[u].pass === pass) {
      localStorage.setItem("currentUser", u);
      location.href = "earn.html";
      return;
    }
  }
  alert("Invalid login ❌");
}

function addCoin() {
  let u = localStorage.getItem("currentUser");
  users[u].coins++;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("coins").innerText = users[u].coins;
}

if (document.getElementById("user")) {
  let u = localStorage.getItem("currentUser");
  document.getElementById("user").innerText = u;
  document.getElementById("coins").innerText = users[u].coins;
}
