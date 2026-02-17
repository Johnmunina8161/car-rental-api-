const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const auth = require('../middleware/authJWT');

// GET all users (Protected)
router.get('/', auth, usersController.getAll);

// GET single user (Protected)
router.get('/:id', auth, usersController.getOne);

// DELETE user (Protected)
router.delete('/:id', auth, usersController.remove);

module.exports = router;
