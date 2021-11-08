axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    const users = response.data;
    
    users.forEach(user => {
        const main = document.querySelector('main');
        
        const container = document.createElement('div');
        container.classList.add("Swipe-Container", "animate_animated");
        container.setAttribute('id', user.id)
        
        const deleteItem = document.createElement("div"); 
        deleteItem.classList.add("deleteItem");
        deleteItem.textContent = "Delete";

        const jokeItem = document.createElement("div"); 
        jokeItem.classList.add("swipeItem");
        jokeItem.textContent = user.name;
        
        container.appendChild(deleteItem)
        container.appendChild(jokeItem);
        main.appendChild(container);
    });
});