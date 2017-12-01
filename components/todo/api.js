const express = require('express');
const todoRouter = express.Router();
const todoService = require('./service');

todoRouter.get('/', (req, res) => {
    todoService.gettodo().then(data => {
      return res.send(data);
    });
});

todoRouter.post('/', (req, res) => {
    let todo = {
      name: req.body.name,
      text: req.body.text,
    }
    todoService.inserttodo(todo).then(data => {
      return res.render('index');
  });

});

todoRouter.delete('/:todo_id', (req, res) => {
  let todo = { _id : req.params.todo_id}
  todoService.deletetodo(todo).then(data => {
    return res.send(data);
});
});

module.exports = todoRouter;
