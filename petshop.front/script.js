
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


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("modalMessage").textContent = "Mensagem enviada";
  document.getElementById("modal").style.display = "flex";
  this.reset();
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

