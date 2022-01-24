const User = require("../model/User")

const addUser = (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then(user => res.send(user))
    .catch(error => res.send(error))
};

const getAllUsers = (req, res) => {
  User
    .find({})
    .then(users => res.json(users))
    .catch(error => res.send(error))
};

const getUserById = (req, res) => {
  User
    .find({ name: req.params.name })
    .then(users => res.send(users))
    .catch(error => res.send(error))
}

module.exports = { addUser, getAllUsers, getUserById };
