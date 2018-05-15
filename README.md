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
- Run sass watcher in one terminal.
  - `sass --watch .`
- Run nodemon in another terminal tab.  
  - `nodemon`
  - Check the server at (localhost:5000)[http://localhost:5000/].