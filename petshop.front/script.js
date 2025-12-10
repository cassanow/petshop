
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

// Função principal para verificar o login e atualizar a navegação
    function updateLoginLink() {
        // Tenta buscar o nome do usuário no armazenamento local
        const username = localStorage.getItem('username');
        const loginListItem = document.getElementById('nav-login');
        
        // Se o nome existir E o elemento de login for encontrado
        if (username && loginListItem) {
            // 1. Substitui o link LOGIN pelo nome do usuário
            loginListItem.innerHTML = `<a href="#" id="user-name-link">${username}</a>`;

            // 2. Adiciona um link de LOGOUT ou redirecionamento no clique do nome
            const userlink = document.getElementById('user-name-link');
            userlink.addEventListener('click', function(e) {
                e.preventDefault();
                // Chama a função de deslogar
                logoutUser();
            });
            
            // Opcional: Adicionar um link de "Sair" ao lado do nome, se preferir
            loginListItem.innerHTML += ` / <a href="#" onclick="logoutUser()">Sair</a>`;
        }
    }

    // Chama a função quando a página carregar
    document.addEventListener('DOMContentLoaded', updateLoginLink);
