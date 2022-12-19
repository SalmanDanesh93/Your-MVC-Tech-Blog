// Creates authentication for /login
const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

// exports authenticated login info 
module.exports = withAuth;


