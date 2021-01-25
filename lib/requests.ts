import {
  IUserAccount,
  IChannelAccount,
  IBasicVideo,
  ISerialVideo,
  IVideo,
  IShow,
  ISeasonedShow,
  IEpisodicShow,
  IPlaylist,
} from "@lib/entities";
import { CID, ChannelID, UserID, VideoID } from "@lib/types";
import { Report } from "@lib/report";
import {
  UserSettings,
  ChannelSettings,
  AdminSettings,
  ModeratorSettings,
} from "@lib/settings";

/*
 * POST /auth/signup
 */
export type SignupRequest = {
  email: string;
  password: [string, string];
  account: Pick<IUserAccount, "handle" | "name">;
};

export type LoginHandleRequest = {
  handle: string;
  password: string;
};

export type LoginEmailRequest = {
  email: string;
  password: string;
};

/*
 * POST /auth/login
 */
export type LoginRequest = LoginHandleRequest | LoginEmailRequest;

//
// User Requests
// --------------------------------------------------

/*
 * GET /user/:handle
 */
export type GetUserAccountRequest = {};

/*
 * GET /user/:handle/public
 */
export type GetUserPublicRequest = {};

/*
 * GET /user/:handle/private
 */
export type GetUserPrivateRequest = {};

/*
 * GET /user/:handle/feeds
 */
export type GetUserFeedsRequest = {};

/*
 * PUT /user/:handle
 */
export type PutUserRequest = Partial<
  Pick<IUserAccount, "avatar" | "handle" | "name" | "description">
>;

/*
 * PUT /user/:handle/subscription
 */
export type PutUserSubscriptionRequest = {
  subscription: ChannelID;
};

/*
 * PUT /user/:handle/follow
 */
export type PutUserFollowingRequest = {
  follow: UserID;
};

/*
 * PUT /user/:handle/history
 */
export type PutUserHistoryRequest = {
  video: VideoID;
  bookmark: number;
};

/*
 * PUT /user/:handle/settings
 */
export type PutUserSettingsRequest = { settings: Array<UserSettings> };

/*
 * PUT /user/:handle/owner/accept
 */
export type PutUserOwnerAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:handle/collaboration/accept
 */
export type PutUserCollaborationAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:handle/admin/accept
 */
export type PutUserAdminAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:handle/moderation/accept
 */
export type PutUserModerationAcceptRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle
 */
export type DeleteUserRequest = {};

/*
 * DELETE /user/:handle/subscription
 */
export type DeleteUserSubscriptionRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle/follow
 */
export type DeleteUserFollowRequest = { follow: UserID };

/*
 * DELETE /user/:handle/history
 */
export type DeleteUserHistoryRequest = { video: VideoID };

/*
 * DELETE /user/:handle/history/all
 */
export type DeleteUserEntireHistoryRequest = {};

/*
 * DELETE /user/:handle/collaboration
 */
export type DeleteUserCollaborationRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle/admin
 */
export type DeleteUserAdminRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle/moderator
 */
export type DeleteUserModeratorRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle/collaboration/invite
 */
export type DeleteUserCollaborationInviteRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle/admin/invite
 */
export type DeleteUserAdminInviteRequest = { channel: ChannelID };

/*
 * DELETE /user/:handle/moderator/invite
 */
export type DeleteUserModeratorInviteRequest = { channel: ChannelID };

//
// Channel Requests
// --------------------------------------------------

/*
 * POST /channel
 */
export type PostChannelRequest = Pick<IChannelAccount, "handle" | "name"> & {
  owner: UserID;
};

/*
 * GET /channel/:handle
 */
export type GetChannelAccountRequest = {};

/*
 * GET /channel/:handle/public
 */
export type GetChannePublicRequest = {};

/*
 * GET /channel/:handle/private
 */
export type GetChannelPrivateRequest = {};

/*
 * GET /channel/:handle/content
 */
export type GetChannelContentRequest = {};

/*
 * PUT /channel/:handle
 */
export type PutChannelRequest = Partial<
  Pick<IChannelAccount, "avatar" | "handle" | "name" | "description">
>;

/*
 * PUT /channel/:handle/settings
 */
export type PutChannelSettingsRequest = { settings: Array<ChannelSettings> };

/*
 * PUT /channel/:handle/owner/invite
 */
export type PutChannelOwnerInviteRequest = { owners: Array<UserID> };

/*
 * PUT /channel/:handle/collaborator/invite
 */
export type PutChannelCollaboratorInviteRequest = {
  collaborators: Array<UserID>;
};

/*
 * PUT /channel/:handle/contributor/invite
 */
export type PutChannelContributorInviteRequest = { contributors: Array<UserID> };

