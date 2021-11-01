let jokeItem = document.querySelector('.jokeItem');

let touchCordinateStart;
let touchCordinateMove;

jokeItem.addEventListener('touchstart', (event) => {
    touchCordinateStart = event.touches[0].clientX;
});

jokeItem.addEventListener('touchmove', (event) => {
    touchCordinateMove = Math.floor(event.touches[0].clientX);
    if (touchCordinateMove < touchCordinateStart) {
        
        jokeItem.style.transform = `translateX(${
            touchCordinateMove - touchCordinateStart
        }px)`;
        
        console.log(touchCordinateMove);
    }

    


});
