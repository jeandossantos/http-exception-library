import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import NotFoundException from '../exceptions/notFoundException.js';
import { HttpStatus } from '../constants.js';

describe('NotFoundException class', () => {
  const statusCode = HttpStatus.NOT_FOUND;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a NotFoundException with custom message and error', () => {
    const exception = new NotFoundException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a NotFoundException object matching with {defaultError}', () => {
    const exception = new NotFoundException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
