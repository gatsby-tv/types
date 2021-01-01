import { AdminPermissions, ContentPermissions } from "@lib/permissions";

export type ObjectID = string;
export type UserID = ObjectID;
export type ChannelID = ObjectID;
export type VideoID = ObjectID;
export type ShowID = ObjectID;
export type PlaylistID = ObjectID;

export type CID = string;
export type JWT = string;

export type IPFSContent = {
  hash: CID;
  type: MimeType;
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
  tags: Set<string>;
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
  collaborators: Set<UserID>;
  thumbnail: IPFSContent;
}

export type AdminSettings = {
  [user: string]: {
    public: boolean;
    permissions: Set<AdminPermissions>;
  };
};

export type ModerationSettings<T extends ContentPermissions | null = null> = {
  [content: string]: Set<T extends ContentPermissions ? T : ContentPermissions>;
};

export type ModeratorSettings<T extends ContentPermissions | null = null> = {
  [user: string]: {
    public: boolean;
    moderations: ModerationSettings<T>;
  };
};

export type Contributions = {
  [user: string]: Set<string>;
};

export type Bookmarks = {
  [video: string]: number;
};

export interface Season {
  title?: string;
  episodes: Set<VideoID>;
}

export type SentInvites = {
  owners: Set<UserID>;
  collaborators: Set<UserID>;
  admins: Set<UserID>;
  moderators: Set<UserID>;
};

export type ReceivedInvites = {
  owners: Set<ChannelID>;
  collaborators: Set<ChannelID>;
  admin: Set<ChannelID>;
  moderator: Set<ChannelID>;
};

export type PaginatedResponse<T> = {
  page: number;
  response: T;
};
