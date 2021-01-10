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
import { Report } from "@lib/report";
import { CID, ChannelID, UserID, VideoID } from "@lib/shared";
import { AdminPermissions } from "@lib/permissions";
import {
  UserSettings,
  ChannelSettings,
  ModerationSettings,
} from "@lib/settings";

/*
 * POST /auth/signup
 *
 * Requires authorization.
 *
 * Request to create a new user from the specified handle and display name.
 * In addition, the request allows for an avatar to be submitted via multipart/form-data.
 */
export type PostAuthSignupRequest = Pick<
  IUserAccount,
  "_id" | "handle" | "name"
>;

/*
 * GET /auth/user/:id
 *
 * Requires authorization.
 */
export type GetAuthUserRequest = Pick<IUserAccount, "_id">;

/*
 * GET /auth/user/:id/exists
 */
export type GetAuthUserExistsRequest = Record<string, never>;

/*
 * GET /auth/user/handle/:handle/exists
 */
export type GetAuthUserHandleExistsRequest = Record<string, never>;

/*
 * GET /auth/channel/handle/:handle/exists
 */
export type GetAuthChannelHandleExistsRequest = Record<string, never>;

//
// User Requests
// --------------------------------------------------

/*
 * GET /user/{:id,:handle}
 */
export type GetUserAccountRequest = Record<string, never>;

/*
 * GET /user/:handle/public
 */
export type GetUserPublicRequest = Record<string, never>;

/*
 * GET /user/:handle/private
 */
export type GetUserPrivateRequest = Record<string, never>;

/*
 * GET /user/:handle/feeds
 */
export type GetUserFeedsRequest = Record<string, never>;

/*
 * GET /user/:id/history
 */
export type GetUserHistoryRequest = Record<string, never>;

/*
 * GET /user/:id/promotions
 */
export type GetUserPromotionsRequest = Record<string, never>;

/*
 * PUT /user/:id
 */
export type PutUserRequest = Partial<
  Pick<IUserAccount, "name" | "description">
>;

/*
 * PUT /user/:id/handle
 */
export type PutUserHandleRequest = Record<string, never>;

/*
 * PUT /user/:id/avatar
 */
export type PutUserAvatarRequest = Record<string, never>;

/*
 * PUT /user/:id/banner
 */
export type PutUserBannerRequest = Record<string, never>;

/*
 * PUT /user/:id/subscription
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
 * PUT /user/:id/promotion
 */
export type PutUserPromotionRequest = { video: VideoID };

/*
 * PUT /user/:id/settings
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
export type DeleteUserRequest = Record<string, never>;

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
export type DeleteUserEntireHistoryRequest = Record<string, never>;

/*
 * DELETE /user/:id/promotion
 */
export type DeleteUserPromotionRequest = { video: VideoID };

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
export type GetChannelAccountRequest = Record<string, never>;

/*
 * GET /channel/:handle/public
 */
export type GetChannePublicRequest = Record<string, never>;

/*
 * GET /channel/:handle/private
 */
export type GetChannelPrivateRequest = Record<string, never>;

/*
 * GET /channel/:handle/content
 */
export type GetChannelContentRequest = Record<string, never>;

/*
 * PUT /channel/:handle
 */
export type PutChannelRequest = Partial<
  Pick<IChannelAccount, "name" | "description">
>;

/*
 * PUT /channel/:id/handle
 */
export type PutChannelHandleRequest = Record<string, never>;

/*
 * PUT /channel/:id/avatar
 */
export type PutChannelAvatarRequest = Record<string, never>;

/*
 * PUT /channel/:id/banner
 */
export type PutChannelBannerRequest = Record<string, never>;

/*
 * PUT /channel/:id/poster
 */
export type PutChannelPosterRequest = Record<string, never>;

/*
 * PUT /channel/:id/settings
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
export type PutChannelContributorInviteRequest = {
  contributors: Array<UserID>;
};

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
  permissions: Array<AdminPermissions>;
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
  moderations: ModerationSettings;
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
export type GetVideoRequest = Record<string, never>;

/*
 * PUT /video/:id
 */
export type PutVideoRequest = Partial<
  Omit<IVideo, "_id" | "releaseDate" | "content" | "views" | "channel">
>;

/*
 * PUT /video/:id/view
 */
export type PutVideoViewRequest = Record<string, never>;

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
export type DeleteVideoRequest = Record<string, never>;

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
export type GetShowRequest = Record<string, never>;

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
export type DeleteShowRequest = Record<string, never>;

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
export type GetPlaylistRequest = Record<string, never>;

/*
 * PUT /playlist/:id
 */
export type PutPlaylistRequest = Partial<
  Omit<IPlaylist, "_id" | "creationDate" | "views" | "channel" | "videos">
>;

/*
 * PUT /playlist/:id/content
 */
export type PutPlaylistContentRequest = Pick<IPlaylist, "videos">;

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistRequest = Record<string, never>;

//
// Listing Requests
// --------------------------------------------------

/*
 * GET /listing/featured/channels
 */
export type GetListingFeaturedChannelsRequest = Record<string, never>;

/*
 * GET /listing/videos/recommended
 */
export type GetListingRecommendedVideosRequest = Record<string, never>;

/*
 * GET /listing/videos/popular
 */
export type GetListingPopularVideosRequest = Record<string, never>;

/*
 * GET /listing/videos/new
 */
export type GetListingNewVideosRequest = Record<string, never>;

/*
 * GET /listing/subscriptions
 */
export type GetListingSubscriptionsRequest = Record<string, never>;

/*
 * GET /listing/topics
 */
export type GetListingTopicsRequest = Record<string, never>;
