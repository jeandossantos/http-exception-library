import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import InternalServerErrorException from '../exceptions/internalServerErrorException.js';
import { HttpStatus } from '../constants.js';

describe('InternalServerErrorException class', () => {
  const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a InternalServerErrorException with custom message and error', () => {
    const exception = new InternalServerErrorException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a InternalServerErrorException object matching with {defaultError}', () => {
    const exception = new InternalServerErrorException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
