const Rental = require('../models/rental');

// GET ALL RENTALS
exports.getAll = async (req, res) => {
  try {
    const rentals = await Rental.find()
      .populate('userId')
      .populate('carId')
      .populate('locationId');

    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE RENTAL
exports.getOne = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id)
      .populate('userId')
      .populate('carId')
      .populate('locationId');

    if (!rental) {
      return res.status(404).json({ message: "Rental not found" });
    }

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE RENTAL
exports.create = async (req, res) => {
  try {
    const newRental = await Rental.create(req.body);
    res.status(201).json(newRental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE RENTAL
exports.update = async (req, res) => {
  try {
    const updatedRental = await Rental.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedRental) {
      return res.status(404).json({ message: "Rental not found" });
    }

    res.status(200).json(updatedRental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE RENTAL
exports.remove = async (req, res) => {
  try {
    const deletedRental = await Rental.findByIdAndDelete(req.params.id);

    if (!deletedRental) {
      return res.status(404).json({ message: "Rental not found" });
    }

    res.status(200).json({ message: "Rental deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
