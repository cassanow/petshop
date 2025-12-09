document.getElementById("confirmar").addEventListener("click", async () => {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;

    try {
        const response = await fetch("https://petzcare-api.onrender.com/api/Auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: nome, email: email, telefone: telefone, password: senha })
        })



        if (!response.ok) {
            const data = await response.json()

            let listaErros = [];


            if (data.errors) {
                for (const campo in data.errors) {
                    data.errors[campo].forEach(msg => {
                        listaErros.push(traduzirErro(msg));
                    });
                }
            }

            if (data.message) {
                listaErros.push(traduzirErro(data.message));
            }


            mostrarErro(listaErros);
            return;
        }

        window.location.href = "/login.html";
    }
    catch (err) {
        console.log(err)
    }

})



function traduzirErro(msg) {
    if (msg.includes("Name") && msg.includes("required")) return "O nome é obrigatório.";
    if (msg.includes("Email") && msg.includes("required")) return "O e-mail é obrigatório.";
    if (msg.includes("Email") && msg.includes("valid")) return "Formato de e-mail inválido.";
    if (msg.includes("Telefone") && msg.includes("required")) return "O telefone é obrigatório.";
    if (msg.includes("Telefone") && msg.includes("minimum length")) return "O telefone deve ter exatamente 11 dígitos.";
    if (msg.includes("Password") && msg.includes("required")) return "A senha é obrigatória.";
    if (msg.includes("Password") && msg.includes("minimum length")) return "A senha deve ter pelo menos 6 caracteres.";
    if (msg.includes("Password") && msg.includes("maximum length")) return "A senha deve ter pelo menos 6 caracteres.";

    return msg; 
}

function mostrarErro(listaErros) {
   const div = document.getElementById("erro");
    div.innerHTML = ""; 


    listaErros.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = "• " + traduzirErro(msg);
        p.style.margin = "4px 0";
        div.appendChild(p);
    });

    div.style.display = "block";
    div.style.opacity = "1";

    setTimeout(() => {
        div.style.opacity = "0";
        setTimeout(() => {
            div.style.display = "none";
        }, 1000);
    }, 10000);
}
