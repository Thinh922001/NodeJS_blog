const express = require('express');
const router = express.Router();
const CourseControler=require('../app/controllers/CourseController');


// router.use('/hoc-lap-trinh',searchControler.show);

router.use('/:slug',CourseControler.show);


module.exports=router;