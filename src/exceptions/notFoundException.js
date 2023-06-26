import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.NOT_FOUND;

/**
 * Represents a NotFoundException, which is an HTTP exception indicating that the requested resource was not found on the server.
 * Extends the HttpException class.
 */
export default class NotFoundException extends HttpException {
  /**
   * Creates a new instance of NotFoundException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
