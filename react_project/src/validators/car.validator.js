import Joi from 'joi';

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZІіЇїЄє]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки символи від 1 до 20',
    }),
    price: Joi.number().min(1).max(1000000).required(),
    year: Joi.number().min(1995).max(new Date().getFullYear()).required(),
});

export {carValidator}