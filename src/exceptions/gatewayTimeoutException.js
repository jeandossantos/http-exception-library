import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.GATEWAY_TIMEOUT;

/**
 * Represents a GatewayTimeoutException, which is an HTTP exception indicating that the server did not receive a timely response from an upstream server.
 * Extends the HttpException class.
 */
export default class GatewayTimeoutException extends HttpException {
  /**
   * Creates a new instance of GatewayTimeoutException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
