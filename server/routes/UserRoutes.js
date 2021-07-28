const express = require('express');
const UserModel = require('../models/User');
const router = express.Router();

// create new User

router.post('/api/user/new', async (req, res) => {
  const newUser = new UserModel(req.body);

  try {
    const createNewUser = await newUser.save();
    console.log('createNewUser', createNewUser);
    res.json({ success: true });
  } catch (err) {
    res.json(err);
  }
});

// get all Users

router.get('/api/user', async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    res.json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete User

router.delete('api/user/:id', async (req, res) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
