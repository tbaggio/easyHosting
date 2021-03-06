const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'basic',
      enum: ["basic", "supervisor", "admin"]
    },
    coins: {
      type: Number,
      default: 0,
      min: 0,
      max: 9999
    },
    accessToken: {
      type: String
    },
    servers: {
      serverID: {
        default: 0,
        type: String,
      },
    },
});

const User = mongoose.model('user', UserSchema)

module.exports = User;
