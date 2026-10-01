//atividade
alert("olá usuario");
let num1 = Number(prompt("digite um numero"));  
let num2 = Number(prompt("digite o segundo número"));
resultado = num1 + num2;
alert("a soma dos numeros é " + resultado);

//desafio extra
alert("olá estudante");
let n1 = Number(prompt("digite a primeira nota"));
let n2 = Number(prompt("digite a segunda nota"));
let n3 = Number(prompt("digite a terceira nota"))
let n4 = Number(prompt("digite a quarta nota"))
media = ( n1 + n2 + n3 + n4 ) / 4
if(media  >= 7){
   alert("você esta aprovado, sua media é " + media);
}
else{
    alert("você esta reprovado, sua media é " + media)
}