document.addEventListener("DOMContentLoaded", ()=>{
    let miCarusel = new Carousel("caruselPrincipal");
    miCarusel.init();
});

class Carousel {
    
    constructor(carouselId, tickTimeInSeconds = 3){
        this.carouselHolder = document.getElementById(carouselId);
        this.track = this.carouselHolder.querySelector(".track");
        this.slides = [...this.track.querySelectorAll(".slide")];
        this.minLimit = 0;
        this.maxLimit = this.slides.length - 1;
        // es - 1 pq comienza desde 0
        this.currentIndex = 0;
        this.tickTime = tickTimeInSeconds * 1000;
        //en js no hay polimorfismo
        this.tickerId = null;
        this.direction = 1;
    }

    init(){
        this.tick();
        this.generateNavigationUI();
    }

    //funcion recursiva
    tick(){
        this.tickerId = setTimeout(
            ()=>{
                //TODO: Implementar el evento del tick
                this.moveNext();
                this.tick();
            },
            this.tickTime
        );
        //setTimeout hace un countdown
    }

    moveNext(){
        let tmpNewIndex = this.currentIndex + this.direction;
        if(tmpNewIndex > this.maxLimit){
            tmpNewIndex = this.maxLimit - 1;
            this.direction = -1;
        }
        if(tmpNewIndex < this.minLimit){
            tmpNewIndex = this.minLimit + 1;
            this.direction = + 1;
        }

        this.moveTo(tmpNewIndex);
    }

    moveTo(newIndex){
        this.currentIndex = newIndex;
        this.track.style.left = `${-100 * this.currentIndex}vw`;

    }

    generateNavigationUI() {
        let btnLeft = document.createElement("BUTTON");
        let btnRight = document.createElement("BUTTON");

        btnLeft.classList.add("carousel-btn");
        btnLeft.classList.add("btnleft");
        btnRight.classList.add("carousel-btn");
        btnRight.classList.add("btnright");

        btnLeft.textContent = "<";
        btnRight.textContent = ">";

        btnRight.addEventListener("click", (e)=>{
            e.preventDefault();
            e.stopPropagation();

            //alert("Moviendo A");
            //HACER QUE LOS BOTONES FUNCIONAN
            //TIP: SE DEBE CANCELAR EL TIMEOUT Y 
            // VOLVER A CORRER EL TICK
            clearTimeout(this.tickerId);
            this.direction = 1;
            this.moveNext();
            this.tick();
        });

        btnLeft.addEventListener("click", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            
            clearTimeout(this.tickerId);
            this.direction = -1;
            this.moveNext();
            this.tick();
        })

        this.carouselHolder.appendChild(btnLeft);
        this.carouselHolder.appendChild(btnRight);
    }
}