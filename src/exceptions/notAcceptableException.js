import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.NOT_ACCEPTABLE;

/**
 * Represents a NotAcceptableException, which is an HTTP exception indicating that the server cannot produce a response matching the list of acceptable values defined in the request's headers.
 * Extends the HttpException class.
 */
export default class NotAcceptableException extends HttpException {
  /**
   * Creates a new instance of NotAcceptableException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
