import Joi from 'joi';

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required() });

const product = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required() });

export default {
  login,
  product,
};