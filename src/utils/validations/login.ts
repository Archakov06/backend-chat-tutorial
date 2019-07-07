import { check } from 'express-validator';

export default [check('email').isEmail(), check('password').isLength({ min: 3 })];
