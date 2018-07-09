import Joi from 'joi';
import validateMiddlware from '../../middlwares/validate.middlware';

const schema = Joi.object().keys({
    text: Joi.string().min(1).required(),
    checked: Joi.boolean(),
    _id: Joi.string().min(1).required(),
    __v: Joi.number().required()
});

export default validateMiddlware(schema, 'body');