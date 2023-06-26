import { STATUS_CODES } from 'node:http';

import HttpException from './httpException.js';
import { HttpStatus } from '../constants.js';

const statusCode = HttpStatus.NOT_FOUND;

export default class NotFoundException extends HttpException {
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
