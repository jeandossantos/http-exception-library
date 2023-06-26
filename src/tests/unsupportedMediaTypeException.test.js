import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import UnsupportedMediaTypeException from '../exceptions/unsupportedMediaTypeException.js';
import { HttpStatus } from '../constants.js';

describe('UnsupportedMediaTypeException class', () => {
  const statusCode = HttpStatus.UNSUPPORTED_MEDIA_TYPE;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a UnsupportedMediaTypeException with custom message and error', () => {
    const exception = new UnsupportedMediaTypeException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a UnsupportedMediaTypeException object matching with {defaultError}', () => {
    const exception = new UnsupportedMediaTypeException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
