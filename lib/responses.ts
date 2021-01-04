import {
  IChannelAccount,
  IChannelPublicInfo,
  IChannelPrivateInfo,
  IChannelContent,
  IUserAccount,
  IUserPublicInfo,
  IUserPrivateInfo,
  IUserContentFeeds,
  IVideo,
  IShow,
  IPlaylist,
} from "@lib/entities";
import { JWT } from "@lib/types";
import { WestEggError } from "@lib/errors";

export type ErrorResponse = { error: WestEggError };

//
// Authentication Responses
// --------------------------------------------------

/*
 * POST /auth/signup
 */
export type SignupResponse = { token: JWT };

/*
 * POST /auth/login
 */
export type LoginResponse = { token: JWT };

//
// User Responses
// --------------------------------------------------

/*
 * GET /user/:id
 */
export type GetUserAccountResponse = IUserAccount;

/*
 * GET /user/:id/public
 */
export type GetUserPublicResponse = IUserPublicInfo;

/*
 * GET /user/:id/private
 */
export type GetUserPrivateResponse = IUserPrivateInfo;

/*
 * GET /user/:id/feeds
 */
export type GetUserFeedsResponse = IUserContentFeeds;

/*
 * PUT /user/:id
 */
export type PutUserResponse = null;

/*
 * PUT /user/:id/subscription
 */
export type PutUserSubscriptionResponse = null;

/*
 * PUT /user/:id/follow
 */
export type PutUserFollowResponse = null;

/*
 * PUT /user/:id/history
 */
export type PutUserHistoryResponse = null;

/*
 * PUT /user/:id/settings
 */
export type PutUserSettingsResponse = null;

/*
 * PUT /user/:id/owner/accept
 */
export type PutUserOwnerAcceptResponse = null;

/*
 * PUT /user/:id/collaboration/accept
 */
export type PutUserCollaborationAcceptResponse = null;

/*
 * PUT /user/:id/admin/accept
 */
export type PutUserAdminAcceptResponse = null;

/*
 * PUT /user/:id/moderator/accept
 */
export type PutUserModeratorAcceptResponse = null;

/*
 * DELETE /user/:id
 */
export type DeleteUserResponse = null;

/*
 * DELETE /user/:id/subscription
 */
export type DeleteUserSubscriptionResponse = null;

/*
 * DELETE /user/:id/follow
 */
export type DeleteUserFollowResponse = null;

/*
 * DELETE /user/:id/history
 */
export type DeleteUserHistoryResponse = null;

/*
 * DELETE /user/:id/history/all
 */
export type DeleteUserEntireHistoryResponse = null;

/*
 * DELETE /user/:id/collaboration
 */
export type DeleteUserCollaborationResponse = null;

/*
 * DELETE /user/:id/admin
 */
export type DeleteUserAdminResponse = null;

/*
 * DELETE /user/:id/moderator
 */
export type DeleteUserModeratorResponse = null;

/*
 * DELETE /user/:id/owner/invite
 */
export type DeleteUserOwnerInviteResponse = null;

/*
 * DELETE /user/:id/collaboration/invite
 */
export type DeleteUserCollaborationInviteResponse = null;

/*
 * DELETE /user/:id/admin/invite
 */
export type DeleteUserAdminInviteResponse = null;

/*
 * DELETE /user/:id/moderator/invite
 */
export type PutUserModeratorInviteResponse = null;

//
// Channel Responses
// --------------------------------------------------

/*
 * POST /channel
 */
export type PostChannelResponse = null;

/*
 * GET /channel/:id
 */
export type GetChannelAccountResponse = IChannelAccount;

/*
 * GET /channel/:id/public
 */
export type GetChannelPublicResponse = IChannelPublicInfo;

/*
 * GET /channel/:id/private
 */
export type GetChannelPrivateResponse = IChannelPrivateInfo;

/*
 * GET /channel/:id/content
 */
export type GetChannelContentResponse = IChannelContent;

