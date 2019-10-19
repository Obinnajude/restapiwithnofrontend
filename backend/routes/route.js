const express = require('express');
const routes = express.Router();
const recipeCtrl = require('../controller/recipes');


routes.post('/', recipeCtrl.createRecipe);
routes.get('/:id', recipeCtrl.getOneRecipe);
routes.get('/', recipeCtrl.getRecipes);
routes.put('/:id', recipeCtrl.updateOneRecipe);
routes.delete('/:id', recipeCtrl.deleteRecipe);

module.exports = routes;