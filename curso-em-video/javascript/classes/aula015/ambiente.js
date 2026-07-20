let num = [5, 8, 2, 9, 3]

//num.push(1) //Adiciona elemento na ultima posição antes do vetor ser ordenado
num.push(1)//Adiciona elemento na ultima posição após o vetor ser ordenado
num.sort()//Coloca em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`) //Exibi o primeiro n° após ter colocado em ordem crescente

let pos = num.indexOf(8)

if(pos == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)

}
