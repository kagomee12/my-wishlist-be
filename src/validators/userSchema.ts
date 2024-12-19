import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  gender: Joi.string().valid("MALE", "FEMALE").required(),
});
