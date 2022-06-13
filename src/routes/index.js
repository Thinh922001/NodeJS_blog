const searchRouter=require('./search');
const CoursechRouter= require('./Course');
const Course=require('../app/Model/Course');

function route(app){
    app.get('/', (req, res) => {
      Course.find({},function (err,doc){
        if(!err) res.json(doc);
    
         
      })
        // res.render('home')
      })
    //   app.get('/trang-chu', (req, res) => {
      
    //     res.render('san-pham')
    //   })
      app.use('/abc',searchRouter)
      app.use('/Course',CoursechRouter)
    //   app.get('/tim-kiem', (req, res) => {
    //     res.render('search');
    //   })
    //   app.post('/tim-kiem', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    //   })

}

module.exports=route;
