const frutas = ['Maçã', 'Banana', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Kiwi']

const clone = [ ...frutas]

const todasFrutas = [...frutas, ...maisFrutas]

frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasFrutas)

const [primeira, segunda, ...restante] = todasFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)

