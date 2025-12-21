// LOGIN
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user && pass) {
    localStorage.setItem("loggedIn", "yes");
    localStorage.setItem("userID", user);
    localStorage.setItem("coins", 0);
    window.location.href = "earn.html";
  } else {
    alert("User ID aur Password required");
  }
}

// EARN COIN
function earnCoin() {
  let coins = parseInt(localStorage.getItem("coins") || "0");
  coins++;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerText = coins;
}

// AUTO LOGOUT (safety)
window.addEventListener("beforeunload", function () {
  localStorage.removeItem("loggedIn");
});
