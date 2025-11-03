let currentLanguage = 'en';

function setLanguage(lang) {
  const container = document.getElementById('recipe-detail');
  container.classList.remove('show'); // fade out

  setTimeout(() => {
    currentLanguage = lang;
    document.getElementById('site-title').innerText = texts[lang].siteTitle;
    showRecipe();
    container.classList.add('show'); // fade in
  }, 400);
}

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function showRecipe() {
  const recipeId = getQueryParam('id');
  let recipes = texts[currentLanguage].recipes;
  let recipe = recipes.find(r => r.id === recipeId);

  // fallback to English if missing
  if (!recipe && texts['en']) {
    recipe = texts['en'].recipes.find(r => r.id === recipeId);
  }

  const container = document.getElementById('recipe-detail');
  container.classList.add('fade');

  if (!recipe) {
    container.innerHTML = '<p>Recipe not found.</p>';
    return;
  }

  let stepsHTML = '';
  if (Array.isArray(recipe.steps)) {
    stepsHTML = '<ol>' + recipe.steps.map(step => `<li>${step}</li>`).join('') + '</ol>';
  } else {
    stepsHTML = `<p>${recipe.steps}</p>`;
  }

  container.innerHTML = `
    <h2>${recipe.name} (${recipe.country})</h2>
    <img src="${recipe.image}" alt="${recipe.name}" style="max-width:400px; border-radius:10px;">
    ${recipe.introduction ? `<p class="intro">${recipe.introduction}</p>` : ''}
    <h3>Ingredients</h3>
    <p>${recipe.ingredients}</p>
    <h3>Steps</h3>
    ${stepsHTML}
  `;
  container.classList.add('show');
}

window.onload = () => { setLanguage(currentLanguage); };
