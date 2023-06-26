import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.REQUEST_TIMEOUT;

/**
 * Represents a Request Timeout exception.
 * Extends the HttpException class.
 */
export default class RequestTimeoutException extends HttpException {
  /**
   * Creates a new instance of RequestTimeoutException.
   * @param {string} [message] - The error message. Defaults to the corresponding HTTP status message.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
