
const Course=require('../Model/Course')
const { multipleMongoose }=require('../../until/mongoose')
class SearchController{
       index(req,res,next){
       Course.find({})
       .then(
        Course=>{
       
          res.render('home',{ Course : multipleMongoose(Course)})
        }
        
        )
       .catch(next)
       }

       show(req,res){
        res.send('ABC');
        }
}

module.exports=new SearchController;