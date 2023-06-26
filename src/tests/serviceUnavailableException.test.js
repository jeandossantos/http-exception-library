import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import ServiceUnavailableException from '../exceptions/serviceUnavailableException.js';
import { HttpStatus } from '../constants.js';

describe('ServiceUnavailableException class', () => {
  const statusCode = HttpStatus.SERVICE_UNAVAILABLE;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a ServiceUnavailableException with custom message and error', () => {
    const exception = new ServiceUnavailableException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a ServiceUnavailableException object matching with {defaultError}', () => {
    const exception = new ServiceUnavailableException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
