export type ObjectID = string;
export type UserID = ObjectID;
export type ChannelID = ObjectID;
export type VideoID = ObjectID;
export type ShowID = ObjectID;
export type PlaylistID = ObjectID;

export type CID = string;
export type JWT = string;
export type MimeType = string;

export type IPFSContent = {
  hash: CID;
  mimeType: MimeType;
};

export interface AccountInfo {
  avatar: IPFSContent;
  handle: string;
  name: string;
  verified: boolean;
  description: string;
  creationDate: Date;
}

export interface CategoryInfo {
  tags: Array<string>;
  explicit: boolean;
  topic?: string;
  genre?: string;
}

export interface ContentInfo extends CategoryInfo {
  readonly creationDate: Date;
  title: string;
  description: string;
  views: number;
  unlisted: boolean;
  channel: ChannelID;
  collaborators: Array<UserID>;
  thumbnail: IPFSContent;
}

export type Contributions = {
  [user: string]: Array<string>;
};

export type Bookmarks = {
  [video: string]: number;
};

export interface Season {
  title?: string;
  episodes: Array<VideoID>;
}

export type SentInvites = {
  owners: Array<UserID>;
  collaborators: Array<UserID>;
  admins: Array<UserID>;
  moderators: Array<UserID>;
};

export type ReceivedInvites = {
  owners: Array<ChannelID>;
  collaborators: Array<ChannelID>;
  admin: Array<ChannelID>;
  moderator: Array<ChannelID>;
};

export type PaginatedResponse<T> = {
  page: number;
  response: T;
};
