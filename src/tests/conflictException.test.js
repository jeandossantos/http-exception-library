import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import ConflictException from '../exceptions/conflictException.js';
import { HttpStatus } from '../constants.js';

describe('ConflictException class', () => {
  const statusCode = HttpStatus.CONFLICT;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a ConflictException with custom message and error', () => {
    const exception = new ConflictException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a ConflictException object matching with {defaultError}', () => {
    const exception = new ConflictException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
