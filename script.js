// ==========================================
// CONFIGURAÇÕES INICIAIS E SELETORES
// ==========================================

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const inputDescricao = document.getElementById("descricao");
const inputValor = document.getElementById("valor");
const btnAdicionar = document.getElementById("btn-adicionar");
const lista = document.getElementById("lista-transacoes");
const displaySaldo = document.getElementById("texto-saldo");
const radioSaida = document.getElementById("radio-saida");

// ==========================================
// BANCO DE DADOS (LOCALSTORAGE)
// ==========================================

// 1. Tentar buscar dados antigos ao abrir a página
const bancoLocal = localStorage.getItem("financas_app");
let transacoes = [];

if (bancoLocal) {
    transacoes = JSON.parse(bancoLocal);
}

// Função auxiliar para salvar sempre que houver mudança
function salvarNoNavegador() {
    localStorage.setItem("financas_app", JSON.stringify(transacoes));
}

// ==========================================
// FUNÇÃO DE RENDERIZAÇÃO E FILTRO
// ==========================================

function atualizarInterface(filtro = 'todos') {
    // 1. Limpar a lista visual
    lista.innerHTML = "";
    let saldoTotal = 0;

    // 2. Calcular o saldo SEMPRE com a lista original inteira
    transacoes.forEach(t => saldoTotal += t.valor);
    displaySaldo.innerText = formatadorMoeda.format(saldoTotal);

    // 3. Decidir quem vai aparecer na tela (Filtro Visual)
    let listaVisivel = transacoes; 
    
    if (filtro === 'receitas') {
        listaVisivel = transacoes.filter(t => t.valor > 0);
    } 
    if (filtro === 'despesas') {
        listaVisivel = transacoes.filter(t => t.valor < 0);
    }

    // 4. Desenhar os itens filtrados
    listaVisivel.forEach(item => {
        // Define a cor da bordinha
        const classe = item.valor < 0 ? "negativo" : "positivo";
        
        lista.innerHTML += `
            <li class="${classe}">
                <div class="info">
                    <span>${item.descricao}</span>
                </div>
                <div class="valores">
                    <span>${formatadorMoeda.format(Math.abs(item.valor))}</span>
                    <button class="btn-delete" onclick="remover(${item.id})">×</button>
                </div>
            </li>
        `;
    });
}

// ==========================================
// AÇÕES DO USUÁRIO
// ==========================================

// ADICIONAR NOVA TRANSAÇÃO
btnAdicionar.addEventListener("click", () => {
    const desc = inputDescricao.value;
    const valorString = inputValor.value;

    if (desc === "" || valorString === "") {
        return alert("Preencha todos os campos!");
    }

    // Passa no "Lava-Jato" do Math.abs e depois verifica o Radio
    let valorFinal = Math.abs(Number(valorString));
    if (radioSaida.checked) {
        valorFinal = valorFinal * -1;
    }

    const novaTransacao = {
        id: Date.now(), // Gera um ID único baseado no relógio
        descricao: desc,
        valor: valorFinal
    };

    transacoes.push(novaTransacao);
    
    salvarNoNavegador();
    atualizarInterface(); // Redesenha a tela
    
    // Limpa os campos para a próxima
    inputDescricao.value = "";
    inputValor.value = "";
    inputDescricao.focus();
});

// EXCLUIR TRANSAÇÃO
window.remover = function(idParaRemover) {
    const confirmar = confirm("Deseja realmente excluir esta transação?");
    
    if (confirmar) {
        // Filtra a lista original (apaga de verdade)
        transacoes = transacoes.filter(item => item.id !== idParaRemover);
        salvarNoNavegador();
        atualizarInterface();
    }
}

// CLICAR NOS BOTÕES DE FILTRO
window.filtrarApp = function(tipo) {
    // 1. Tira a classe 'ativo' de todo mundo
    document.getElementById("btn-todos").classList.remove("ativo");
    document.getElementById("btn-receitas").classList.remove("ativo");
    document.getElementById("btn-despesas").classList.remove("ativo");

    // 2. Coloca a classe 'ativo' SÓ no botão que o usuário clicou
    // (Usamos crase para juntar 'btn-' com a palavra que veio no tipo)
    document.getElementById(`btn-${tipo}`).classList.add("ativo");

    // 3. Manda atualizar a lista
    atualizarInterface(tipo);
}

/*
opção para encontrar o botão que está com o estilo e remover só dele
window.filtrarApp = function(tipo) {
    // 1. Procura na tela quem é o botão que tem a classe 'ativo'
    const botaoAntigo = document.querySelector(".filtros .ativo");

    // 2. Se ele achou alguém (segurança contra erros), tira a cor dele
    if (botaoAntigo) {
        botaoAntigo.classList.remove("ativo");
    }

    // 3. Coloca a cor no novo botão clicado
    document.getElementById(`btn-${tipo}`).classList.add("ativo");

    atualizarInterface(tipo);
}

*/

// ==========================================
// INICIALIZAÇÃO
// ==========================================
// Desenha a tela a primeira vez que o JS carregar
atualizarInterface();