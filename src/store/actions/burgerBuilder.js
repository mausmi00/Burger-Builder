import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const addIngredients = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const removeIngredients = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFail = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (disptach) => {
    axios
      .get("https://burgerbuilder-20cdf.firebaseio.com/ingredients.json")
      .then((response) => {
        disptach(setIngredients(response.data));
      })
      .catch((error) => {
        disptach(fetchIngredientsFail());
      });
  };
};
