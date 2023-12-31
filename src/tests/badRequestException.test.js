import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import BadRequestException from '../exceptions/badRequestException.js';
import { HttpStatus } from '../constants.js';

describe('BadRequestException class', () => {
  const statusCode = HttpStatus.BAD_REQUEST;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a BadRequestException with custom message and error', () => {
    const exception = new BadRequestException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a BadRequestException object matching with {defaultError}', () => {
    const exception = new BadRequestException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
