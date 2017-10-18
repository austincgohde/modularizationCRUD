const users = require("../controllers/users.js")
module.exports = function(app){

  app.get('/users', users.getAll);

  app.get('/user/:id', users.getOne);

  app.post('/users', users.create);

  app.get('/delete/:id', users.delete);

  app.get('/edit/:id', users.edit);

  app.post('/update/:id', users.update);

}
