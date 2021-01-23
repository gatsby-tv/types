export class WestEggError implements Error {
  name: ErrorCode;
  message: string;

  constructor(name: ErrorCode, message: string) {
    this.name = name;
    this.message = message;
  }

  public toString = (): string => {
    return `${this.name}: ${this.message}`;
  }
}

export enum ErrorCode {
  // Common HTTP error responses
  NOT_FOUND = "NOT_FOUND",
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  UNAUTHORIZED = "UNAUTHORIZED",

  // Login Errors
  HANDLE_OR_EMAIL_REQUIRED = "HANDLE_OR_EMAIL_REQUIRED",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",

  // Email Validation errors
  EMAIL_IN_USE = "EMAIL_IN_USE",
  EMAIL_OUT_OF_RANGE = "EMAIL_OUT_OF_RANGE",
  INVALID_EMAIL = "INVALID_EMAIL",

  // Password
  PASSWORD_DOES_NOT_MATCH = "PASSWORD_DOES_NOT_MATCH",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  PASSWORD_OUT_OF_RANGE = "PASSWORD_OUT_OF_RANGE",

  // Handle
  HANDLE_OUT_OF_RANGE = "HANDLE_OUT_OF_RANGE",
  INVALID_HANDLE = "INVALID_HANDLE",
  HANDLE_IN_USE = "HANDLE_IN_USE",

  // Display Name
  DISPLAY_NAME_OUT_OF_RANGE = "DISPLAY_NAME_OUT_OF_RANGE",

  // Video Upload
  VIDEO_TITLE_OUT_OF_RANGE = "VIDEO_TITLE_OUT_OF_RANGE",
  VIDEO_DESCRIPTION_OUT_OF_RANGE = "VIDEO_DESCRIPTION_OUT_OF_RANGE",
}
