import assert from 'node:assert';
import { test, describe } from 'node:test';
import HttpException from '../exceptions/httpException.js';

describe('HttpException class', () => {
  const defaultError = {
    message: 'Something went wrong.',
    statusCode: 500,
    error: 'USER_NOT_FOUND',
  };

  test('Should not create a HttpException object without a message', () => {
    assert.throws(() => new HttpException(), {
      message: 'HttpException property message is required.',
    });
  });

  test('Should not create a HttpException object if message is not a string', () => {
    assert.throws(() => new HttpException({}), {
      message: 'HttpException message property must be a valid string.',
    });
  });

  test('Should not create a HttpException object with a invalid statusCode', () => {
    assert.throws(() => new HttpException(defaultError.message, 512), {
      message: 'HttpException property statusCode must be between 400 and 511.',
    });

    assert.throws(() => new HttpException(defaultError.message, 309), {
      message: 'HttpException property statusCode must be between 400 and 511.',
    });
  });

  test('Should create a HttpException object without a statusCode', () => {
    const exception = new HttpException(defaultError.message);

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });

  test('Should create a HttpException object without a error', () => {
    const exception = new HttpException(defaultError.message, 400);

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, 400);
    assert.deepStrictEqual(Reflect.has(exception, 'error'), false);
  });

  test('Should create a HttpException object with message, statusCode and error properties', () => {
    const exception = new HttpException(
      defaultError.message,
      defaultError.statusCode,
      defaultError.error
    );

    assert.deepStrictEqual(exception.message, defaultError.message);
    assert.deepStrictEqual(exception.statusCode, defaultError.statusCode);
    assert.deepStrictEqual(exception.error, defaultError.error);
  });
});
