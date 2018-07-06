import Joi from 'joi';
import ExceptionFilter from '../exceptions/validation.exception';

const validateMiddlware = (schema, target) => {
    return async (ctx, next) => {
        const { error } = Joi.validate(ctx.request[target], schema);
        if(error) {
            throw new ExceptionFilter(error);
        } else {
            return next();
        }
    };
};


export default validateMiddlware;