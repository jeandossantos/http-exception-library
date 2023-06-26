import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import MethodNotAllowedException from '../exceptions/methodNotAllowedException.js';
import { HttpStatus } from '../constants.js';

describe('MethodNotAllowedException class', () => {
  const statusCode = HttpStatus.METHOD_NOT_ALLOWED;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a MethodNotAllowedException with custom message and error', () => {
    const exception = new MethodNotAllowedException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a MethodNotAllowedException object matching with {defaultError}', () => {
    const exception = new MethodNotAllowedException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
