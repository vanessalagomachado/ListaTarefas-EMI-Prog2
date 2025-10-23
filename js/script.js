// Array global para armazenar os objetos de tarefa
let listaTarefas = [];

let listaDisciplinas = [];
let d1 = new Disciplina("Programação 2", "Prog2");
let d2 = new Disciplina("Banco de Dados", "BD");
let d3 = new Disciplina("Sistemas Operacionais", "SO");
listaDisciplinas.push(d1);
listaDisciplinas.push(d2);
listaDisciplinas.push(d3);

window.onload = function() {
    carregarDisciplinas();
};






function carregarDisciplinas() {
    const select = document.getElementById("txtDisciplina");
    select.innerHTML = ""; // limpa opções antigas

    for(let i = 0; i<listaDisciplinas.length; i++){
        let disc = listaDisciplinas[i];
        let opt = document.createElement("option");
        opt.value = i;   // Prog2, BD, SO
        opt.innerHTML = disc.toString();      // Programação 2, Banco de Dados, ...
        select.appendChild(opt);
    }
}

// --- Event Listeners ---
// Adiciona um listener para a ação do botão de id btnAddTarefa. 
// A função 'cadastrarTarefa' será chamada.
document.getElementById("btnAddTarefa").addEventListener("click", cadastrarTarefa);

// --- Funções ---

function cadastrarTarefa(evento) {
    // #TODO: 4. Implemente a lógica para cadastrar uma tarefa.
    // método 'preventDefault()' do evento, usado form no HTML evitar que a página recarregue.
    evento.preventDefault();

    // a. Pegue os valores dos campos do formulário (nome, descricao, data).
    let nome = document.getElementById("txtNome").value;
    let desc = document.getElementById("txtDescricao").value;
    let dtTarefa = document.getElementById("txtDataPrevista").value;

    let tipoTarefa = document.getElementById("txtTipoTarefa").value;
    let obj_tarefa;

    if(tipoTarefa == "itemGenerica"){
       obj_tarefa = new Tarefa(nome, desc, dtTarefa);
    } else{
        // 1. pegar todos os valores dos campos escolares
        let disciplina_index = parseInt(document.getElementById("txtDisciplina").value);
        let disciplina = listaDisciplinas[disciplina_index];


        let data_entrega = document.getElementById("txtDtPrazoEntrega").value;
        let sistema = document.getElementById("selSistemaEntrega").value;
        let peso_atividade = parseFloat(document.getElementById("numPesoAtividade").value);
        // 2 . criar objeto do tipo TarefaEscolar
         obj_tarefa = new TarefaEscolar(nome, desc, dtTarefa, disciplina, data_entrega, sistema, peso_atividade);

    }

    // b. Adicione o objeto criado ao array 'listaTarefas'.
    listaTarefas.push(obj_tarefa);

    // c. Chame a função 'carregarTarefas()' para atualizar a lista na tela.
    carregarTarefas();
    // Limpando o formulário usando 'reset()'.
    document.getElementById("formTarefa").reset();
}

function carregarTarefas() {
    // #TODO: 5. Implemente a lógica para mostrar as tarefas na tela.
    // a. Pegue o elemento 'ulTarefas' do HTML.
    const ulTarefasGenericas = document.getElementById("ulTarefasGenericas");
    const ulTarefasEscolares = document.getElementById("ulTarefasEscolares");
    
    
    // b. Limpe o conteúdo atual da lista (innerHTML = "").
    ulTarefasGenericas.innerHTML = "";
    ulTarefasEscolares.innerHTML = "";
    
    // c. Faça um laço (for) para percorrer o array 'listaTarefas'.
    for (let i = 0; i < listaTarefas.length; i++) {
        // d. Para cada objeto 'tarefa' no array:
        //    i. Crie um elemento 'li' (document.createElement).
        let liTarefa = document.createElement("li");
        
        //    ii. Defina o innerHTML do 'li' com o resultado do método 'toString()' da tarefa.
        liTarefa.innerHTML = listaTarefas[i];

        //    iii. Crie um botão de remover.
        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        
        //    iv. Adicione um atributo 'onclick' ao botão que chame a função 'removerTarefa(i)'.
        btnRemover.setAttribute("onclick", `removerTarefa(${i})`);

        //    v. Adicione o botão ao 'li' e o 'li' à lista 'ul'.
        liTarefa.appendChild(btnRemover); 


        //    iii. Crie um botão de Concluir.
        let btnConcluir = document.createElement("button");
        btnConcluir.innerHTML = "Concluir";
        
        //    iv. Adicione um atributo 'onclick' ao botão que chame a função 'removerTarefa(i)'.
        btnConcluir.setAttribute("onclick", `acaoConcluir(${i})`);

        //    v. Adicione o botão ao 'li' 
        liTarefa.appendChild(btnConcluir);

        // Desafio para dia 18-09 --> Incluir item na lista específica: Escolar ou Genérica
        if(listaTarefas[i] instanceof TarefaEscolar){
            ulTarefasEscolares.appendChild(liTarefa);
        } else{
            ulTarefasGenericas.appendChild(liTarefa);
        }
         
        
    }
}

function removerTarefa(indice) {
    // #TODO: 6. Implemente a lógica para remover uma tarefa.
    // a. Use o método 'splice' para remover o item do array 'listaTarefas' no índice recebido.
    listaTarefas.splice(indice, 1);
    // b. Chame a função 'carregarTarefas()' para atualizar a tela.
    carregarTarefas();
    
}

function acaoConcluir(indice){
    // 1 - pegar o elemento do vetor (objeto)
    
    // 2 - chamar o método concluirTarefa para esse objeto
    listaTarefas[indice].concluirTarefa();
    // 3 ' recarregar as tarefas na página
    carregarTarefas();
}
