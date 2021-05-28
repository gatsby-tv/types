export class WestEggError extends Error {
  statusCode: StatusCode;
  message: ErrorMessage;

  constructor(statusCode: StatusCode, message: ErrorMessage) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }

  public toString = (): string => {
    return `${this.statusCode}: ${this.message}`;
  };
}

export class NotFound extends WestEggError {
  constructor(message: ErrorMessage) {
    super(StatusCode.NOT_FOUND, message);
  }
}

export class BadRequest extends WestEggError {
  constructor(message: ErrorMessage) {
    super(StatusCode.BAD_REQUEST, message);
  }
}

export class InternalError extends WestEggError {
  constructor() {
    super(StatusCode.INTERNAL_ERROR, ErrorMessage.INTERNAL_ERROR);
  }
}

export class Unauthorized extends WestEggError {
  constructor(message: ErrorMessage) {
    super(StatusCode.UNAUTHORIZED, message);
  }
}

export class Forbidden extends WestEggError {
  constructor(message: ErrorMessage) {
    super(StatusCode.FORBIDDEN, message);
  }
}

export enum StatusCode {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  INTERNAL_ERROR = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  OK = 200,
  CREATED = 201,
}

export enum ErrorMessage {
  // Common HTTP error responses
  NOT_FOUND = "NOT_FOUND",
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  UNAUTHORIZED = "UNAUTHORIZED",

  // Login
  HANDLE_OR_EMAIL_REQUIRED = "HANDLE_OR_EMAIL_REQUIRED",
  NO_BEARER_TOKEN_SET = "NO_BEARER_TOKEN_SET",
  NO_BEARER_TOKEN_PREFIX = "NO_BEARER_TOKEN_PREFIX",

  // Email
  INVALID_EMAIL = "INVALID_EMAIL",

  // Session
  SESSION_NOT_FOUND = "SESSION_NOT_FOUND",

  // Handle
  HANDLE_OUT_OF_RANGE = "HANDLE_OUT_OF_RANGE",
  INVALID_HANDLE = "INVALID_HANDLE",
  HANDLE_IN_USE = "HANDLE_IN_USE",

  // Name
  NAME_OUT_OF_RANGE = "NAME_OUT_OF_RANGE",

  // User
  USER_FORBIDDEN_TO_PERFORM_ACTION = "USER_FORBIDDEN_TO_PERFORM_ACTION",
  USER_NOT_FOUND = "USER_NOT_FOUND",

  // Channel
  CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND",

  // Video
  VIDEO_ALREADY_EXISTS = "VIDEO_ALREADY_EXISTS",
  VIDEO_TITLE_OUT_OF_RANGE = "VIDEO_TITLE_OUT_OF_RANGE",
  VIDEO_DESCRIPTION_OUT_OF_RANGE = "VIDEO_DESCRIPTION_OUT_OF_RANGE",
  VIDEO_NOT_FOUND = "VIDEO_NOT_FOUND",

  // Tokens
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
}
