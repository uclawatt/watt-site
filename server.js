var express = require("express");
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var xoauth2 = require('xoauth2');
// var path = require("path");
var logger = require("morgan");
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require('nconf');
// var auth =  require('./config.json');
var app = express();
var router = express.Router();
var path = require('path');
var hbs = require('hbs');

// include client-side assets and use the bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Vercel's deployment filesystem is read-only, so keep request logs on stdout.
app.use(logger(process.env.VERCEL ? 'combined' : 'dev'));

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
    res.render('index');
});

router.get("/mission",function(req,res){
    res.render('mission');
});

router.get("/team",function(req,res){
    res.render('team');
});

router.get("/lab",function(req,res){
  res.render('lab');
});

router.get("/families",function(req,res){
    res.render('families');
});

router.get("/contact",function(req,res){
    res.render('contact');
});

// http POST /contact
router.post("/contact", function (req, res) {
  var name = req.body.inputname;
  var email = req.body.inputemail;
  var comment = req.body.inputcomment;
  var isError = false;

  console.log('\nCONTACT FORM DATA: '+ name + ' '+email + ' '+ comment+'\n');

  // create transporter object capable of sending email using the default SMTP transport
  var transporter = nodemailer.createTransport(mg(auth));

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: name +  " <" + email + ">", // sender address
    to: 'tnkhan8042@gmail.com', // list of receivers
    subject: 'Message from Website Contact page', // Subject line
    text: comment,
    err: isError

  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('\nERROR: ' + error+'\n');
      //   res.json({ yo: 'error' });
    } else {
         console.log('\nRESPONSE SENT: ' + info.response+'\n');
      //   res.json({ yo: info.response });
    }
  });
});

router.get("/calendar",function(req,res){
    res.render('calendar');
});
router.get("/gallery",function(req,res){
    res.render('gallery');
});

router.get("/projects",function(req,res){
  res.render('projects');
});

router.get("/applytosponsor",function(req,res){
  res.render('applytosponsor');
});

router.get("/sponsors",function(req,res){
  res.render('sponsors');
});

router.get("/donate",function(req,res){
  res.render('donate');
});

router.get("/recordings",function(req,res){
  res.render('recordings');
});

// Google Site Verification

// WATT Email
router.get("/googlea2a112487327d175",function(req,res){
  res.render('googlea2a112487327d175');
});

app.use("/",router);

app.use(express.static(path.join(__dirname, 'public')));

app.use("*",function(req,res){
    res.render('404');
});

// Start a local HTTP server only when this file is run directly. On Vercel the
// exported Express app is invoked as a serverless function for each request.
if (require.main === module) {
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}

module.exports = app;
