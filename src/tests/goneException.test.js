import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import GoneException from '../exceptions/goneException.js';
import { HttpStatus } from '../constants.js';

describe('GoneException class', () => {
  const statusCode = HttpStatus.GONE;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a GoneException with custom message and error', () => {
    const exception = new GoneException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a GoneException object matching with {defaultError}', () => {
    const exception = new GoneException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
