import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import BadGatewayException from '../exceptions/badGatewayException.js';
import { HttpStatus } from '../constants.js';

describe('BadGatewayException class', () => {
  const statusCode = HttpStatus.BAD_GATEWAY;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a BadGatewayException with custom message and error', () => {
    const exception = new BadGatewayException('Some Error', 'Invalid Username');

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a BadGatewayException object matching with {defaultError}', () => {
    const exception = new BadGatewayException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
