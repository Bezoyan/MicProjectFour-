class ApiV1 {
  initialize(app){
   app.use('/api/todo', todoApi);


   app.get('/',(req,res) => {
     return res.render('todo');
   });
 }
}

module.exports = new ApiV1();
