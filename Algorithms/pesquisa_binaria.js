// Pesquisa Binária => Você chuta um número intermediário
// e elimina a metade dos números restantes a cada vez.
// Se ele encontrar o valor, ele o retorna, se não, ele retorna nulo.

function pesquisa_binaria(lista, item){
    baixo = 0
    alto = lista.length -1

    while (baixo <= alto){
        meio = Math.floor((baixo + alto ) / 2)
        chute = lista[meio]

        if (chute === item){
            return meio
        } 
        if (chute > item){
            alto = meio - 1
        }else{
            baixo = meio + 1
        }
    }
    return null
}

const lista = [1,3,5,7,9]

console.log(pesquisa_binaria(lista, 3)) // => 1
console.log(pesquisa_binaria(lista, 10)) // => null
