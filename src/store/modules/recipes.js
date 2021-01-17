import axios from "axios";

const state = {
  recipes: [],
  activeRecipe: {},
};

const getters = {
  fetchedRecipes: (state) => state.recipes,
  activeRecipe: (state) => state.activeRecipe,
};

const actions = {
  async fetchRecipes({ commit }, ingredients) {
    const query = ingredients.join(",");

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=951bb07fac7e4a42820f41e9e3f73ece&ingredients=${query}&number=10`
    );

    commit("setRecipes", response.data);
  },
  async fetchRandomRecipes({ commit }) {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=951bb07fac7e4a42820f41e9e3f73ece&number=20`
    );

    commit("setRecipes", response.data.recipes);
  },
  async fetchActiveRecipeSteps({ commit }, recipe) {
    const id = recipe.id;

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=951bb07fac7e4a42820f41e9e3f73ece`
    );

    const recipeDetails = recipe;
    recipeDetails.ingredients = recipe.extendedIngredients
      ? recipe.extendedIngredients
      : recipe.usedIngredients.concat(recipe.missedIngredients);
    recipeDetails.steps = response.data[0].steps;

    commit("setActiveRecipe", recipeDetails);
  },
};

const mutations = {
  setRecipes: (state, recipes) => (state.recipes = recipes),
  setActiveRecipe: (state, recipeDetails) =>
    (state.activeRecipe = recipeDetails),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
