const express = require('express');
const router = express.Router();
const searchControler=require('../app/controllers/SearchController');


// router.use('/hoc-lap-trinh',searchControler.show);

router.use('/:slug',searchControler.show);
router.use('/',searchControler.index);

module.exports=router;