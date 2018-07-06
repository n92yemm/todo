import HttpStatus from 'http-status-codes';

export default class ValidationException extends Error {
    constructor(msg) {
        super();
        this.status = HttpStatus.BAD_REQUEST;
        this.body = msg.details;
    }
}