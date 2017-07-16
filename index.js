import fetch from 'isomorphic-fetch';

// Note: this is the entry point for the entire application
let pizzaList = [];
let loadingPizzas = true;

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

fetch('/pizza.json')
	.then(response => {
		if (response.status >= 400) {
            alert("Error Loading Pizzas");
			throw new Error("Unable to load pizzas");
		}
		return response.json();
	})
	.then(pizzas => {
        pizzaList = pizzas.pizzas;
        loadingPizzas = false;
	});

// step 2: implement the view and required behaviors
