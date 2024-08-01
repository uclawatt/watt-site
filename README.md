# IEEE WATT Website

## Overview
IEEE WATT's website!
Check out our website live at [www.ieeewatt.ucla.edu](www.ieeewatt.ucla.edu) :) 

## Built With
- [Node.js](https://nodejs.org/en/): JavaScript run-time environment that executes JavaScript server-side code.
- [Handlebars](https://handlebarsjs.com/): HTML templating engine for static rendering.

## Setting up the environment
- Clone this repository.
  - `git clone https://github.com/tanzeelak/watt-site.git`
- Install yarn, a reliable package manager for code. 
  - `brew install yarn`
  - Read more about Yarn commands [here](https://yarnpkg.com/lang/en/docs/cli/global/).
- Install nodemon, a monitor for changes in source code and automatically restarts when change is detected. 
  - `yarn global add nodemon`
- Install all packages listed in the package.json.
  - `yarn install`

## Run the server locally
- Run sass watcher in one terminal. Sass watches the .scss files for changes and outputs the css version into the .css files. 
  - `sass public/css/style.scss public/css/style.css  --watch`
- Run nodemon in another terminal tab. Nodemon watches for any changes in the .js files and updates the server correspondingly.
  - `nodemon`
  - Check the server at [http://localhost:5000/](localhost:5000).
  - To restart the server without exiting nodemon, type  `rs`. 

