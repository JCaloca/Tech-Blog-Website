// If user is not logged in redirect user to the login page
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If user is logged in called execute the route function
    next();
  }
};

module.exports = withAuth;
