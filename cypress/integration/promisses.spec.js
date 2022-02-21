// const { resolve } = require("cypress/types/bluebird");

it('Sem testes ainda', () => {})

// const getSomething = () => 20;
// const system = () => {
// console.log('init');
// const something = getSomething();
// Interpolação
// Maneira mais andiga de se fazer console.log('Something is' + something);
// Na interpolação se usa acentos graves para imprimir o texto com a variável
// console.log(`Something is ${something}`);
// console.log('end');
// }

// _________________________________________________________________________________________

// Conceito de Assincronicidade.
// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

// Imprimindo o end após o retorno da informação do callback
// const system = () => {
//     console.log('init');
//     getSomething(some => {
//         console.log(`Something is ${some}`);
//         console.log('end')

//     });
// }

// Imprimindo o end antes do retorno da informação do callback
// const system = () =>{
//     console.log('init');
//     getSomething(some=>console.log(`Something is ${some}`))
// }
// console.log('end');

// _______________________________________________________________________________________________________

// Promisses
const getSomething = () => {
    // Resolve é uma função que será invocada quando a Promise finalizar e for resolvida
    // Reject é uma função que será invocada quando houver algum problema na Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

// const system = () => {
// console.log('init');
// const prom = getSomething();
// prom.then(some => {
// console.log(`Something is ${some}`);
// }) ------> Isso aqui pode ser feito de outra forma mais simplificada, como mostrado abaixo:
// getSomething().then(some => {
// console.log(`Something is ${some}`);
// })
// console.log('end');
// }

// Outra forma de fazer as promisses com assincronicidade

const system = async() => {
    console.log('init');
    const some = await getSomething();
    console.log(`Something is ${some}`);
    console.log('end');
}
system();