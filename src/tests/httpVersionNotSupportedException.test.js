import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import HttpVersionNotSupportedException from '../exceptions/httpVersionNotSupportedException.js';
import { HttpStatus } from '../constants.js';

describe('HttpVersionNotSupportedException class', () => {
  const statusCode = HttpStatus.HTTP_VERSION_NOT_SUPPORTED;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a HttpVersionNotSupportedException with custom message and error', () => {
    const exception = new HttpVersionNotSupportedException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a HttpVersionNotSupportedException object matching with {defaultError}', () => {
    const exception = new HttpVersionNotSupportedException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
