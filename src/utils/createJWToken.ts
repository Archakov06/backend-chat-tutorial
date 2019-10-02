import jwt from 'jsonwebtoken';
import { reduce } from 'lodash';
import { IUser } from '../models/User';

interface ILoginData {
  email: string;
  password: string;
}

export default (user: ILoginData) => {
  let token = jwt.sign(
    {
      data: reduce(
        user,
        (result: any, value: string, key: string) => {
          if (key !== 'password') {
            result[key] = value;
          }
          return result;
        },
        {},
      ),
    },
    process.env.JWT_SECRET || '',
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: 'HS256',
    },
  );

  return token;
};
