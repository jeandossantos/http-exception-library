import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import NotAcceptableException from '../exceptions/notAcceptableException.js';
import { HttpStatus } from '../constants.js';

describe('NotAcceptableException class', () => {
  const statusCode = HttpStatus.NOT_ACCEPTABLE;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a NotAcceptableException with custom message and error', () => {
    const exception = new NotAcceptableException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a NotAcceptableException object matching with {defaultError}', () => {
    const exception = new NotAcceptableException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
