let id = 'slide';

slide = document.querySelector(`[data-slide="${id}"]`);
active = 0;
activeSlide(1)



function activeSlide(index){
    console.log(index);

    active = index;
    items = slide.querySelectorAll('.carrousel-items img');
    items[index].classList.add('active');
}

        
for(let i = 0; i < this.items.length; i++){

    document.querySelectorAll('.ball')[i].addEventListener('click', activeSlide(i))
}
    





class Slide{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.activeSlide(1)

        this.start();
    }

    activeSlide(index){
        console.log(index)
        
        this.active = index;
        this.items = this.slide.querySelectorAll('.carrousel-items img');
        this.items[index].classList.add('active');
    }

    addNavigation(){
        
        for(let i = 0; i < this.items.length; i++){

            document.querySelectorAll('.ball')[i].addEventListener('click', this.activeSlide)
        }
    }


    start(){
        
        const nav = this.addNavigation;

        const test = this.addNavigation.bind(this)

        console.log(test())



    }


}

new Slide('slide');