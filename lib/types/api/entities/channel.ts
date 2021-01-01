import { IAvatared, IHandled, INamed } from "../types";
import { IProvider } from "./provider";

export interface IChannel extends IHandled, INamed, IAvatared, IProvider {
  // FK to user entity that owns the channel
  owner: string;
  verified: boolean;
}
