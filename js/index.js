let jokeItem = document.querySelector('.jokeItem');
let jokeDelete = document.querySelector('.deleteItem')
let swipeContainer = document.querySelector('.Swipe-Container')

let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;

let deleteButtonWidth = (window.screen.width * 0.4);

document.querySelector('.deleteItem').addEventListener('click', () => {
    swipeContainer.classList.add("animate__fadeOutLeft");
    // tilføjer ItemCollapse classen og collapser derfor elementer
    setTimeout(() => {
        swipeContainer.classList.add("ItemCollapse");
    }, 1100);
    // sletter elementet efter 2000 millisekunder
    setTimeout(() => {
        swipeContainer.remove();
    }, 1600);
})


jokeItem.addEventListener('touchstart', (event) => {
    touchCordinateStart = event.touches[0].clientX;
});

jokeItem.addEventListener('touchmove', (event) => {
    touchCordinateMove = Math.floor(event.touches[0].clientX);
    if (touchCordinateMove < touchCordinateStart && 
        touchCordinateMove > touchCordinateStart - deleteButtonWidth) {
        
        jokeItem.style.transform = `translateX(${
            touchCordinateMove - touchCordinateStart}px)`;
    }
});


// Automatically move back and forth
jokeItem.addEventListener('touchend', (event) => {
    touchCordinateEnd = Math.floor(event.changedTouches[0].clientX);
    if(touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
        jokeItem.style.transform = `translateX(-${deleteButtonWidth}px)`
    } else {
        jokeItem.style.transform = `translateX(${event.target.offsetLeft})`
    }
});
