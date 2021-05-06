import { PagedRequest } from "@lib/types";
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
  IUserPrivateInfo,
} from "@lib/entities";
import { Report } from "@lib/report";
import { Topic } from "@lib/topic";
import { Genre } from "@lib/genre";
import { CID, ChannelID, UserID, VideoID } from "@lib/shared";
import { AdminPermissions } from "@lib/permissions";
import {
  UserSettings,
  ChannelSettings,
  ModerationSettings,
} from "@lib/settings";

//
// Authentication Requests
// --------------------------------------------------

/*
 * POST /auth/signin
 *
 * Send a magic link to the user's email to get a valid JWT.
 */
export type PostAuthSignInRequest = Pick<IUserPrivateInfo, "email">;

/*
 * GET /auth/session/:key
 *
 * Get a session JWT to complete a signin from a magic link.
 */
export type GetAuthSessionRequest = { key: string };

/*
 * POST /auth/session/:key
 *
 * Same request as GET /auth/session/:key but include user signup properties.
 *
 * Request to finish creating a new user from the specified handle and display name.
 * TODO: In addition, the request allows for an avatar to be submitted via multipart/form-data.
 */
export type PostAuthCompleteSignUpRequest = Pick<
  IUserAccount,
  "handle" | "name"
>;
export type PostAuthCompleteSignUpRequestParams = { key: string };

/*
 * GET /auth/signin/refresh
 *
 * Requires authorization.
 *
 * Use the current JWT to get a new JWT to prevent the current from expiring.
 * On page load the frontend should send this request and set the new token from the response.
 */
export type GetAuthSignInRefreshRequest = {};

/*
 * TODO: POST /auth/session/:key/persist
 */

/*
 * GET /auth/user/handle/:handle/exists
 */
export type GetAuthUserHandleExistsRequest = {};

/*
 * GET /auth/channel/handle/:handle/exists
 */
export type GetAuthChannelHandleExistsRequest = {};

//
// User Requests
// --------------------------------------------------

/*
 * GET /user/{:id,:handle}
 */
export type GetUserAccountRequest = {
  unique: UserID | string;
};

/*
 * GET /user/:id/public
 */
export type GetUserPublicRequest = {
  _id: UserID;
};

/*
 * GET /user/:id/private
 */
export type GetUserPrivateRequest = {
  _id: UserID;
};

/*
 * GET /user/:id/feeds
 */
export type GetUserFeedsRequest = {
  _id: UserID;
};

/*
 * GET /user/:id/history
 */
export type GetUserHistoryRequest = {
  _id: UserID;
};

/*
 * GET /user/:id/promotions
 */
export type GetUserPromotionsRequest = {
  _id: UserID;
};

/*
 * GET /user/:id/listing/recommended
 */
export type GetUserListingRecommendedRequest = { _id: UserID } | PagedRequest;

/*
 * GET /user/:id/listing/subscriptions
 */
export type GetUserListingSubscriptionsRequest = { _id: UserID } | PagedRequest;

/*
 * PUT /user/:id
 */
export type PutUserRequestParams = { _id: UserID };

/*
 * PUT /user/:id
 */
export type PutUserRequest = Partial<
  Pick<IUserAccount, "name" | "description">
>;

/*
 * PUT /user/:id/handle
 */
export type PutUserHandleRequestParams = { _id: UserID };

/*
 * PUT /user/:id/handle
 */
export type PutUserHandleRequest = { handle: string };

/*
 * PUT /user/:id/avatar
 */
export type PutUserAvatarRequestParams = { _id: UserID };

/*
 * TODO: PUT /user/:id/avatar
 */
export type PutUserAvatarRequest = {};

/*
 * PUT /user/:id/banner
 */
export type PutUserBannerRequestParams = { _id: UserID };

/*
 * TODO: PUT /user/:id/banner
 */
export type PutUserBannerRequest = {};

/*
 * PUT /user/:id/subscription
 */
export type PutUserSubscriptionRequestParams = { _id: UserID };

/*
 * PUT /user/:id/subscription
 */
export type PutUserSubscriptionRequest = {
  subscription: ChannelID;
};

/*
 * PUT /user/:id/follow
 */
export type PutUserFollowingRequestParams = { _id: UserID };

/*
 * PUT /user/:id/follow
 */
export type PutUserFollowingRequest = {
  follow: UserID;
};

/*
 * PUT /user/:id/history
 */
export type PutUserHistoryRequestParams = { _id: UserID };

/*
 * PUT /user/:id/history
 */
export type PutUserHistoryRequest = {
  video: VideoID;
  bookmark: number;
};

/*
 * PUT /user/:id/promotion
 */
export type PutUserPromotionRequestParams = { _id: UserID };

/*
 * PUT /user/:id/promotion
 */
export type PutUserPromotionRequest = { video: VideoID };

/*
 * PUT /user/:id/settings
 */
export type PutUserSettingsRequestParams = { _id: UserID };

/*
 * PUT /user/:id/settings
 */
export type PutUserSettingsRequest = { settings: Array<UserSettings> };

/*
 * PUT /user/:id/owner/accept
 */
export type PutUserOwnerAcceptRequestParams = { _id: UserID };

/*
 * PUT /user/:id/owner/accept
 */
export type PutUserOwnerAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:id/collaboration/accept
 */
export type PutUserCollaborationAcceptRequestParams = { _id: UserID };

/*
 * PUT /user/:id/collaboration/accept
 */
