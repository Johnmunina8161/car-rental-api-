const express = require('express');
const router = express.Router();

const rentalsController = require('../controllers/rentals');
const auth = require('../middleware/authJWT');
const { validateRental } = require('../middleware/validate');

// GET all rentals (Protected)
router.get('/', auth, rentalsController.getAll);

// GET single rental (Protected)
router.get('/:id', auth, rentalsController.getOne);

// CREATE rental (Protected)
router.post('/', auth, validateRental, rentalsController.create);

// UPDATE rental (Protected)
router.put('/:id', auth, validateRental, rentalsController.update);

// DELETE rental (Protected)
router.delete('/:id', auth, rentalsController.remove);

module.exports = router;
