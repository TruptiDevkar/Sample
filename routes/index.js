var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',function(req,res,next){
  res.render('home',{title:'Express' });
});
router.get('/about',function(req,res,next){
  res.render('about',{title:'Express' });
})
;router.get('/contact',function(req,res,next){
  res.render('contact',{title:'Express' });
});
router.post('/process',function(req,res,next){
 var a = req.body.text1;
 var b = req.body.text2;
 var c=parseInt(a)+parseInt(b);
 console.log(c)
 res.render('ans',{mya:a,myb:b,myc:c});
});
module.exports = router;
