document.getElementById("confirmar").addEventListener("click", async () => {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");

    try {
        const response = await fetch("https://petzcare-api.onrender.com/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome: nome, email: email, telefone: telefone, senha: senha })

        })

        const data = await response.JSON()

        if(response){
            console.log("sucesso", data)
        }
    }
    catch(err){
        console.log(err)
    }
   
})