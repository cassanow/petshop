window.addEventListener("DOMContentLoaded", () => {
    const nome = localStorage.getItem("userName");
    const token = localStorage.getItem("userToken");

    if (nome && token) {
        const loginLink = document.getElementById("nav-login");
        loginLink.textContent = nome;
        loginLink.href = "#"; 
    }
});