/*
 * PUT /channel/:id
 */
export type PutChannelResponse = null;

/*
 * PUT /channel/:id/owner/invite
 */
export type PutChannelOwnerInviteResponse = null;

/*
 * PUT /channel/:id/collaborator/invite
 */
export type PutChannelCollaboratorInviteResponse = null;

/*
 * PUT /channel/:id/contributor/invite
 */
export type PutChannelContributorInviteResponse = null;

/*
 * PUT /channel/:id/contributor/roles
 */
export type PutChannelContributorRolesResponse = null;

/*
 * PUT /channel/:id/admin/invite
 */
export type PutChannelAdminInviteResponse = null;

/*
 * PUT /channel/:id/admin/settings
 */
export type PutChannelAdminSettingsResponse = null;

/*
 * PUT /channel/:id/moderator/invite
 */
export type PutChannelModeratorInviteResponse = null;

/*
 * PUT /channel/:id/moderator/settings
 */
export type PutChannelModeratorSettingsResponse = null;

/*
 * DELETE /channel/:id
 */
export type DeleteChannelResponse = null;

/*
 * DELETE /channel/:id/owner
 */
export type DeleteChannelOwnerResponse = null;

/*
 * DELETE /channel/:id/collaborator
 */
export type DeleteChannelCollaboratorResponse = null;

/*
 * DELETE /channel/:id/contributor
 */
export type DeleteChannelContributorResponse = null;

/*
 * DELETE /channel/:id/admin
 */
export type DeleteChannelAdminResponse = null;

/*
 * DELETE /channel/:id/moderator
 */
export type DeleteChannelModeratorResponse = null;

/*
 * DELETE /channel/:id/owner/invite
 */
export type DeleteChannelOwnerInviteResponse = null;

/*
 * DELETE /channel/:id/collaborator/invite
 */
export type DeleteChannelCollaboratorInviteResponse = null;

/*
 * DELETE /channel/:id/contributor/invite
 */
export type DeleteChannelContributorInviteResponse = null;

/*
 * DELETE /channel/:id/admin/invite
 */
export type DeleteChannelAdminInviteResponse = null;

/*
 * DELETE /channel/:id/moderator/invite
 */
export type DeleteChannelModeratorInviteResponse = null;

//
// Video Responses
// --------------------------------------------------

/*
 * POST /video
 */
export type PostVideoResponse = null;

/*
 * GET /video/:id
 */
export type GetVideoResponse = IVideo;

/*
 * PUT /video/:id
 */
export type PutVideoResponse = null;

/*
 * PUT /video/:id/view
 */
export type PutVideoViewResponse = null;

/*
 * PUT /video/:id/content
 */
export type PutVideoContentResponse = null;

/*
 * PUT /video/:id/report
 */
export type PutVideoReportResponse = null;

/*
 * DELETE /video/:id
 */
export type DeleteVideoResponse = null;

//
// Show Responses
// --------------------------------------------------

/*
 * POST /show
 */
export type PostShowResponse = null;

/*
 * POST /show/:id/episode
 */
export type PostShowEpisodeResponse = null;

/*
 * GET /show/:id
 */
export type GetShowResponse = IShow;

/*
 * PUT /show/:id
 */
export type PutShowResponse = null;

/*
 * PUT /show/:id/episode
 */
export type PutShowEpisodeResponse = null;

/*
 * PUT /show/:id/content
 */
export type PutShowContentResponse = null;

/*
 * DELETE /show/:id
 */
export type DeleteShowResponse = null;

//
// Playlist Responses
// --------------------------------------------------

/*
 * POST /playlist
 */
export type PostPlaylistResponse = null;

/*
 * GET /playlist/:id
 */
export type GetPlaylistResponse = IPlaylist;

/*
 * PUT /playlist/:id
 */
export type PutPlaylistResponse = null;

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistResponse = null;

/*
 * DELETE /playlist/:id/video
 */
export type DeletePlaylistVideoResponse = null;
