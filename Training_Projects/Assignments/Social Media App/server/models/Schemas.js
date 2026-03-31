const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    bio:Joi.string().min(0).max(1000),
    image_url:Joi.string().min(0).max(255)
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
})

const tempUserSchema = Joi.object({
    email: Joi.string().email().required(),
})

const changePassSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    otp: Joi.number().max(9999).min(1000).required()
})
const postSchema = Joi.object({
    content: Joi.string().min(0).max(1000),
    image_url:Joi.string().max(255).required()
})

module.exports = {registerSchema,loginSchema,postSchema, tempUserSchema, changePassSchema};