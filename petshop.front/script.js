
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

// ------------------------------------------------------------------
// 1. FUNÇÃO DE LOGOUT (Necessária para a função updateLoginLink)
// ------------------------------------------------------------------
function logoutUser() {
    // Remove as chaves de autenticação
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName'); 
    // Recarrega a página
    window.location.reload(); 
}

// ------------------------------------------------------------------
// 2. NAVEGAÇÃO / LOGIN
// ------------------------------------------------------------------
function updateLoginLink() {
    // A chave usada para buscar o nome deve ser 'userName'
    const userName = localStorage.getItem('userName');
    const loginListItem = document.getElementById('nav-login');
    
    if (userName && loginListItem) {
        // Substitui o link LOGIN pelo nome do usuário
        loginListItem.innerHTML = `<a href="#" id="user-name-link">${userName}</a>`;

        // Adiciona um listener para o logout
        const userLink = document.getElementById('user-name-link');
        userLink.addEventListener('click', function(e) {
            e.preventDefault();
            logoutUser();
        });
        
        // Se quiser a opção "Sair" ao lado, descomente a linha abaixo:
        loginListItem.innerHTML += ` / <a href="#" onclick="logoutUser()">Sair</a>`; 
    }
}

// Garante que a função é chamada assim que o HTML carregar
document.addEventListener('DOMContentLoaded', updateLoginLink);