##Requirements
Nodemon and Minifiers.
`npm install nodemon -g`
`npm install uglify-js -g`
`npm install uglifycss -g`

##How to Run:
Minify the javascript.
`uglifyjs public/js/main.js --output public/js/main.min.js`
Minify the css.
`uglifycss public/css/style.css > public/css/style.min.css`
Run the server.
`nodemon`
