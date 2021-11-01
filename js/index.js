let jokeItem = document.querySelector('.jokeItem');

let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;

let deleteButtonWidth = (window.screen.width * 0.4);

jokeItem.addEventListener('touchstart', (event) => {
    touchCordinateStart = event.touches[0].clientX;
});

jokeItem.addEventListener('touchmove', (event) => {
    touchCordinateMove = Math.floor(event.touches[0].clientX);
    if (touchCordinateMove < touchCordinateStart && 
        touchCordinateMove > touchCordinateStart - deleteButtonWidth) {
        
        jokeItem.style.transform = `translateX(${
            touchCordinateMove - touchCordinateStart}px)`;

        //console.log(touchCordinateMove);
    }
});


jokeItem.addEventListener('touchend', (event) => {
    touchCordinateEnd = Math.floor(event.changedTouches[0].clientX);
    if(touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
        jokeItem.style.transform = `translateX(-${deleteButtonWidth}px)`
    } else {
        jokeItem.style.transform = `translateX(${event.target.offsetLeft})`
    }
    
})
