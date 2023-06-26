import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import UnauthorizedException from '../exceptions/unauthorizedException.js';
import { HttpStatus } from '../constants.js';

describe('UnauthorizedException class', () => {
  const statusCode = HttpStatus.UNAUTHORIZED;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a UnauthorizedException with custom message and error', () => {
    const exception = new UnauthorizedException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a UnauthorizedException object matching with {defaultError}', () => {
    const exception = new UnauthorizedException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
