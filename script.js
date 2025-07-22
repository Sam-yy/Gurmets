let currentLanguage = 'en';

function setLanguage(lang) {
  currentLanguage = lang;

  // Update static text
  document.getElementById('site-title').innerText = texts[lang].siteTitle;
  document.getElementById('btn-all').innerText = texts[lang].btnAll;
  document.getElementById('btn-myanmar').innerText = texts[lang].btnMyanmar;
  document.getElementById('btn-japan').innerText = texts[lang].btnJapan;
  document.getElementById('btn-italy').innerText = texts[lang].btnItaly;

  // Show recipes in the selected language
  displayRecipes(texts[lang].recipes);
}

function displayRecipes(recipesToShow) {
  const container = document.getElementById('recipe-list');
  container.innerHTML = '';

  recipesToShow.forEach((recipe) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    // Wrap whole card content in a clickable link to recipe detail page
    card.innerHTML = `
      <a href="recipe.html?name=${encodeURIComponent(recipe.name)}" style="text-decoration:none; color:inherit;">
        <h2>${recipe.name} (${recipe.country})</h2>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      </a>
    `;

    container.appendChild(card);
  });
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

// Initialize page with English recipes
setLanguage('en');



