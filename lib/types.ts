import {
  IChannelAccount,
  IChannelPublicInfo,
  IChannelPrivateInfo,
  IChannelContent,
  IUserAccount,
  IUserPublicInfo,
  IUserPrivateInfo,
  IUserContentFeeds,
  IUserHistory,
  IUserPromotions,
  IBasicVideo,
  IVideoReport,
  ISeasonedShow,
  IPlaylist,
} from "@lib/entities";

/*
 * Format of JWT used for authentication requests.
 *
 * Every JWT is sent via the Authorization HTTP header and signed
 * using a shared secret.
 *
 * Although it is possible to extend this object to include additional
 * session data, the keys specified here are required.
 */
export interface Token {
  readonly _id: string;
  readonly __v: number;
  readonly iat: Date;
  readonly exp: Date;
}

type Override<T, K> = Omit<T, keyof K> & K;

export type Channel = IChannelAccount;

export type ChannelPublicInfo = Override<
  IChannelPublicInfo,
  Record<
    "owners" | "collaborators" | "contributors" | "admins" | "moderators",
    Array<User>
  >
>;

export type ChannelPrivateInfo = IChannelPrivateInfo;

export type ChannelContent = Override<
  IChannelContent,
  {
    videos: Array<Video>;
    shows: Array<Show>;
    playlists: Array<Playlist>;
  }
>;

export type User = IUserAccount;

export type UserPublicInfo = Override<
  IUserPublicInfo,
  Record<"channels" | "collaborations", Array<Channel>>
>;

export type UserPrivateInfo = Override<
  IUserPrivateInfo,
  Record<"administering" | "moderating", Channel>
>;

export type UserContentFeeds = Override<
  IUserContentFeeds,
  {
    following: Array<User>;
    subscriptions: Array<Channel>;
  }
>;

export type UserHistory = Override<IUserHistory, { history: Array<Browsable> }>;

export type UserPromotions = IUserPromotions;

export type BasicVideo = Override<
  IBasicVideo,
  {
    channel: Channel;
    collaborators: Array<User>;
    contributors: Array<User>;
    sponsors: Array<User>;
  }
>;

export type SerialVideo = BasicVideo & { playlist: Playlist };

export type EpisodicVideo = BasicVideo & { show: Show };

export type Video = BasicVideo | SerialVideo | EpisodicVideo;

export type VideoReport = IVideoReport;

/*
 * Seasons list only `BasicVideo` objects rather than `EpisodicVideo`
 * objects to prevent recursion.
 */
export type Season = {
  title?: string;
  episodes: Array<BasicVideo>;
};

export type SeasonedShow = Override<
  ISeasonedShow,
  {
    channel: Channel;
    collaborators: Array<User>;
    seasons: Array<Season>;
  }
>;

export type EpisodicShow = Omit<SeasonedShow, "seasons"> & {
  episodes: Array<BasicVideo>;
};

export type Show = SeasonedShow | EpisodicShow;

/*
 * As with `Season`, playlists only list `BasicVideo` objects rather
 * than `SerialVideo` objects to prevent recursion.
 */
export type Playlist = Override<
  IPlaylist,
  {
    channel: Channel;
    collaborators: Array<User>;
    videos: Array<BasicVideo>;
  }
>;

export type Browsable = BasicVideo | SerialVideo | Show;

export type PaginatedResponse<T> = {
  page: number;
  response: T;
};
