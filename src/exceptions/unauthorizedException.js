import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.UNAUTHORIZED;

export default class UnauthorizedException extends HttpException {
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
