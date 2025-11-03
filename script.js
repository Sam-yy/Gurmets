let currentLanguage = 'en';

function setLanguage(lang) {
  const container = document.getElementById('recipe-list');
  container.classList.remove('show'); // fade out

  setTimeout(() => {
    currentLanguage = lang;

    if (!texts[lang].recipes || texts[lang].recipes.length === 0) {
      texts[lang].recipes = texts['en'].recipes;
    }

    document.getElementById('site-title').innerText = texts[lang].siteTitle;
    displayRecipes(texts[lang].recipes);

    container.classList.add('show'); // fade in
  }, 400);
}

function displayRecipes(recipesToShow) {
  const container = document.getElementById('recipe-list');
  container.classList.add('fade');
  container.innerHTML = '';

  recipesToShow.forEach((recipe) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <a href="recipe.html?id=${recipe.id}" style="text-decoration:none; color:inherit;">
        <h2>${recipe.name} (${recipe.country})</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      </a>
    `;
    container.appendChild(card);
  });
  container.classList.add('show');
}

function filterByCountry(country) {
  let filtered;
  if (country === 'all') {
    filtered = texts[currentLanguage].recipes;
  } else {
    filtered = texts[currentLanguage].recipes.filter(r => r.country === country);
  }
  displayRecipes(filtered);
}

setLanguage('en');


