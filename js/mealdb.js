
const loadMeal = () => {
    const seaechField = document.getElementById('search-field');
    const searchText = seaechField.value;
    seaechField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeal(data.meals));
    
}

// loadMeal();

const displayMeal = data => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.textContent = '';
    data.forEach(meal =>{
        // console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
                <div onclick="mealDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                    </div>
                </div>
        `;
        foodContainer.appendChild(div);

    });
}

const mealDetails = (data) => {
    // console.log(data);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;

    fetch(url)
    .then((response) => response.json())
    .then(data => displayMealDetails(data.meals[0]));

}

const displayMealDetails = (data) => {
    console.log(data)

    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${data.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.strMeal}</h5>
            <p class="card-text">${data.strInstructions}</p>
            <a href="${data.strYoutube}" class="btn btn-primary">Watch Video</a>
        </div>
    `;
    mealDetails.appendChild(div);

}