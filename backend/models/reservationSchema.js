import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, 'First name must contain at least 3 characters!'],
    maxLength: [30, 'First Name cannot exceed 30 characters!'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, 'Last name must contain at least 3 characters!'],
    maxLength: [30, 'Last Name cannot exceed 30 characters!'],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Provide a valid Email!'],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{11}$/.test(v); // Validates that the phone number is exactly 11 digits.
      },
      message: (props) =>
        `${props.value} is not a valid phone number! It should be 11 digits long.`,
    },
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date, // Changed from String to Date for better validation
    required: true,
  },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
