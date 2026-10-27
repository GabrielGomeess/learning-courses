const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeMedia(aluno) {
    //Verifica se há algum valor no array[0] da lista e atribui na variavel aluno
    if (lista[0].includes(aluno)) { 
        
        //O valor que estiver na variavel aluno é colocado na variavel indice
        const indice = lista[0].indexOf(aluno); 

        // o valor que está no indice é utilizado para acessar o valor do array[1] da lista  
        const mediaAluno = lista[1][indice];

        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não localizado!!');
    }
}

exibeNomeMedia('Juliana');
exibeNomeMedia('Vini');