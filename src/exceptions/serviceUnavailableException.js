import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.SERVICE_UNAVAILABLE;

/**
 * Represents a ServiceUnavailableException, which is an HTTP exception indicating that the server is currently unable to handle the request due to a temporary overload or maintenance.
 * Extends the HttpException class.
 */
export default class ServiceUnavailableException extends HttpException {
  /**
   * Creates a new instance of ServiceUnavailableException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
