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
            mostrarErroMensage();
            console.log("deu ruim", data)
            return;
        }

        if (data.token) {
            localStorage.setItem('userToken', data.token);
        }

        window.location.href = "/index.html"
    }

    catch(err){
        console.log(err)
    }
    
})

function mostrarErroMensage() {
    const erro = document.getElementById("erro");

    erro.style.display = "block";     
    erro.style.opacity = "1";         


    setTimeout(() => {
        erro.style.opacity = "0";      
        setTimeout(() => {
            erro.style.display = "none";
        }, 300); 
    }, 3000); 
}
