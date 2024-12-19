import Joi from "joi";

export const wishListSchema = Joi.object({
  items: Joi.string().required(),
});

export const wishListStatusSchema = Joi.object({
  isFulfield: Joi.boolean().required(),
});
