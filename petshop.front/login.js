document.getElementById("confirmar").addEventListener("click", async () => {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    try {
        const response = await fetch("https://petzcare-api.onrender.com/api/Auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: senha })
        })

        const data = await response.json()

        if(response.status == 401){
            document.getElementById("erro").style.display = "block";
            console.log("deu ruim", data)
            return;
        }
        
        window.location.href = "/index.html"
    }

    catch(err){
        console.log(err)
    }
    
})
