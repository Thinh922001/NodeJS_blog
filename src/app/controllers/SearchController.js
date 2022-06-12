class SearchController{
       index(req,res){
    res.render('about');
       }

       show(req,res){
        res.send('ABC');
        }
}

module.exports=new SearchController;