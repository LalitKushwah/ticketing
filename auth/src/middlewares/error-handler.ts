import { Request, Response, NextFunction } from "express"
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-errors';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        return res.status(err.statusCode).send(err.serializeErrors());
    }
    if (err instanceof DatabaseConnectionError) {
        return res.status(err.statusCode).send(err.serializeErrors());
    }

    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
    });
}