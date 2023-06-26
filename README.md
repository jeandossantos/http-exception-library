# http-exception-library

# como instalar?

```bash
npm install http-exceptions-library
```

## Como usar?

```js
import { BadRequestException, NotFoundException } from 'http-exceptions-library';

const error = new BadRequestException('Invalid request');
console.log(error.message); // Output: Invalid request

const notFound = new NotFoundException('Resource not found');
console.log(notFound.message); // Output: Resource not found
```
## How many exception classes this package provides?

http-exception-library provides a set of exception classes that inherit from the base HttpException. 
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
