const searchRouter=require('./search')


function route(app){
    app.get('/', (req, res) => {
        res.render('home')
      })
    //   app.get('/trang-chu', (req, res) => {
      
    //     res.render('san-pham')
    //   })
      app.use('/abc',searchRouter)
    //   app.get('/tim-kiem', (req, res) => {
    //     res.render('search');
    //   })
    //   app.post('/tim-kiem', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    //   })

}

module.exports=route;
