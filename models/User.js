const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User schema definition
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Pre-save hook to hash the password before saving it
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Skip hashing if the password is not modified
    this.password = await bcrypt.hash(this.password, 10); // Hash the password with 10 rounds
    next();
});

// Method to compare password (to be used in login)
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password); // Compare entered password with the hashed password
};

module.exports = mongoose.model('User', UserSchema);
