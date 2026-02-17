exports.validateCar = (req, res, next) => {
  const { make, model, year, pricePerDay } = req.body;
  if (!make || !model || !year || !pricePerDay)
    return res.status(400).json({ message: 'All car fields are required' });
  next();
};

exports.validateLocation = (req, res, next) => {
  const { name, address, city, state } = req.body;
  if (!name || !address || !city || !state)
    return res.status(400).json({ message: 'All location fields are required' });
  next();
};

exports.validateRental = (req, res, next) => {
  const { userId, carId, locationId, startDate, endDate, totalPrice } = req.body;
  if (!userId || !carId || !locationId || !startDate || !endDate || !totalPrice)
    return res.status(400).json({ message: 'All rental fields are required' });
  next();
};
