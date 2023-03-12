const express = require('express');
const router = express.Router();
const TodoSchema = require('../models/Todos');

// Get all Todo routes
router.get('/', async (req, res) => {
  const todos = await TodoSchema.find();
  res.json(todos);
});


//Create a new TODO 
router.post('/new', async (req,res) => {
  const newTodo = new TodoSchema(
    req.body  // -> thing that vue is sending
  );
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

router.get('/get/:id', async (req,res) => {
  const todo = await TodoSchema.findById({ _id: req.params.id });
  res.json(todo);
});

router.delete('/delete/:id', async (req, res) => {
  const todo = await TodoSchema.findByIdAndDelete({_id : req.params.id } );
})

router.put('/update/:id', async (req, res) => {
  const todo = await TodoSchema.updateOne(
    { _id: req.params.id } ,
    { $set: req.body} 
    /*{
      author: "Birinho",
      todo: "Ser rico"
    }*/
  )
})

module.exports = router;