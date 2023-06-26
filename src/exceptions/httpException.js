import { HttpStatus } from '../constants.js';

const STATUS_CODE_RANGE = {
  start: 400,
  end: 511,
};
/**
 * Represents an HTTP exception.
 * Extends the Error class.
 */
export default class HttpException extends Error {
  /**
   * Creates a new instance of HttpException.
   * @param {string} message - The error message.
   * @param {number} [statusCode=500] - The HTTP status code associated with the exception. Defaults to 500 (Internal Server Error).
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   * @throws {Error} Throws an error if the statusCode is outside the range of 400-511.
   * @throws {Error} Throws an error if the message is not provided or is not a valid string.
   */
  constructor(message, statusCode = HttpStatus.INTERNAL_SERVER_ERROR, error) {
    super(message);
    this.validateHttpExceptionProperties(message, statusCode);

    this.name = this.constructor.name;
    this.statusCode = statusCode;

    if (error) this.error = error;
  }

  /**
   * Validates the HTTP exception properties.
   * @param {string} message - The error message.
   * @param {number} statusCode - The HTTP status code.
   * @throws {Error} Throws an error if the statusCode is outside the range of 400-511.
   * @throws {Error} Throws an error if the message is not provided or is not a valid string.
   * @private
   */
  validateHttpExceptionProperties(message, statusCode) {
    if (!this.isStatusCodeValid(statusCode)) {
      throw new Error(
        'HttpException property statusCode must be between 400 and 511.'
      );
    }

    if (!message) {
      throw Error('HttpException property message is required.');
    }

    if (typeof message !== 'string') {
      throw Error('HttpException message property must be a valid string.');
    }
  }

  /**
   * Checks if the provided HTTP status code is within the valid range.
   * @param {number} statusCode - The HTTP status code.
   * @returns {boolean} Returns true if the status code is within the range of 400-511, otherwise false.
   * @private
   */
  isStatusCodeValid(statusCode) {
    if (statusCode < STATUS_CODE_RANGE.start) {
      return false;
    }

    if (statusCode > STATUS_CODE_RANGE.end) {
      return false;
    }

    return true;
  }
}
