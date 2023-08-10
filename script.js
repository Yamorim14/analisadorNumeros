/*Crie uma aplicação web que será um analisador de números:
- Deve inserir em um select um número de 1 a 100;
- Quando clicar em finalizar, deve mostrar: 
a) quantos números foram cadastrados;
b) maior valor informado;
c) menor valor informado;
d) soma de todos os valores informados;
e) média de todos os valores;
f) não poderá ser inserido números repetidos.*/

//criando o vetor para armazenar os números
let a = [];

function enviar(){
    //pegando os locais de armazenamento do arquivo HTML através do ID
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    //transformando para tipo Number
    let n = Number(num.value);

    //validando o número digitado de acordo com o que foi pedido
    if(n <= 0 || n > 100){
        window.alert('Número inserido é inválido. Por favor digite um número entre 1 e 100.');
        //limpando o local de digitar o número
        num.value = ""
    }
    //validando se o número já foi digitado e registrado na lista
    else if(a.includes(n)){
        window.alert('Esse número já foi adicionado. Por favor digite outro número.');
        num.value = ""
    }
    //colocando os números digitados dentro do select nas options
    else{
        let item = document.createElement('option');
        item.text = `O número ${n} foi inserido na lista.`
        tab.appendChild(item);
        //colocando o número digitado dentro do vetor
        a.push(n);
        num.value = ""
    };
};
function finalizar(){
    //pegando o local para mostrar em tela o resultado através do ID no arquivo HTML
    let res = document.getElementById('resul');
    
    //criando variáveis para armazenamento dos resultados
    let soma = 0;
    let media = 0;
    let maior = 1;
    let menor = 100;
    let total = a.length;

    //validando se foi registrado algum número na lista
    if(total == 0){
        window.alert('Nenhum número foi informado');
    }else{
        //percorrendo o vetor para analisar todos os números
        for(let pos = 0; pos < total; pos ++){
            //analisando o maior número
            if(a[pos] > maior){
                maior = a[pos];
            };
            //analisando o menor número
            if(a[pos] < menor){
                menor = a[pos];
            };
            //realizando a soma de todos os números
            soma += a[pos];
        }

        //calculando a média e apresentando dois números após a virgula
        media = (soma / total).toFixed(2);
    }
    
    //exibindo os resultados em tela
    res.innerHTML = `Foram cadatrados ${total} números. <br> 
    O maior valor informado foi ${maior} e o menor valor foi ${menor}. <br> 
    A soma de todos os valores cadastrados é de ${soma}. <br> 
    A média de todos os valores é de ${media}.`
};