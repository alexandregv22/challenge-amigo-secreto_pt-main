let amigos = [];

function adicionarAmigo() {
    const nomeAmigoInput = document.getElementById("amigo");
    const nome = nomeAmigoInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    nomeAmigoInput.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>Amigo Sorteado: ${amigoSorteado}</li>`;
}
