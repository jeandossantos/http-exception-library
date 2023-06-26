import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.BAD_GATEWAY;

/**
 * Represents a BadGatewayException, which is an HTTP exception indicating that the server received an invalid response from an upstream server.
 * Extends the HttpException class.
 */
export default class BadGatewayException extends HttpException {
  /**
   * Creates a new instance of BadGatewayException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
