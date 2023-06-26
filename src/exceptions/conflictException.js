import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.CONFLICT;

/**
 * Represents a ConflictException, which is an HTTP exception indicating a conflict.
 * Extends the HttpException class.
 */
export default class ConflictException extends HttpException {
  /**
   * Creates a new instance of ConflictException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
