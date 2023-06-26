import assert from 'node:assert';
import { test, describe } from 'node:test';
import { STATUS_CODES } from 'node:http';

import GatewayTimeoutException from '../exceptions/gatewayTimeoutException.js';
import { HttpStatus } from '../constants.js';

describe('GatewayTimeoutException class', () => {
  const statusCode = HttpStatus.GATEWAY_TIMEOUT;

  const defaultError = {
    message: STATUS_CODES[statusCode],
    statusCode,
    error: 'USER_NOT_FOUND',
  };

  test('Should create a GatewayTimeoutException with custom message and error', () => {
    const exception = new GatewayTimeoutException(
      'Some Error',
      'Invalid Username'
    );

    assert.deepStrictEqual(exception.message, 'Some Error');
    assert.deepStrictEqual(exception.error, 'Invalid Username');
  });
  test('Should create a GatewayTimeoutException object matching with {defaultError}', () => {
    const exception = new GatewayTimeoutException();

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });
});
