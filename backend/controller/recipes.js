const Recipes = require('../models/recipes');

exports.createRecipe = (req, res, next) => {
  const recipes = new Recipes({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time
  })
  recipes.save().then(() => {
    res.status(201).json({
      message: 'Recipe save successfully'
    })
  }).catch((err) => {
    res.status(400).json({
      error: err
    })
  })
};

exports.getOneRecipe = (req, res, next) => {
  Recipes.findOne({ _id: req.params.id }).then((recipe) => {
    res.status(200).json(recipe);
  }).catch((error) => {
    res.status(400).json({
      error: error
    })
  })

};

exports.getRecipes = (req, res, next) => {
  Recipes.find().then((recipes) => {
    res.status(200).json(recipes);
  }).catch((error) => {
    res.status(400).json({
      error: error
    })
  })
};

exports.updateOneRecipe = (req, res, next) => {
  const recipe = new Recipes({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time
  })
  Recipes.updateOne({ _id: req.params.id }, recipe).then((recipe) => {
    res.status(201).json(recipe);
  }).catch((error) => {
    res.status(400).json({
      error: error
    })
  })
};

exports.deleteRecipe = (req, res, next) => {
  Recipes.deleteOne({ _id: req.params.id }).then((msg) => {
    res.status(200).json(msg);
  }).catch((error) => {
    res.status(400).json({
      error: error
    })
  })
};