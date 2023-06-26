import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus["I'M_A_TEAPOT"];

/**
 * Represents an ImATeapotException, which is an HTTP exception indicating that the server refuses to brew coffee because it is a teapot.
 * Extends the HttpException class.
 */
export default class ImATeapotException extends HttpException {
  /**
   * Creates a new instance of ImATeapotException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
