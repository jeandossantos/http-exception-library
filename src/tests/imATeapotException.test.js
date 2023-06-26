import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import ImATeapotException from '../exceptions/imATeapotException.js';
import { HttpStatus } from '../constants.js';

describe('ImATeapotException class', () => {
  const statusCode = HttpStatus["I'M_A_TEAPOT"];

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a ImATeapotException with custom message and error', () => {
    const exception = new ImATeapotException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a ImATeapotException object matching with {defaultError}', () => {
    const exception = new ImATeapotException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
