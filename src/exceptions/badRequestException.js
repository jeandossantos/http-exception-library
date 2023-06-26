/**
 * Represents a BadRequestException, which is an HTTP exception indicating a bad request.
 * Extends the HttpException class.
 */
export default class BadRequestException extends HttpException {
  /**
   * Creates a new instance of BadRequestException.
   * @param {string} [message] - The error message. If not provided, the default message for the status code will be used.
   * @param {*} [error] - The underlying error associated with the exception. Can be of any type.
   */
  constructor(message = STATUS_CODES[statusCode], error) {
    super(message, statusCode, error);
  }
}
