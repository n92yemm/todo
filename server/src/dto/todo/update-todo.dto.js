import Joi from 'joi';
import validateMiddlware from '../../middlwares/validate.middlware';

const schema = Joi.object().keys({
    text: Joi.string().min(1).required(),
    checked: Joi.boolean(),
});

export default validateMiddlware(schema, 'body');