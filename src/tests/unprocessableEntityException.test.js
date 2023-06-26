import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import UnprocessableEntityException from '../exceptions/unprocessableEntityException.js';
import { HttpStatus } from '../constants.js';

describe('UnprocessableEntityException class', () => {
  const statusCode = HttpStatus.UNPROCESSABLE_ENTITY;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a UnprocessableEntityException with custom message and error', () => {
    const exception = new UnprocessableEntityException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a UnprocessableEntityException object matching with {defaultError}', () => {
    const exception = new UnprocessableEntityException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
