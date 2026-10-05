var express = require("express");
var nodemailer = require('nodemailer');
var logger = require("morgan");
var mg = require('nodemailer-mailgun-transport');
var app = express();
app.disable('x-powered-by');
var router = express.Router();
var path = require('path');
var hbs = require('hbs');
var boardMembers = [
  {
    name: 'Katie W.',
    image: 'img/board-members26/katie-w.webp',
    role: 'President',
    caption: 'I love watching movies, listening to alternative music, learning new crafts, and collecting keychains!\n4th year EE from Modesto, CA. '
  },
  {
    name: 'Priya',
    image: 'img/board-members26/priya.webp',
    role: 'External Vice President',
    caption: 'I enjoy all things outdoors and sports, especially hiking and skiing. You might catch me out on a spontaneous midnight walk or sipping various teas in the lab!\n3rd year EE from Knoxville, TN. '
  },
  { name: 'Zitong',
    role: 'Internal Vice President', 
    image: 'img/board-members26/zitong.webp' },
  {
    name: 'Alisa',
    image: 'img/board-members26/alisa.webp',
    role: 'Technical Workshops Co-Chair',
    caption: 'Hello! Alisa here, come chat with me about anything WATT City, technical workshops you want to see, music, good food, or MMA :)\n2nd year EE from Qingdao, China.'
  },
  {
    name: 'Katie T.',
    image: 'img/board-members26/katie-t.webp',
    role: 'Technical Workshops Co-Chair',
    caption: 'I enjoy trying new bakeries and watching sunrise/sunsets!\n2nd year EE from San Jose, CA.'
  },
  { name: 'Angela', 
    role: 'Co Corporate Relations',
    image: 'img/board-members26/angela.webp' },
  {
    name: 'Sophie',
    image: 'img/board-members26/sophie.webp',
    role: 'Co Corporate Relations',
    caption: 'Hi! I’m Sophie and I love making things (models, origami, baking, literally anything with my hands), being outdoors, and exploring new places!\n4th year CSE from Los Angeles.'
  },
  { name: 'Bella', 
    role: 'Outreach',
    image: 'img/board-members26/bella.webp' },
  {
    name: 'Karin',
    image: 'img/board-members26/karin.webp',
    role: 'Mentorship Co-Chair',
    caption: 'I love hiking, baking and exploring libraries a lot! In my free time you can find me running to different cafes or at a library.\n2nd year EE from Gilroy, CA.'
  },
  
  
  {
    name: 'Michelle',
    image: 'img/board-members26/michelle.webp',
    role: 'Mentorship Co-Chair',
    caption: "Hello! I'm a senior electrical engineering major getting ready to graduate from San Diego. Outside of school I love traveling, being out in nature, music, and a good rom-com!"
  },
  { name: 'Caroline', 
    role: 'EDI and Wellness Chair',
    image: 'img/board-members26/caroline.webp' },
  {
    name: 'Emma',
    image: 'img/board-members26/emma.webp',
    role: 'Publicity Chair',
    caption: "Hi! I'm Emma, a junior majoring in electrical engineering from Palo Alto, CA. In my free time, I enjoy junk journaling, collecting trinkets and stationery, and going on long runs."
  },
  { name: 'Nina', 
    role: 'Internal Affairs & Social Chair',
    image: 'img/board-members26/nina.webp' },
  { name: 'Diya', 
    role: 'Treasurer',
    image: 'img/board-members26/diya.webp' },
  {
    name: 'Ambreal',
    image: 'img/board-members26/ambreal.webp',
    role: 'Secretary & Webmaster',
    caption: 'I love watching movies and riding rollercoasters!\n2nd year CSE from Toronto, Canada.'
  },
  
  
  
  
  
  {
    name: 'Jolie',
    image: 'img/board-members26/jolie.webp',
    role: 'Events Coordinator',
    caption: 'In my free time, I enjoy trying new restaurants and cafes, playing tennis, and crafting.'
  },

];
var mailgunAuth = process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN ? {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
} : null;
var mailTransport = mailgunAuth ? nodemailer.createTransport(mg(mailgunAuth)) : null;
var contactRateLimit = new Map();
var contactRateLimitCleanupAt = 0;
var CONTACT_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
var CONTACT_RATE_LIMIT_MAX_ENTRIES = 5000;

function pruneContactRateLimit(now) {
  if (now < contactRateLimitCleanupAt) {
    return;
  }

  contactRateLimit.forEach(function (record, ip) {
    if (now - record.startedAt > CONTACT_RATE_LIMIT_WINDOW_MS) {
      contactRateLimit.delete(ip);
    }
  });
  contactRateLimitCleanupAt = now + CONTACT_RATE_LIMIT_WINDOW_MS;
}

function isContactRateLimited(ip) {
  var now = Date.now();
  var record = contactRateLimit.get(ip);

  if (record && now - record.startedAt <= CONTACT_RATE_LIMIT_WINDOW_MS) {
    record.count += 1;
    return record.count > 5;
  }

  pruneContactRateLimit(now);
  if (!record && contactRateLimit.size >= CONTACT_RATE_LIMIT_MAX_ENTRIES) {
    contactRateLimit.delete(contactRateLimit.keys().next().value);
  }

  if (!record || now - record.startedAt > CONTACT_RATE_LIMIT_WINDOW_MS) {
    contactRateLimit.set(ip, { startedAt: now, count: 1 });
    return false;
  }
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

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: process.env.VERCEL ? '1h' : 0
}));

// Static assets are handled above, leaving this log focused on page and API requests.
app.use(logger(process.env.VERCEL ? 'combined' : 'dev'));

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

router.get("/",function(req,res){
    res.render('index');
});

router.get("/mission",function(req,res){
    res.render('mission');
});

router.get("/team",function(req,res){
    res.render('team', { boardMembers: boardMembers });
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
router.post("/contact", express.urlencoded({ extended: false, limit: '20kb' }), express.json({ limit: '20kb' }), function (req, res) {
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

  if (!mailTransport) {
    return res.status(503).send('Contact form is not configured.');
  }

  var mailOptions = {
    from: name +  " <" + email + ">",
    to: 'tnkhan8042@gmail.com',
    subject: 'Message from Website Contact page',
    text: comment,
    err: isError

  };
  mailTransport.sendMail(mailOptions, function (error, info) {
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
