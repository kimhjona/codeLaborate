const Users = require('./../models/UserModel');

const UserController = {
  // register user, if username already exists send 'already exists' message
  signup(req, res) {
    Users.find({
      where: { username: req.body.username },
    })
    .then((user) => {
      if (user) res.send({ message: 'Username already exists', view: 'signup' });
      else {
        Users.create({
          username: req.body.username,
          password: req.body.password,
          name: req.body.name,
        })
        .then((user2) => {
          res.send({ message: `New user, ${user2} created!`, view: 'login' });
        });
      }
    });
  },
  // login user, if user or password is invalid, send 'invalid' message
  login(req, res) {
    Users.findOne({
      where: { username: req.body.username },
    }).then((user) => {
      if (!user) {
        res.send({ view: 'login', message: 'Invalid Login' });
      } else if (user.password === req.body.password) {
        res.send({ view: 'dash' });
      } else {
        res.send({ view: 'login', message: 'Invalid Login' });
      }
    });
  },
};

module.exports = UserController;
