// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {  
  app.get('/posts', (req, res) => {
    res.render('posts');
  });

  app.get('/new-post', (req, res) =>{
     res.render('new-post');
  });

  app.post('/submit-post', (req, res) => { 
      console.log("SUBMITTED POST==>", req.body);

      // Save post to DB
      db.Post.create(req.body).then((dbPost) =>{

      //Redirect to Post page
      res.redirect('/posts');
      });

  });

  // Get route for retrieving a single post
  app.get('/posts/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id,
      }
    }).then((dbPost) => res.json(dbPost));
  });

  // POST route for saving a new post
  app.post('/api/posts', (req, res) => {
    db.Post.create(req.body).then((dbPost) => res.json(dbPost));
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

  // PUT route for updating posts
  app.put('/api/posts', (req, res) => {
    db.Post.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
};

