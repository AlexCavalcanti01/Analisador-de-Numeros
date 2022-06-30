let numeros = []
function add(e){
    e.preventDefault();
    let input1 = document.getElementById('txtn') 
    let nu = Number(input1.value)
    if(nu < 1 || nu > 100){
        window.alert('Número inválido')
    } else if (numeros.indexOf(nu) == -1) {
        let add = document.getElementById('addN')
        let item = document.createElement('option')
        item.text = `Valor ${nu} adicionado.`
        add.appendChild(item)
        numeros.push(nu)
        } else {
                window.alert('Número inválido ou ja escontrado na lista!')
    }
    input1.value = '' //zerar input
    input1.focus()    

}

function resultado() {
    let res = document.getElementById('res')
    numeros.sort(); 
    let primeiro = numeros[0];
    let ultimo = numeros[numeros.length - 1];
    let soma = 0;
    for(var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    }
    let media = soma/numeros.length
    res.innerHTML = `<p> Ao todo, temos ${numeros.length} números cadastrados. </p>`
    res.innerHTML += `<p> O maior valor informado foi ${ultimo}. </p>`
    res.innerHTML += `<p> O menor valor informado foi ${primeiro}. </p>`
    res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
    res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`    
}






