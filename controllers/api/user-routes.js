const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    // Create newUser const and sets User variable for when user inputs req.body.username & req.body.password
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    // Saves user input data to newUser
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      // sends newUser to json
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // Searches for existing User by username
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    // If error, sends status 400 error
    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
    // Validates password for user
    const validPassword = user.checkPassword(req.body.password);
    // If error, sends status 400 error
    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
// Saves User data 
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

// Creates post function for /logout
router.post('/logout', (req, res) => {
  // If user is logged in, the connection is destroyed()
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
