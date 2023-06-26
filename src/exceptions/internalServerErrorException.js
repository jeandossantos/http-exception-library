import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

/**
 * Represents an InternalServerErrorException, which is an HTTP exception indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.
 * Extends the HttpException class.
 */
export default class InternalServerErrorException extends HttpException {
  /**
   * Creates a new instance of InternalServerErrorException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
