const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  birthday: Date,
  location: String,
  languages: [String],
  email: String,
  phone: String,
  experience: [{
    employer: String,
    title: String,
    dates: String,
    roles: String,
  }],
  skills: [String],
  links: {
    messaging: [{ platform: String, url: String }],
    social: [{ platform: String, url: String }],
    work: [{ label: String, url: String }],
    other: [{ label: String, url: String }],
  },
  profilePicture: String,
});

module.exports = mongoose.model('Profile', profileSchema);