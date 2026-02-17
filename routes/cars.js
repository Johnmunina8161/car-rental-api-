const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');
const { validateCar } = require('../middleware/validate');
const authJWT = require('../middleware/authJWT');

// Public routes
router.get('/', carsController.getAll);
router.get('/:id', carsController.getOne);

// Protected routes
router.post('/', authJWT, validateCar, carsController.create);
router.put('/:id', authJWT, validateCar, carsController.update);
router.delete('/:id', authJWT, carsController.remove);

module.exports = router;
