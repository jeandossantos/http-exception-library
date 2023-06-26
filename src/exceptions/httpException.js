import { HttpStatus } from '../constants.js';

const STATUS_CODE_RANGE = {
  start: 400,
  end: 511,
};

export default class HttpException extends Error {
  constructor(message, statusCode = HttpStatus.INTERNAL_SERVER_ERROR, error) {
    super(message);
    this.validateHttpExceptionProperties(message, statusCode);

    this.name = this.constructor.name;
    this.statusCode = statusCode;

    if (error) this.error = error;
  }

  validateHttpExceptionProperties(message, statusCode) {
    if (!this.isStatusCodeValid(statusCode)) {
      throw new Error(
        'HttpException property statusCode must be between 400 and 511.'
      );
    }

    console.log(message);

    if (!message) {
      throw Error('HttpException property message is required.');
    }

    if (typeof message !== 'string') {
      throw Error('HttpException message property must be a valid string.');
    }
  }

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
