/*
Quando clicar na seta para avançar temos que esconder todas as imagens e mostar a próxima imagem

A imagem atual começa em 0, porque é a primeira imagem, 
assim que for clicado no avançar, é necessário adicionar mais 1 ao contador de imagens
para poder saber qual imagem irá mostrar.

esconder todas as imagens
pegar todas as imagens e usando o DOM e remover a classe mostra
mostar a próxima imagem
pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostar nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

/*
Quando clicar na seta para avançar temos que esconder todas as imagens e mostar a próxima imagem
*/
setaAvancar.addEventListener('click', function() {
    //Está é a condição de contador da imagem atual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1
    if(imagemAtual === totalDeImagens) {
        return
    }

    /*
    A imagem atual começa em 0, porque é a primeira imagem, 
    assim que for clicado no avançar, é necessário adicionar mais 1 ao contador de imagens
    para poder saber qual imagem irá mostrar.
    */
   imagemAtual++;

   /*
   esconder todas as imagens
   pegar todas as imagens e usando o DOM e remover a classe mostra
   */

   imagensPainel.forEach(imagem => {
       imagem.classList.remove('mostrar')
   });

  /* mostar a próxima imagem
  pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostar nela
  */

  imagensPainel[imagemAtual].classList.add('mostrar');

});

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

       /*
   esconder todas as imagens
   pegar todas as imagens e usando o DOM e remover a classe mostra
   */

   imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
});

/* mostar a imagem anterior
pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostar nela
*/

imagensPainel[imagemAtual].classList.add('mostrar');

});
