import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import NotImplementedException from '../exceptions/notImplementedException.js';
import { HttpStatus } from '../constants.js';

describe('NotImplementedException class', () => {
  const statusCode = HttpStatus.NOT_IMPLEMENTED;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a NotImplementedException with custom message and error', () => {
    const exception = new NotImplementedException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a NotImplementedException object matching with {defaultError}', () => {
    const exception = new NotImplementedException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
