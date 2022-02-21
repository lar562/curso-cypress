it('Nada agora', function() {})

// function soma(a, b) {
// return a + b;
// }

// Função anônima, é a função que não possui um nome atribuído
// function (a, b) {
// return a + b;
// }

// Arrow function é a função que tem como característica o símbolo => no lugar do nome function

const soma = (a, b) => {
    return a + b;
}


// Outra forma de escrever a mesma função acima com o Arrow Function é a seguinte:
// const soma = (a,b) => a+b
// Dessa forma, ele aceita que após o sinal => passe diretamente o retorno da função, não sendo necessário
// a função de return
console.log(soma(1, 4))

it('Function', function() {
    console.log('Function', this)
})


// Dar uma olhada na documentação ES6