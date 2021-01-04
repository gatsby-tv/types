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

type LoginHandleRequest = {
  handle: string;
  password: string;
};

type LoginEmailRequest = {
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
 * GET /user/:id
 */
export type GetUserAccountRequest = null;

/*
 * GET /user/:id/public
 */
export type GetUserPublicRequest = null;

/*
 * GET /user/:id/private
 */
export type GetUserPrivateRequest = null;

/*
 * GET /user/:id/feeds
 */
export type GetUserFeedsRequest = null;

/*
 * PUT /user/:id
 */
export type PutUserRequest = Partial<
  Pick<IUserAccount, "avatar" | "handle" | "name" | "description">
>;

/*
 * PUT /user/:id/subscription
 */
export type PutUserSubscriptionRequest = {
  subscription: ChannelID;
};

/*
 * PUT /user/:id/follow
 */
export type PutUserFollowingRequest = {
  follow: UserID;
};

/*
 * PUT /user/:id/history
 */
export type PutUserHistoryRequest = {
  video: VideoID;
  bookmark: number;
};

/*
 * PUT /user/:id/settings
 */
export type PutUserSettingsRequest = { settings: Set<UserSettings> };

/*
 * PUT /user/:id/owner/accept
 */
export type PutUserOwnerAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:id/collaboration/accept
 */
export type PutUserCollaborationAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:id/admin/accept
 */
export type PutUserAdminAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:id/moderation/accept
 */
export type PutUserModerationAcceptRequest = { channel: ChannelID };

/*
 * DELETE /user/:id
 */
export type DeleteUserRequest = null;

/*
 * DELETE /user/:id/subscription
 */
export type DeleteUserSubscriptionRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/follow
 */
export type DeleteUserFollowRequest = { follow: UserID };

/*
 * DELETE /user/:id/history
 */
export type DeleteUserHistoryRequest = { video: VideoID };

/*
 * DELETE /user/:id/history/all
 */
export type DeleteUserEntireHistoryRequest = null;

/*
 * DELETE /user/:id/collaboration
 */
export type DeleteUserCollaborationRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/admin
 */
export type DeleteUserAdminRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/moderator
 */
export type DeleteUserModeratorRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/collaboration/invite
 */
export type DeleteUserCollaborationInviteRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/admin/invite
 */
export type DeleteUserAdminInviteRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/moderator/invite
 */
export type DeleteUserModeratorInviteRequest = { channel: ChannelID };

//
// Channel Requests
// --------------------------------------------------

/*
 * POST /channe
 */
export type PostChannelRequest = Pick<IChannelAccount, "handle" | "name"> & {
  owner: UserID;
};

/*
 * GET /channel/:id
 */
export type GetChannelAccountRequest = null;

/*
 * GET /channel/:id/public
 */
export type GetChannePublicRequest = null;

/*
 * GET /channel/:id/private
 */
export type GetChannelPrivateRequest = null;

/*
 * GET /channel/:id/content
 */
export type GetChannelContentRequest = null;

/*
 * PUT /channel/:id
 */
export type PutChannelRequest = Partial<
  Pick<IChannelAccount, "avatar" | "handle" | "name" | "description">
>;

/*
 * PUT /channel/:id/settings
 */
export type PutChannelSettingsRequest = { settings: Set<ChannelSettings> };

/*
 * PUT /channel/:id/owner/invite
 */
export type PutChannelOwnerInviteRequest = { owners: Set<UserID> };

/*
 * PUT /channel/:id/collaborator/invite
 */
export type PutChannelCollaboratorInviteRequest = {
  collaborators: Set<UserID>;
};

/*
 * PUT /channel/:id/contributor/invite
 */
export type PutChannelContributorInviteRequest = { contributors: Set<UserID> };

/*
 * PUT /channel/:id/contributor/roles
 */
export type PutChannelContributorRolesRequest = {
  contributor: UserID;
  roles: Set<string>;
};

/*
 * PUT /channel/:id/admin/invite
 */
export type PutChannelAdminInviteRequest = { admins: Set<UserID> };

/*
 * PUT /channel/:id/admin/settings
 */
export type PutChannelAdminSettingsRequest = {
  admin: UserID;
  settings: AdminSettings[string];
};

/*
 * PUT /channel/:id/moderator/invite
 */
export type PutChannelModeratorInviteRequest = { moderators: Set<UserID> };

/*
 * PUT /channel/:id/moderator/settings
 */
export type PutChannelModeratorSettingsRequest = {
  moderator: UserID;
  settings: ModeratorSettings[string];
};

/*
 * DELETE /channel/:id/owner
 */
export type DeleteChannelOwnerRequest = { owner: UserID };

/*
 * DELETE /channel/:id/collaborator
 */
export type DeleteChannelCollaboratorRequest = { collaborator: UserID };

/*
 * DELETE /channel/:id/contributor
 */
export type DeleteChannelContributorRequest = { contributor: UserID };

/*
 * DELETE /channel/:id/admin
 */
export type DeleteChannelAdminRequest = { admin: UserID };

/*
 * DELETE /channel/:id/moderator
 */
export type DeleteChannelModeratorRequest = { moderator: UserID };

/*
 * DELETE /channel/:id/owner/invite
 */
export type DeleteChannelOwnerInviteRequest = { owner: UserID };

/*
 * DELETE /channel/:id/collaborator/invite
 */
export type DeleteChannelCollaboratorInviteRequest = { collaborator: UserID };

/*
 * DELETE /channel/:id/contributor/invite
 */
export type DeleteChannelContributorInviteRequest = { contributor: UserID };

/*
 * DELETE /channel/:id/admin/invite
 */
export type DeleteChannelAdminInviteRequest = { admin: UserID };

/*
 * DELETE /channel/:id/moderator/invite
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
export type GetVideoRequest = null;

/*
 * PUT /video/:id
 */
export type PutVideoRequest = Partial<
  Omit<IVideo, "_id" | "releaseDate" | "content" | "views" | "channel">
>;

/*
 * PUT /video/:id/view
 */
export type PutVideoViewRequest = null;

/*
 * PUT /video/:id/content
 */
export type PutVideoContentRequest = {
  duration: number;
  content: CID | Set<CID>;
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
export type DeleteVideoRequest = null;

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
export type GetShowRequest = null;

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
export type DeleteShowRequest = null;

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
export type GetPlaylistRequest = null;

/*
 * PUT /playlist/:id
 */
export type PutPlaylistRequest = Partial<
  Omit<IPlaylist, "_id" | "creationDate" | "views" | "channel" | "videos">
>;

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistRequest = null;

/*
 * DELETE /playlist/:id/video
 */
export type DeletePlaylistVideoRequest = { videos: Set<VideoID> };
