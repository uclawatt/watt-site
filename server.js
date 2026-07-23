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
app.disable('x-powered-by');
var router = express.Router();
var path = require('path');
var hbs = require('hbs');
var mailgunAuth = process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN ? {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
} : null;
var contactRateLimit = new Map();

function isContactRateLimited(ip) {
  var now = Date.now();
  var windowMs = 10 * 60 * 1000;
  var limit = 5;
  var record = contactRateLimit.get(ip);

  if (!record || now - record.startedAt > windowMs) {
    contactRateLimit.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  record.count += 1;
  return record.count > limit;
}

// Baseline HTTP hardening for local and Vercel deployments.
app.set('trust proxy', 1);
app.use(function (req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

  if (process.env.VERCEL) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    if (req.get('x-forwarded-proto') === 'http') {
      return res.redirect(308, 'https://' + req.get('host') + req.originalUrl);
    }
  }

  next();
});

app.use(bodyParser.urlencoded({ extended: false, limit: '20kb' }));
app.use(bodyParser.json({ limit: '20kb' }));


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
  if (isContactRateLimited(req.ip)) {
    return res.status(429).send('Too many contact requests. Please try again later.');
  }

  var origin = req.get('origin');
  if (origin && origin !== req.protocol + '://' + req.get('host')) {
    return res.status(403).send('Invalid request origin.');
  }

  var name = req.body.inputname;
  var email = req.body.inputemail;
  var comment = req.body.inputcomment;
  var isError = false;

  if (typeof name !== 'string' || typeof email !== 'string' || typeof comment !== 'string' ||
      name.trim().length < 1 || name.length > 120 || /[\r\n]/.test(name) || email.length > 254 || /[\r\n]/.test(email) || comment.trim().length < 1 || comment.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send('Please provide a valid name, email address, and message.');
  }

  console.log('Received a contact form submission.');

  // create transporter object capable of sending email using the default SMTP transport
  if (!mailgunAuth) {
    return res.status(503).send('Contact form is not configured.');
  }
  var transporter = nodemailer.createTransport(mg(mailgunAuth));

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
      return res.status(502).send('Unable to send your message right now.');
    } else {
         console.log('\nRESPONSE SENT: ' + info.response+'\n');
      return res.status(200).send('Thank you for contacting WATT.');
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

app.use(function (error, req, res, next) {
  console.error('Request failed:', error.message);
  if (res.headersSent) {
    return next(error);
  }
  if (error.type === 'entity.too.large') {
    return res.status(413).send('Request is too large.');
  }
  return res.status(500).send('Something went wrong. Please try again later.');
});

// Start a local HTTP server only when this file is run directly. On Vercel the
// exported Express app is invoked as a serverless function for each request.
if (require.main === module) {
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}

module.exports = app;
