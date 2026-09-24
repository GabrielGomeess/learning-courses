// Encontrar o botão do adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
     // Aqui iremos alterar comportamento da pág após ocorrer o submit
     // Ao invés de recarregar a pág, e fazer oq queremos q faça

     evento.preventDefault(); // Impede o comportamento padrão do evento

     const tarefa = {
        descricao: textArea.value
     }

     tarefas.push(tarefa);

     // Para não perder a lista de tarefas ao recarregar a pág
     // Iremos utilizar o localStorage, um armazenamento local

     // Adiciona a lista no armazenamento local ('chave de acesso', valor)
     localStorage.setItem('tarefas', JSON.stringify(tarefas)) // A API JSON permite transformar a variavel numa String
});