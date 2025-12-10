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
