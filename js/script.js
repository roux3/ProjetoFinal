let id = 'slide';

slide = document.querySelector(`[data-slide="${id}"]`);




class Ativa{
    constructor(){
        this.active = 0;
    }
}


ativo = new Ativa();



var items = slide.querySelectorAll('.carrousel-items img');
activeSlide(0)




function activeSlide(index){

    console.log(index);
    ativo.active = index;
    
    var items = slide.querySelectorAll('.carrousel-items img');
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');


    var itemsBall = slide.querySelectorAll('.balls .ball');
    console.log(itemsBall);
    itemsBall.forEach(item => item.classList.remove('active'));
    itemsBall[index].classList.add('active');

    tempo();
    
}




function tempo(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(next, 5000);
}



function next(){

    var activeNext = ativo.active;


    size = items.length-1;
    
    if(activeNext < size){
        soma = activeNext + 1;
        activeSlide(soma);
        
        
    }
    else{
        activeSlide(0);
        ativo.active = 0

    }

}






function control(){
    items.forEach((item,index)=>{

        document.querySelectorAll('.ball')[index].addEventListener('click', function(){
            activeSlide(index);
        })
        })
}

control()




