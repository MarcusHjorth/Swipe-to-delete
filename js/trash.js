let recycle = JSON.parse(localStorage.getItem('deletedItems'));


recycle.forEach((recycleItem) => {
    const main = document.querySelector('main');
        
    const container = document.createElement('div');
    container.classList.add("Swipe-Container", "animate_animated");
    container.setAttribute('id', recycleItem.id)
    
    const deleteItem = document.createElement("div"); 
    deleteItem.classList.add("deleteItem");
    deleteItem.textContent = "Delete";

    const jokeItem = document.createElement("div"); 
    jokeItem.classList.add("swipeItem");
    jokeItem.textContent = recycleItem.name;
    
    container.appendChild(deleteItem)
    container.appendChild(jokeItem);
    main.appendChild(container);
});