import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return v.length >= 3 && v.length <= 20;
      },
      message: (props) => `${props.value} is not a valid username!`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/.test(
          v,
        );
      },
      message: (props) => `${props.value} is not a valid password!`,
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
});

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
}
