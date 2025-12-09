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


            if (body.errors) {
                for (const campo in body.errors) {
                    body.errors[campo].forEach(msg => {
                        listaErros.push(traduzirErro(msg));
                    });
                }
            }

            if (body.message) {
                listaErros.push(traduzirErro(body.message));
            }


            mostrarErro(listaErros);
            return;
        }

        window.location.href = "/login";
    }
    catch (err) {
        console.log(err)
    }

})

const traducoes = {
    "The Name field is required.": "O nome é obrigatório.",
    "The Email field is required.": "O e-mail é obrigatório.",
    "The field Email is not a valid e-mail address.": "Formato de e-mail inválido.",
    "The Telefone field is required.": "O telefone é obrigatório.",
    "The field Telefone must be a string with a minimum length of 11 and a maximum length of 11.":
        "O telefone deve ter exatamente 11 dígitos.",
    "The Password field is required.": "A senha é obrigatória.",
    "The field Password must be a string with a minimum length of 6.":
        "A senha deve ter pelo menos 6 caracteres.",
};

function traduzirErro(msg) {
    return traducoes[msg] || msg;
}

function mostrarErro(msg) {
    const e = document.getElementById("erro");

    e.textContent = msg;
    e.style.display = "block";
    e.style.opacity = "1";

    setTimeout(() => {
        e.style.opacity = "0";
        setTimeout(() => {
            e.style.display = "none";
        }, 300);
    }, 3000);
}
