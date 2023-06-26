# http exception library
## Features

- Handle common HTTP error scenarios with dedicated exception classes.
- Generate error responses with customizable error messages and status codes.
- Improve code readability and maintainability by encapsulating error logic in reusable classes.

## Install

```bash
npm i http-exception-library
```

## Usage

You can use it along with Express defining a custom error handler to replace the Express' default error handler like that:
```js
import { STATUS_CODES } from 'http';
import { HttpException, HttpStatus } from 'http-exception-library';

export function errorHandler(error, req, res, next) {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode,
      error: error.error,
    });
  }

  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send(STATUS_CODES[HttpStatus.INTERNAL_SERVER_ERROR]);
}

```
Now into your request handlers, you can use the exception classes without a try/catch block.
```js
import { Router } from 'express';
import { BadRequestException } from 'http-exception-library';

import { User } from '../models/user';

const routes = Router();

routes.get('/users/:id', async (req, res) => {
  const user = await User.FindOne({ id: req.params.id });

  if (!user) throw new BadRequestException(undefined, 'USER_NOT_FOUND');

  //...
});

export { routes };
```

## The HttpStatus object
Note that the `http-exception-library` also imports an object HttpStatus:
```js
import { HttpException, HttpStatus } from 'http-exception-library';

console.log(HttpStatus.OK); // Output: 200
console.log(HttpStatus.NOT_FOUND); // Output: 404
```

## Which exception classes this package provides?

`http-exception-library` provides a set of exception classes that inherit from the base HttpException. 
These classes represent many of the most common HTTP exceptions:

- BadRequestException
- UnauthorizedException
- NotFoundException
- ForbiddenException
- NotAcceptableException
- RequestTimeoutException
- ConflictException
- GoneException
- HttpVersionNotSupportedException
- PayloadTooLargeException
- UnsupportedMediaTypeException
- UnprocessableEntityException
- InternalServerErrorException
- NotImplementedException
- ImATeapotException
- MethodNotAllowedException
- BadGatewayException
- ServiceUnavailableException
- GatewayTimeoutException
- PreconditionFailedException

## HttpStatus Object
The `HttpStatus` object maps the status names to their corresponding status codes.

- HttpStatus.CONTINUE: 100
- HttpStatus.SWITCHING_PROTOCOLS: 101
- HttpStatus.PROCESSING: 102
- HttpStatus.OK: 200
- HttpStatus.CREATED: 201
- HttpStatus.ACCEPTED: 202
- HttpStatus.NON_AUTHORITATIVE_INFORMATION: 203
- HttpStatus.NO_CONTENT: 204
- HttpStatus.RESET_CONTENT: 205
- HttpStatus.PARTIAL_CONTENT: 206
- HttpStatus.MULTI_STATUS: 207
- HttpStatus.ALREADY_REPORTED: 208
- HttpStatus.IM_USED: 226
- HttpStatus.MULTIPLE_CHOICES: 300
- HttpStatus.MOVED_PERMANENTLY: 301
- HttpStatus.FOUND: 302
- HttpStatus.SEE_OTHER: 303
- HttpStatus.NOT_MODIFIED: 304
- HttpStatus.USE_PROXY: 305
- HttpStatus.TEMPORARY_REDIRECT: 307
- HttpStatus.PERMANENT_REDIRECT: 308
- HttpStatus.BAD_REQUEST: 400
- HttpStatus.UNAUTHORIZED: 401
- HttpStatus.PAYMENT_REQUIRED: 402
- HttpStatus.FORBIDDEN: 403
- HttpStatus.NOT_FOUND: 404
- HttpStatus.METHOD_NOT_ALLOWED: 405
- HttpStatus.NOT_ACCEPTABLE: 406
- HttpStatus.PROXY_AUTHENTICATION_REQUIRED: 407
- HttpStatus.REQUEST_TIMEOUT: 408
- HttpStatus.CONFLICT: 409
- HttpStatus.GONE: 410
- HttpStatus.LENGTH_REQUIRED: 411
- HttpStatus.PRECONDITION_FAILED: 412
- HttpStatus.PAYLOAD_TOO_LARGE: 413
- HttpStatus.URI_TOO_LONG: 414
- HttpStatus.UNSUPPORTED_MEDIA_TYPE: 415
- HttpStatus.RANGE_NOT_SATISFIABLE: 416
- HttpStatus.EXPECTATION_FAILED: 417
- HttpStatus.MISDIRECTED_REQUEST: 421
- HttpStatus.UNPROCESSABLE_ENTITY: 422
- HttpStatus.LOCKED: 423
- HttpStatus.FAILED_DEPENDENCY: 424
- HttpStatus.UPGRADE_REQUIRED: 426
- HttpStatus.PRECONDITION_REQUIRED: 428
- HttpStatus.TOO_MANY_REQUESTS: 429
- HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE: 431
- HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS: 451
- HttpStatus.INTERNAL_SERVER_ERROR: 500
- HttpStatus.NOT_IMPLEMENTED: 501
- HttpStatus.BAD_GATEWAY: 502
- HttpStatus.SERVICE_UNAVAILABLE: 503
- HttpStatus.GATEWAY_TIMEOUT: 504
- HttpStatus.HTTP_VERSION_NOT_SUPPORTED: 505
- HttpStatus.VARIANT_ALSO_NEGOTIATES: 506
- HttpStatus.INSUFFICIENT_STORAGE: 507
- HttpStatus.LOOP_DETECTED: 508
- HttpStatus.NOT_EXTENDED: 510
- HttpStatus.NETWORK_AUTHENTICATION_REQUIRED: 511

## License
This project is licensed under the MIT [MIT License](LICENSE).
