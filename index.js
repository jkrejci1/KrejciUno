//SERVER SIDE JAVASCRIPT
//Password Generator Final Project
//MADE SOME OTHER JS FILES THAT INCLUDE INFORMATION FOR MIDDLEWARE, A CONTROLLER, AND THE AUTH ROUTES

//This will be running on port 8080 if you want to test locally!!

//Need requirements below in order for us to use easier functionality
const express = require('express')
const app = express()
var url = require('url');
const port = process.env.PORT || 8080
//Use npm install cookie-parser to install cookie parser and use it with this
const cookieParser = require('cookie-parser')
//Used as a requirement to only show pages or page details according to this
/** 
const { requireAuth, checkUser } = require('./middleware/authMiddleware')

//Be able to access the Schema for saving passwords
const userSchema = require('./models/user');
const { db } = require('./models/user');

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static('static'))
app.use(express.json()) //Takes data passed by user and attaches to request object in the handler
app.use(cookieParser()) //Now we can access cookie methods
*/

//Set view for ejs
app.set('view engine', 'ejs')
app.use(express.static('views'))


/*

	.then((result) => app.listen(3000))
	.catch((err) => console.log(err))
*/


//Generating the home page
app.get('/', (request, response) => {
	response.render('index.ejs')
})

//Generating the game page
app.get('/game', (request, response) => {
	response.render('game.ejs')
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

 
app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
