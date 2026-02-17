const express = require('express');
const router = express.Router();

const locationsController = require('../controllers/locations');
const auth = require('../middleware/authJWT');
const { validateLocation } = require('../middleware/validate');

// GET all locations
router.get('/', locationsController.getAll);

// GET single location
router.get('/:id', locationsController.getOne);

// CREATE location (Protected)
router.post('/', auth, validateLocation, locationsController.create);

// UPDATE location (Protected)
router.put('/:id', auth, validateLocation, locationsController.update);

// DELETE location (Protected)
router.delete('/:id', auth, locationsController.remove);

module.exports = router;
