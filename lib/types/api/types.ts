export interface IPFSContent {
  hash: string;
  mimeType: MimeType;
}

// Abstract entity types
export interface IAvatared {
  avatar: IPFSContent;
}

export interface IHandled {
  handle: string;
}

export interface INamed {
  displayName: string;
}
