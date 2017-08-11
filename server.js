var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var hbs = require('hbs');

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
    res.render('index');
});

// router.get("/team",function(req,res){
//     res.render('team');
// });
//
// router.get("/families",function(req,res){
//     res.render('families');
// });
// router.get("/join",function(req,res){
//     res.render('join');
// });
// router.get("/contact",function(req,res){
//     res.render('contact');
// });
// router.get("/calendar",function(req,res){
//     res.render('calendar');
// });
// router.get("/gallery",function(req,res){
//     res.render('gallery');
// });
//
// router.get("/projects",function(req,res){
//   res.render('projects');
// });
//
// router.get("/sponsors",function(req,res){
//   res.render('sponsors');
// });
//
// router.get("/donate",function(req,res){
//   res.render('donate');
// });
//
// router.get("/memes",function(req,res){
//   res.render('memes');
// });
//
// router.get("/blog",function(req,res){
//   res.render('blog');
// });
//
// router.get("/shop",function(req,res){
//   res.render('shop');
// });

app.use("/",router);

app.use(express.static("public"));

app.use("*",function(req,res){
    res.render('404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
