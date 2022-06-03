
var numeros = [];
var msg3 = null;
maiorValor = null;
menorValor = null

// document.getElementById('numeros').value = numeros;

function adiciona(){
    numeros.push(document.getElementById('InputBtn').value); //Array 'numeros' recebe valor do input.
    document.getElementById('InputBtn').value = '';
    document.getElementById('cx_numeros').value = `Valor ${numeros} adicionado`;
}

function mostrar(){
    // document.getElementById('box2').innerHTML = (`${quantidade()} <br> ${maiorEmenorValor()}`);
    // quantidade();//FUNCIONANDO
    maiorEmenorValor();
}

function quantidade(){
    let qtd_numeros = numeros.length
    let msg1 = (`<div class='container2 box2'>Quantidade de números digitados: ${qtd_numeros}</div>`)
    document.getElementById('box2').innerHTML = msg1;
}

function maiorEmenorValor(){
    if(numeros.length == 1){
        maiorValor = menorValor = numeros[0];
        let msg2 = (`<div class='container2 box2'>Maior número digitado: ${maiorValor} <br>
                        Menor valor: ${menorValor}
                    </div>`)
        document.getElementById('box2').innerHTML = msg2;
    }else{
        for(let numero in numeros){
            if(menorValor < numero){
                menorValor = numero;
                msg3 = (`<div class='container2 box2'>Maior número digitado: ${maiorValor} <br>
                             Menor valor: ${menorValor}
                          </div>`)
                document.getElementById('box2').innerHTML = msg3;

            }if(maiorValor > numero){
                maiorValor = numero;
            } msg3 = (`<div class='container2 box2'>Maior número digitado: ${maiorValor} <br>
                         Menor valor: ${menorValor}
                        </div>`)
                document.getElementById('box2').innerHTML = msg3;
            }
        }
    }   


//Qtd de numeros - ok
// maior valor
// menor valor
// soma dos valores
// media dos valores
