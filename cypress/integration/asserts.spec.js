///<reference types="cypress"/>

//Assertiva de Igualdade
it('Equaly', () => {

    const a = 1;

    expect(a).equal(1);
    expect(a, 'Falha, pois os valores não são iguais').equal(1);
    expect(a).to.equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

//Assertiva de veracidade
it('Truth', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
})

// Assertiva de Lista de objetos
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal({ a: 1, b: 2 });
    expect(obj).eql({ a: 1, b: 2 });
    expect(obj).include({ a: 1 });
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;

})

// Assertiva de Lista
it('Arrays', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(arr).to.have.members([1, 2, 3, 4, 5])
    expect(arr).to.include.members([1, 2])
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

// Assertiva de Tipos
it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

// Assertivas de String
it('String', () => {
    const str = 'Lindo dia de vida'

    expect(str).to.be.equal('Lindo dia de vida')
    expect(str).to.have.length(17) //Valida o tamanho da string
    expect(str).to.contains('de') //Valida o conteúdo da string
        // Fazendo com regex
    expect(str).to.match(/de/)
    expect(str).to.match(/^Lindo/) //Estou definindo que deve conter no início a palavra Lindo
    expect(str).to.match(/vida$/) //Estou definindo que deve conter no final da frase a palavra vida
    expect(str).to.match(/.{17}/) //Validando o tamanho da String
    expect(str).to.match(/\w+/) //Validando se a String só tem letras
    expect(str).to.match(/\D+/) //Validando que não contém números
})

it('Numbers', () => {
    const num = 4
    const floatNumber = 5.12345

    expect(num).to.be.equal(4)
    expect(num).to.be.above(3) //Verifica se é acima de 3
    expect(num).to.be.below(7) //Verifica se é menor que 7
    expect(floatNumber).to.be.closeTo(5.2, 0.1) // Pega somente 1 casa decimal do número
})