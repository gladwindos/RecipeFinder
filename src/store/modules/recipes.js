import axios from "axios";

const state = {
  recipes: [],
};

const getters = {
  fetchedRecipes: (state) => state.recipes,
};

const actions = {
  async fetchRecipes({ commit }, ingredients) {
    console.log(ingredients);
    const query = ingredients.join(",");

    const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=951bb07fac7e4a42820f41e9e3f73ece&ingredients=${query}&number=10`
      );

    commit("setRecipes", response.data);
  },
};

const mutations = {
  setRecipes: (state, recipes) => (state.recipes = recipes),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
