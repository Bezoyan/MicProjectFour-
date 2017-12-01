const todoDAO = require('./private/dao');

class todoService {

  gettodo() {
    return new Promise((resolve, reject) => {
      todoDAO.getData().then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }

  inserttodo(todo) {
    return new Promise((resolve, reject) => {
      todoDAO.insertData({
        name: todo.name,
        username: todo.text,
      }).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }


        deletetodo(todo) {
        return new Promise((resolve, reject) => {
          todoDAO.remove({
          _id : req.params.todo_id
        }).then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        })
      })
    }

}

module.exports = new todoService();
