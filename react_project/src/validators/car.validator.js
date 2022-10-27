import Joi from 'joi';

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-Zа-яА-яёЁІіЇї]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20'
    }),
    price: Joi.number().min(100).max(1000000).required(),
    year: Joi.number().min(1995).max(new Date().getFullYear()).required(),
});

export {carValidator}