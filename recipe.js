let currentLanguage = 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  document.getElementById('site-title').innerText = texts[lang].siteTitle;
  showRecipe();
}

// Get URL param by name
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function showRecipe() {
  const recipeName = getQueryParam('name');
  const recipes = texts[currentLanguage].recipes;
  const recipe = recipes.find(r => r.name === recipeName);

  const container = document.getElementById('recipe-detail');

  if (!recipe) {
    container.innerHTML = '<p>Recipe not found.</p>';
    return;
  }

  // Generate steps HTML (handle array or string)
  let stepsHTML = '';
  if (Array.isArray(recipe.steps)) {
    stepsHTML = '<ol>' + recipe.steps.map(step => `<li>${step}</li>`).join('') + '</ol>';
  } else {
    stepsHTML = `<p>${recipe.steps}</p>`;
  }

  container.innerHTML = `
    <h2>${recipe.name} (${recipe.country})</h2>
    <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 400px; border-radius: 10px;" />
    <h3>Ingredients</h3>
    <p>${recipe.ingredients}</p>
    <h3>Steps</h3>
    ${stepsHTML}
  `;
}

window.onload = () => {
  setLanguage(currentLanguage);

  // Add click handlers for language buttons (optional enhancement)
  document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('onclick').match(/'(\w+)'/)[1];
      setLanguage(lang);
    });
  });
};
