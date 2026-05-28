class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  console.log("Objeto de Contato gerado:", data);
}

function Enviar() {
    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
    // if (nome && nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botaoEnviar = document.querySelector("button[type='submit']") || document.querySelector("button");

    if (botaoEnviar) {
        botaoEnviar.style.transition = "all 0.3s ease";

        botaoEnviar.addEventListener("mouseover", () => {
            botaoEnviar.style.transform = "scale(1.1)";
            botaoEnviar.style.backgroundColor = "#0056b3";
            botaoEnviar.style.cursor = "pointer";
        });

        botaoEnviar.addEventListener("mouseout", () => {
            botaoEnviar.style.transform = "scale(1.0)";
            botaoEnviar.style.backgroundColor = "";
        });
    }
});