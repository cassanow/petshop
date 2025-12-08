document.getElementById("confirmar").addEventListener("click", async () => {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    try {
        const response = await fetch("https://petzcare-api.onrender.com/api/Auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: senha })
        })

        const data = await response.json

        if(response.ok){
            console.log("deu bom", data)
        }
        else{
            console.log("deu ruim", data)
        }
    }

    catch(err){
        console.log(err)
    }
    
})
