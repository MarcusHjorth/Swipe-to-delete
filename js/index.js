let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let touchElement;


let deleteStorage = window.localStorage;
let trash = [];
if(localStorage.getItem('deletedItems')){
    trash = JSON.parse(localStorage.getItem('deletedItems'))
}

document.querySelector("main").addEventListener('touchstart', (e) => {
    let deleteButtonWidth = (window.screen.width * 0.4);
    
    let touchElement = e.target;
    let parentElement = e.target.parentElement;
    let touchCordinateStart = e.touches[0].clientX;
    
    
    // Collapse and delte item
    // Vi har brugt unclick i stedet for addeventlistener fordi den kun kan bruges 1 gang
    parentElement.querySelector(".deleteItem").onclick = () => {
        let userObject = {
            id: parentElement.id,
            name:parentElement.querySelector(".swipeItem").textContent,
        };

        trash.push(userObject);
        localStorage.setItem('deletedItems', JSON.stringify(trash));
        
        parentElement.classList.add("animate__fadeOutLeft");
        // tilføjer ItemCollapse classen og collapser derfor elementer
        setTimeout(() => {
            parentElement.classList.add("ItemCollapse");
        }, 500);
        // sletter elementet efter 2000 millisekunder
        setTimeout(() => {
            parentElement.remove();
        }, 1000);
    };
    
    parentElement.addEventListener('touchstart', (event) => {
        touchCordinateStart = event.touches[0].clientX;
    });

    touchElement.addEventListener('touchmove', (event) => {
        touchCordinateMove = Math.floor(event.touches[0].clientX);
        if (touchCordinateMove < touchCordinateStart && 
            touchCordinateMove > touchCordinateStart - deleteButtonWidth) {
                
            touchElement.style.transform = `translateX(${
                touchCordinateMove - touchCordinateStart}px)`;
            }
    });

    // Automatically move back and forth
    touchElement.addEventListener('touchend', (event) => {
        touchCordinateEnd = Math.floor(event.changedTouches[0].clientX);
        if(touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
            touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`
        } else {
            touchElement.style.transform = `translateX(${event.target.offsetLeft})`
        }
    });
});

/*
document.querySelector("main").addEventListener('touchstart', (e) => {

let target = e.target.parentNode;

let jokeItem = target.querySelector('.jokeItem');
let jokeDelete = target.querySelector('.deleteItem')
let swipeContainer = target.querySelector('.Swipe-Container')

let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let touchElement;

let deleteButtonWidth = (window.screen.width * 0.4);

    touchElement = e.target.parentElement.id
    touchCordinateStart = e.touches[0].clientX;

    jokeDelete.addEventListener('click', () => {
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
});
*/