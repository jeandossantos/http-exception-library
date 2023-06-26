import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.UNAUTHORIZED;

/**
 * Represents an UnauthorizedException, which is an HTTP exception indicating that the request requires user authentication or the authentication has failed.
 * Extends the HttpException class.
 */
export default class UnauthorizedException extends HttpException {
  /**
   * Creates a new instance of UnauthorizedException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
