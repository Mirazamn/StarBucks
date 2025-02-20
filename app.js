const staticNumbers = document.querySelector('.staticUsers');
const usersCustomers = document.querySelector('.usersCustomers');
const Wins = document.querySelector('.Wins');

// Premium Users
setTimeout(() => {
    let count = 0;
    let intervalId = setInterval(() => {
        count++;
        staticNumbers.textContent = count;
        if (count > 1200) {
            clearInterval(intervalId);
            staticNumbers.innerHTML = `9K <span>+</span>`;
        }
    }, 1);
}, 100);

// Happy Customers
setTimeout(() => {
    let count = 0;
    let intervalId = setInterval(() => {
        count++;
        usersCustomers.textContent = count;
        if (count > 1000) {
            clearInterval(intervalId);
            usersCustomers.innerHTML = `2K <span>+</span>`;
        }
    }, 1);
}, 100);

// Wins
setTimeout(() => {
    let wins = 0;
    let intervalId = setInterval(() => {
        wins++;
        Wins.textContent = wins;
        if (wins === 28) {
            clearInterval(intervalId);
            Wins.innerHTML = `28 <span>+</span>`;
        }
    }, 100);
}, 100);

// Fetching coffee data
fetch('./coffee.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.querySelector(".cards");
        const fragment = document.createDocumentFragment();

        data.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="extra-shadow"></div>
                <div class="img-bg"></div>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class='flex'>
                    <p class="price">$${product.price}</p>
                    <p>${product.litr}</p>
                </div>
                <button class='buy-product'><a href='#'>Buy Product</a></button> 
            `;
            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);
    })
    .catch(error => console.error("Error loading data:", error));