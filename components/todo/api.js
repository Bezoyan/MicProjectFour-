const express = require('express');
const todoRouter = express.Router();
const todoService = require('./service');

todoRouter.get('/', (req, res) => {
    todoService.gettodo().then(data => {
      return res.send(data);
    });
});

UsersRouter.get('/login', (req, res) => {
  res.render('login');
})



UsersRouter.post('/', (req, res) => {
    let todo = {
      name: req.body.name,
      text: req.body.text,
    }
    todoService.insertUsers(user).then(data => {
      return res.render('index');
  });

});
module.exports = UsersRouter;
