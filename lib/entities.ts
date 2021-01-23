import {
  AccountInfo,
  Bookmarks,
  CID,
  CategoryInfo,
  ChannelID,
  ContentInfo,
  Contributions,
  ObjectID,
  PlaylistID,
  ReceivedInvites,
  Season,
  SentInvites,
  ShowID,
  UserID,
  VideoID,
} from "@lib/types";
import { Report } from "@lib/report";
import {
  UserSettings,
  ChannelSettings,
  AdminSettings,
  ModeratorSettings,
} from "@lib/settings";

export interface IToken extends IUser {
  readonly _id: ObjectID;
  readonly __v: number;
  readonly iat: Date;
  readonly exp: Date;
}

export interface IChannelAccount extends AccountInfo {
  readonly _id: ChannelID;
  subscribers: number;
}

export interface IChannelPublicInfo {
  readonly _id: ChannelID;
  owners: Array<UserID>;
  collaborators: Array<UserID>;
  contributors: Array<UserID>;
  contributions: Contributions;
  admins: Array<UserID>;
  moderators: Array<UserID>;
}

export interface IChannelPrivateInfo {
  readonly _id: ChannelID;
  trusted: boolean;
  settings: Array<ChannelSettings>;
  management: {
    admins: AdminSettings;
    moderators: ModeratorSettings;
  };
  invitations: SentInvites;
}

export interface IChannelContent {
  readonly _id: ChannelID;
  videos: Array<VideoID>;
  shows: Array<ShowID>;
  playlists: Array<PlaylistID>;
}

export type IChannel = IChannelAccount &
  IChannelPublicInfo &
  IChannelPrivateInfo &
  IChannelContent;

export interface IUserAccount extends AccountInfo {
  readonly _id: UserID;
  followers: number;
}

export interface IUserPublicInfo {
  readonly _id: UserID;
  channels: Array<ChannelID>;
  collaborations: Array<ChannelID>;
}

export interface IUserPrivateInfo {
  readonly _id: UserID;
  email: string;
  administering: Array<ChannelID>;
  moderating: Array<ChannelID>;
  settings: Array<UserSettings>;
  invitations: ReceivedInvites;
}

export interface IUserContentFeeds {
  readonly _id: UserID;
  following: Array<UserID>;
  subscriptions: Array<ChannelID>;
  history: Array<VideoID>;
  bookmarks: Bookmarks;
}

export type IUser = IUserAccount &
  IUserPublicInfo &
  IUserPrivateInfo &
  IUserContentFeeds;

export interface IBasicVideo extends Omit<ContentInfo, "creationDate"> {
  readonly _id: VideoID;
  readonly releaseDate: Date;
  duration: number;
  contributors: Array<UserID>;
  contributions: Contributions;
  sponsors: Array<UserID>;
  sponsored: boolean;
  content: CID | Array<CID>;
}

export interface ISerialVideo extends IBasicVideo {
  playlist: PlaylistID;
}

export interface IEpisodicVideo extends Omit<IBasicVideo, keyof CategoryInfo> {
  show: ShowID;
}

export type IVideo = IBasicVideo | ISerialVideo | IEpisodicVideo;

export type IVideoReport = { readonly _id: VideoID } & {
  [K in Report]: number;
};

export interface ISeasonedShow extends ContentInfo {
  readonly _id: ShowID;
  seasons: Season[];
}

export interface IEpisodicShow extends ContentInfo {
  readonly _id: ShowID;
  episodes: Array<VideoID>;
}

export type IShow = ISeasonedShow | IEpisodicShow;

export interface IPlaylist extends ContentInfo {
  readonly _id: PlaylistID;
  videos: Array<VideoID>;
}

export type ICollection = IShow | IPlaylist;

export type ISuggestedTopics = {
  [topic: string]: Array<ObjectID>;
};

export type ISuggestedGenres = ISuggestedTopics;
