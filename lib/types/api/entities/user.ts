import { IAvatared, IHandled, INamed } from "../types";

export interface IUser extends IHandled, INamed, IAvatared {
  email: string;
  channels: string[];
}

// User that includes password property and other sensitive data that shouldn't be sent back to the client
export interface IProtectedUser extends IUser {
  password: string;
}

// JWT token with mongo entity id and version
export interface IUserToken extends IUser {
  // Mongo metadata
  _id: string;
  __v: number;
  // JWT metadata
  iat: Date;
  exp: Date;
}
