import Joi from 'joi';

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required() });

const product = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required() });

const user = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required() });

export default {
  login,
  product,
  user,
};