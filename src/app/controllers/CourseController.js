const Course=require('../Model/Course')
const { multipleMongoose }=require('../../until/mongoose')
class CourseController{

       show(req,res){
        res.send('Course-Detail '+req.params.slug);
        }
}

module.exports=new CourseController;