export type PutUserCollaborationAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:id/admin/accept
 */
export type PutUserAdminAcceptRequestParams = { _id: UserID };

/*
 * PUT /user/:id/admin/accept
 */
export type PutUserAdminAcceptRequest = { channel: ChannelID };

/*
 * PUT /user/:id/moderation/accept
 */
export type PutUserModerationAcceptRequestParams = { _id: UserID };

/*
 * PUT /user/:id/moderation/accept
 */
export type PutUserModerationAcceptRequest = { channel: ChannelID };

/*
 * DELETE /user/:id
 */
export type DeleteUserRequestParams = { _id: UserID };

/*
 * DELETE /user/:id
 */
export type DeleteUserRequest = {};

/*
 * DELETE /user/:id/subscription
 */
export type DeleteUserSubscriptionRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/subscription
 */
export type DeleteUserSubscriptionRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/follow
 */
export type DeleteUserFollowRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/follow
 */
export type DeleteUserFollowRequest = { follow: UserID };

/*
 * DELETE /user/:id/history
 */
export type DeleteUserHistoryRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/history
 */
export type DeleteUserHistoryRequest = { video: VideoID };

/*
 * DELETE /user/:id/history/all
 */
export type DeleteUserEntireHistoryRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/history/all
 */
export type DeleteUserEntireHistoryRequest = {};

/*
 * DELETE /user/:id/promotion
 */
export type DeleteUserPromotionRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/promotion
 */
export type DeleteUserPromotionRequest = { video: VideoID };

/*
 * DELETE /user/:id/collaboration
 */
export type DeleteUserCollaborationRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/collaboration
 */
export type DeleteUserCollaborationRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/admin
 */
export type DeleteUserAdminRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/admin
 */
export type DeleteUserAdminRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/moderator
 */
export type DeleteUserModeratorRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/moderator
 */
export type DeleteUserModeratorRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/collaboration/invite
 */
export type DeleteUserCollaborationInviteRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/collaboration/invite
 */
export type DeleteUserCollaborationInviteRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/admin/invite
 */
export type DeleteUserAdminInviteRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/admin/invite
 */
export type DeleteUserAdminInviteRequest = { channel: ChannelID };

/*
 * DELETE /user/:id/moderator/invite
 */
export type DeleteUserModeratorInviteRequestParams = { _id: UserID };

/*
 * DELETE /user/:id/moderator/invite
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
 * GET /channel/{:id,:handle}
 */
export type GetChannelAccountRequest = {};

/*
 * GET /channel/:id/public
 */
export type GetChannelPublicRequest = {};

/*
 * GET /channel/:id/private
 */
export type GetChannelPrivateRequest = {};

/*
 * GET /channel/:id/content
 */
export type GetChannelContentRequest = {};

/*
 * PUT /channel/:id
 */
export type PutChannelRequest = Partial<
  Pick<IChannelAccount, "name" | "description">
>;

/*
 * PUT /channel/:id/handle
 */
export type PutChannelHandleRequest = {};

/*
 * PUT /channel/:id/avatar
 */
export type PutChannelAvatarRequest = {};

/*
 * PUT /channel/:id/banner
 */
export type PutChannelBannerRequest = {};

/*
 * PUT /channel/:id/poster
 */
export type PutChannelPosterRequest = {};

/*
 * PUT /channel/:id/settings
 */
export type PutChannelSettingsRequest = { settings: Array<ChannelSettings> };

/*
 * PUT /channel/:id/owner/invite
 */
export type PutChannelOwnerInviteRequest = { owners: Array<UserID> };

/*
 * PUT /channel/:id/collaborator/invite
 */
export type PutChannelCollaboratorInviteRequest = {
  collaborators: Array<UserID>;
};

/*
 * PUT /channel/:id/contributor/invite
 */
export type PutChannelContributorInviteRequest = {
  contributors: Array<UserID>;
};

/*
 * PUT /channel/:id/contributor/roles
 */
export type PutChannelContributorRolesRequest = {
  contributor: UserID;
  roles: Array<string>;
};

/*
 * PUT /channel/:id/admin/invite
 */
export type PutChannelAdminInviteRequest = { admins: Array<UserID> };

/*
 * PUT /channel/:id/admin/settings
 */
export type PutChannelAdminSettingsRequest = {
  admin: UserID;
  permissions: Array<AdminPermissions>;
};

/*
 * PUT /channel/:id/moderator/invite
 */
export type PutChannelModeratorInviteRequest = { moderators: Array<UserID> };

/*
 * PUT /channel/:id/moderator/settings
 */
export type PutChannelModeratorSettingsRequest = {
  moderator: UserID;
  moderations: ModerationSettings;
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
export type GetVideoRequest = {};

/*
 * GET /video/:id/listing/related
 */
export type GetVideoListingRelatedRequest = PagedRequest;

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
 * PUT /playlist/:id/content
 */
export type PutPlaylistContentRequest = Pick<IPlaylist, "videos">;

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistRequest = {};

//
// Listing Requests
// --------------------------------------------------

/*
 * GET /listing/featured/channels
 */
export type GetListingFeaturedChannelsRequest = {};

/*
 * GET /listing/videos/popular
 */
export type GetListingPopularVideosRequest = PagedRequest & {
  topic?: Topic;
  genre?: Genre;
};

/*
 * GET /listing/videos/new
 */
export type GetListingNewVideosRequest = PagedRequest & {
  topic?: Topic;
  genre?: Genre;
};
