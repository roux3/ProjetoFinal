
let imagem = document.querySelectorAll('.imagem');



let i = 0;
activeImage(0);



imagem.forEach((item,index)=>{
    
    document.querySelectorAll('.imagem')[index].addEventListener('mouseover', function(){
        activeImage(index);
    })

})


function activeImage(index){

    let miniaturaPrev = document.querySelectorAll('.imagens-lateral .imagem')[i];
    miniaturaPrev.classList.remove('active');

    let miniatura = document.querySelectorAll('.imagens-lateral .imagem')[index];
    miniatura.classList.add('active');


    let imgPrev = document.querySelectorAll('.imagem-ativa img')[i];
    
    imgPrev.classList.remove('active');
    


    let img = document.querySelectorAll('.imagem-ativa img')[index];

    img.classList.add('active');

    i=index;



}