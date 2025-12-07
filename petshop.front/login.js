    document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login realizado com sucesso!');
        });

        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Login com ' + this.textContent + ' em desenvolvimento');
            });
        });