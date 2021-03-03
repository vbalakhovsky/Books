// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/home.html'))
  );

  app.get('/home', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/home.html'))
  );

  app.get('/clubs', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/clubs.html'))
  );

  app.get('/posts', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/assets/posts.html'))
  );

  app.get('/users', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/users.html'))
  );
}
