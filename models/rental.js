const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  startDate: Date,
  endDate: Date,
  totalPrice: Number
}, { timestamps: true });

module.exports = mongoose.model('Rental', rentalSchema);
