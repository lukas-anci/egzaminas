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

router.delete('/api/user/delete/:id', async (req, res) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit User
router.put('/api/user/edit/:id', async (req, res) => {
  try {
    const updateResult = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updateResult);
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
