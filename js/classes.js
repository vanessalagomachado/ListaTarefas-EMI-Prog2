class Tarefa {
    // #TODO: 1. Crie o construtor da classe.
    // Ele deve receber como parâmetros: nome, descricao, data.
    // Ele deve ter também um atributo 'concluida', que sempre começa como 'false'.
    constructor(nome, desc, data){
        this.nome = nome;
        this.descricao = desc;
        this.data = data;
        this.concluida = false;
    }

    

    // #TODO: 2. Crie um método chamado 'toString'.
    // Ele deve retornar uma string formatada com a data, o nome da tarefa e se está concluída ou não:
    
    // Exemplo: "04/09/2025 - Aula Programaçao 2 [CONCLUIDA]"

    toString() {
        if(this.concluida == false)
            return `${this.data} - ${this.nome} [NÃO CONCLUIDA]`;
        else 
            return `${this.data} - ${this.nome} [CONCLUIDA]`;
    }

    /*toString() {
        if(this.concluida == false)
            return `${this.data} - ${this.nome} [NÃO CONCLUIDA]`;
        else 
            return `${this.data} - ${this.nome} [CONCLUIDA]`;
    }*/
    toString() {
        return `${this.data} - ${this.nome} 
        ${this.concluida == false ? '[NÃO CONCLUIDA]' : '[CONCLUIDA]'}`;
    }

    // #TODO: 3. Crie um método chamado 'exibirDados'.
    // Ele deve retornar uma string formatada com todas as informações da tarefa:
    exibirDados(){
        return `Tarefa: ${this.nome}. Descrição: ${this.descricao}. 
        Data ${this.data}. 
        ${this.concluida == false ? '[NÃO CONCLUIDA]' : '[CONCLUIDA]'}`;
    }

    concluirTarefa(){
        this.concluida = true;
    }
}

class TarefaEscolar extends Tarefa{
    constructor(nome, desc, data, disciplina, data_entrega, sistema, peso){
        super(nome, desc, data);
        this.disciplina = disciplina;
        this.data_entrega = data_entrega;
        this.peso_atividade = peso;
        this.sistema_entrega = sistema;
    }

    toString() {
        return `${super.toString()} | Disciplina: ${this.disciplina.sigla}`;
    }

}

class Disciplina{
    constructor(nome, sigla){
        this.nome = nome;
        this.sigla = sigla;
    }

    toString(){
        return `${this.nome} (${this.sigla})`;
    }
}
