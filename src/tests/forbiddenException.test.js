import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import ForbiddenException from '../exceptions/forbiddenException.js';
import { HttpStatus } from '../constants.js';

describe('ForbiddenException class', () => {
  const statusCode = HttpStatus.FORBIDDEN;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a ForbiddenException with custom message and error', () => {
    const exception = new ForbiddenException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a ForbiddenException object matching with {defaultError}', () => {
    const exception = new ForbiddenException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
