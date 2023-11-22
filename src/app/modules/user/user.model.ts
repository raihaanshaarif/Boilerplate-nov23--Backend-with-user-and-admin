import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    role: { type: String, enum: ['buyer', 'seller'], required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    address: { type: String, required: true },
    budget: { type: Number, default: 0, required: true },
    income: { type: Number },
  },
  {
    timestamps: true,
    //To create id without underscore
    toJSON: {
      virtuals: true,
    },
  },
);
export const User = model<IUser, UserModel>('User', userSchema);