/*
 * PUT /channel/:handle/contributor/roles
 */
export type PutChannelContributorRolesRequest = {
  contributor: UserID;
  roles: Array<string>;
};

/*
 * PUT /channel/:handle/admin/invite
 */
export type PutChannelAdminInviteRequest = { admins: Array<UserID> };

/*
 * PUT /channel/:handle/admin/settings
 */
export type PutChannelAdminSettingsRequest = {
  admin: UserID;
  settings: AdminSettings[string];
};

/*
 * PUT /channel/:handle/moderator/invite
 */
export type PutChannelModeratorInviteRequest = { moderators: Array<UserID> };

/*
 * PUT /channel/:handle/moderator/settings
 */
export type PutChannelModeratorSettingsRequest = {
  moderator: UserID;
  settings: ModeratorSettings[string];
};

/*
 * DELETE /channel/:handle/owner
 */
export type DeleteChannelOwnerRequest = { owner: UserID };

/*
 * DELETE /channel/:handle/collaborator
 */
export type DeleteChannelCollaboratorRequest = { collaborator: UserID };

/*
 * DELETE /channel/:handle/contributor
 */
export type DeleteChannelContributorRequest = { contributor: UserID };

/*
 * DELETE /channel/:handle/admin
 */
export type DeleteChannelAdminRequest = { admin: UserID };

/*
 * DELETE /channel/:handle/moderator
 */
export type DeleteChannelModeratorRequest = { moderator: UserID };

/*
 * DELETE /channel/:handle/owner/invite
 */
export type DeleteChannelOwnerInviteRequest = { owner: UserID };

/*
 * DELETE /channel/:handle/collaborator/invite
 */
export type DeleteChannelCollaboratorInviteRequest = { collaborator: UserID };

/*
 * DELETE /channel/:handle/contributor/invite
 */
export type DeleteChannelContributorInviteRequest = { contributor: UserID };

/*
 * DELETE /channel/:handle/admin/invite
 */
export type DeleteChannelAdminInviteRequest = { admin: UserID };

/*
 * DELETE /channel/:handle/moderator/invite
 */
export type DeleteChannelModeratorInviteRequest = { moderator: UserID };

//
// Video Requests
// --------------------------------------------------

/*
 * POST /video
 */
export type PostVideoRequest = Omit<
  IBasicVideo | ISerialVideo,
  "_id" | "releaseDate" | "views"
>;

/*
 * GET /video/:id
 */
export type GetVideoRequest = {};

/*
 * PUT /video/:id
 */
export type PutVideoRequest = Partial<
  Omit<IVideo, "_id" | "releaseDate" | "content" | "views" | "channel">
>;

/*
 * PUT /video/:id/view
 */
export type PutVideoViewRequest = {};

/*
 * PUT /video/:id/content
 */
export type PutVideoContentRequest = {
  duration: number;
  content: CID | Array<CID>;
};

/*
 * PUT /video/:id/report
 */
export type PutVideoReportRequest = {
  report: Report;
};

/*
 * DELETE /video/:id
 */
export type DeleteVideoRequest = {};

//
// Show Requests
// --------------------------------------------------

/*
 * POST /show
 */
export type PostShowRequest = Omit<IShow, "_id" | "creationDate" | "views">;

/*
 * POST /show/:id/episode
 */
export type PostShowEpisodeRequest = {
  season?: number;
  episode: PostVideoRequest;
};

/*
 * GET /show/:id
 */
export type GetShowRequest = {};

/*
 * PUT /show/:id
 */
export type PutShowRequest = Partial<
  Omit<
    IShow,
    "_id" | "creationDate" | "views" | "channel" | "episodes" | "seasons"
  >
>;

/*
 * PUT /show/:id/episode
 */
export type PutShowEpisodeRequest = {
  season?: number;
  episode: VideoID;
};

/*
 * PUT /show/:id/content
 */
export type PutShowContentRequest =
  | Pick<ISeasonedShow, "seasons">
  | Pick<IEpisodicShow, "episodes">;

/*
 * DELETE /show/:id
 */
export type DeleteShowRequest = {};

//
// Playlist Requests
// --------------------------------------------------

/*
 * POST /playlist
 */
export type PostPlaylistRequest = Omit<
  IPlaylist,
  "_id" | "creationDate" | "views"
>;

/*
 * GET /playlist/:id
 */
export type GetPlaylistRequest = {};

/*
 * PUT /playlist/:id
 */
export type PutPlaylistRequest = Partial<
  Omit<IPlaylist, "_id" | "creationDate" | "views" | "channel" | "videos">
>;

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistRequest = {};

/*
 * DELETE /playlist/:id/video
 */
export type DeletePlaylistVideoRequest = { videos: Array<VideoID> };
