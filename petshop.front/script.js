
document.querySelectorAll(".btn-add").forEach((btn) => {
  btn.addEventListener("click", function () {
    const produto = this.getAttribute("data-produto");
    document.getElementById("modalMessage").textContent =
      produto + " adicionado";
    document.getElementById("modal").style.display = "flex";
  });
});

document.querySelector(".btn-close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


window.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("DOMContentLoaded", () => {
    const nome = localStorage.getItem("userName");
    const token = localStorage.getItem("userToken");

    if (nome && token) {
        const loginLink = document.getElementById("nav-login");

        loginLink.innerHTML = `${nome} <span id="logout" style="margin-left: 10px; cursor: pointer; font-weight: bold;">(sair)</span>`;
        loginLink.href = "#";

        document.getElementById("logout").addEventListener("click", () => {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userName");
            window.location.href = "login.html";
        });
    }
});


