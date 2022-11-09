// Dependencies for router and database
const router = require("express").Router();
const sequelize = require("../config/connection");
// Requiring database models
const { User, Post, Comment } = require("../models");
// Requiring middleware to redirect user to login page if not logged in
const withAuth = require("../utils/auth");

// Route to the dashboard if user is logged in else route to login page
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "post_content" ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route for editing a post
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "post_content" ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbPostData => {
     if (dbPostData) {
      const post = dbPostData.get({ plain: true });
      
      res.render('edit-post', {
        post,
        loggedIn: true
      })
     } else {
        res.status(404).end();
     }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
