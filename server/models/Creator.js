const mongoose = require('mongoose');

const EquityRequestSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  equity: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const CreatorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  expertise: { type: String, required: true },
  portfolio: { type: String, required: true },
  instagram: { type: String, required: true },
  twitter: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  equityRequests: [EquityRequestSchema],
});

module.exports = mongoose.model('Creator', CreatorSchema);

