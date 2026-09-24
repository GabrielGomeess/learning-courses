// Encontrar o botão do adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>

    `;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add('app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', 'assets/edit.png');
    
    botao.append(imagemBotao);
    li.append(svg);
    li.append(paragrafo);
    li.append(botao);
    
    return li
}

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

     const elementoTarefa = criarElementoTarefa(tarefa);
     ulTarefas.append(elementoTarefa); //Adiciona na tela outra tarefa

     textArea.value = ''; // Limpa o textArea para poder escrever denovo

     formAdicionarTarefa.classList.add('hidden'); // Esconde o formulário ao adicionar uma tarefa

     // Para não perder a lista de tarefas ao recarregar a pág
     // Iremos utilizar o localStorage, um armazenamento local

     // Adiciona a lista no armazenamento local ('chave de acesso', valor)
     localStorage.setItem('tarefas', JSON.stringify(tarefas)) // A API JSON permite transformar a variavel numa String
});

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
});