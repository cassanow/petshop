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



        if(!response.ok){
        const data = await response.json()

        let erro = "Erro ao registrar.";


        if (data.errors) {
            erro = Object.values(data.errors)[0][0]; 
        }

        if (data.message) {
            erro = data.message;
        }

        mostrarErro(erro);
        return;
        }
        
        window.location.href = "/login";
    }
    catch(err){
        console.log(err)
    }
   
})

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
