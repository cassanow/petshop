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

        const data = await response.json()

        if(response.ok){
            console.log("sucesso", data)
        }
        else{
            console.log("deu ruim", data)
        }
    }
    catch(err){
        console.log(err)
    }
   
})