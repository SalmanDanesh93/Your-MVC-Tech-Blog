// Connects to express, session, & exphbs libraries
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

// Connects app to express()
const app = express();
//Sets port for server to 3001
const PORT = process.env.PORT || 3001;

//Connects sequelize with config and initiates store sequelize
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Creates session and variables for db
const sess = {
  secret: 'fonziiscute',
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

// sets app.use to start session
app.use(session(sess));
// Creates hbs const for event to create helpers
const hbs = exphbs.create({ helpers });

// Initiates app.engine with handlebars and hbs
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Calls on express and .json  for db
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// Creates connection for server that is being listened on.
app.listen(PORT, () => {
  console.log(`Your App is active on port ${PORT}`);
  sequelize.sync({ force: false });
})

