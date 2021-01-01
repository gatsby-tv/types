import {
  AccountInfo,
  AdminSettings,
  Bookmarks,
  CID,
  CategoryInfo,
  ChannelID,
  ContentInfo,
  Contributions,
  ModeratorSettings,
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
import { UserSettings, ChannelSettings } from "@lib/settings";

export interface IToken {
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
  owners: Set<UserID>;
  collaborators: Set<UserID>;
  contributors: Set<UserID>;
  contributions: Contributions;
  admins: Set<UserID>;
  moderators: Set<UserID>;
}

export interface IChannelPrivateInfo {
  readonly _id: ChannelID;
  trusted: boolean;
  settings: Set<ChannelSettings>;
  management: {
    admins: AdminSettings;
    moderators: ModeratorSettings;
  };
  invitations: SentInvites;
}

export interface IChannelContent {
  readonly _id: ChannelID;
  videos: Set<VideoID>;
  shows: Set<ShowID>;
  playlists: Set<PlaylistID>;
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
  channels: Set<ChannelID>;
  collaborations: Set<ChannelID>;
}

export interface IUserPrivateInfo {
  readonly _id: UserID;
  email: string;
  administering: Set<ChannelID>;
  moderating: Set<ChannelID>;
  settings: Set<UserSettings>;
  invitations: ReceivedInvites;
}

export interface IUserContentFeeds {
  readonly _id: UserID;
  following: Set<UserID>;
  subscriptions: Set<ChannelID>;
  history: Set<VideoID>;
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
  contributors: Set<UserID>;
  contributions: Contributions;
  sponsors: Set<UserID>;
  sponsored: boolean;
  content: CID | Set<CID>;
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
  episodes: Set<VideoID>;
}

export type IShow = ISeasonedShow | IEpisodicShow;

export interface IPlaylist extends ContentInfo {
  readonly _id: PlaylistID;
  videos: Set<VideoID>;
}

export type ICollection = IShow | IPlaylist;

export type ISuggestedTopics = {
  [topic: string]: Set<ObjectID>;
};

export type ISuggestedGenres = ISuggestedTopics;
