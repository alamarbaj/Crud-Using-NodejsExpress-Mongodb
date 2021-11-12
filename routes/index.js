var express = require('express');
var router = express.Router();
var {home,List,Add,AddRecord,Edit,UpdateRecord,AddDesignation,PostAddDesignation,Delete,Next} = require('../controller/controller')

router.get('/',home)
router.get('/list',List)
router.get('/Add',Add)
router.post('/AddRecord',AddRecord)
router.get('/edit/:_id',Edit)
router.post('/UpdateRecord',UpdateRecord)
router.get('/Delete/:_id',Delete)
router.get('/AddDesignation',AddDesignation)
router.post('/PostAddDesignation',PostAddDesignation) 


module.exports = router;
