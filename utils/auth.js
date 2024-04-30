const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route whre they can either login if already a user or signup in case of a new user
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
