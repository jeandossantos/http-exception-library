import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import RequestTimeoutException from '../exceptions/requestTimeoutException.js';
import { HttpStatus } from '../constants.js';

describe('RequestTimeoutException class', () => {
  const statusCode = HttpStatus.REQUEST_TIMEOUT;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a RequestTimeoutException with custom message and error', () => {
    const exception = new RequestTimeoutException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a RequestTimeoutException object matching with {defaultError}', () => {
    const exception = new RequestTimeoutException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
