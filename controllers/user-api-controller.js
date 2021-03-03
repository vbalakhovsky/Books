const db = require('../models');
module.exports = (app) => {
  
  app.get('/reference', async (req, res) => {
    try{
      // Get A Noun
    const randomNoun = await  db.noun.findAll({
          order: db.Sequelize.literal('rand()'),
          limit: 1
     })
     // Get an Adjective
     const randomAdjective = await db.adjective.findAll({
         order: db.Sequelize.literal('rand()'),
         limit: 1
     })
     const result = {noun: randomNoun[0].noun, adjective: randomAdjective[0].adjective};
     // Send to the view
     res.render('reference', {result});
    }catch(err){  
      console.log(err);
    }
  });

  app.get('/api/users', (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Post],
    }).then((dbUser) => res.json(dbUser));
  });

  app.get('/api/users/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbUser) => res.json(dbUser));
  });

  app.post('/api/users', (req, res) => {
    db.User.create(req.body).then((dbUser) => res.json(dbUser));
  });

  app.delete('/api/users/:id', (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};
