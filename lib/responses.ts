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
 * GET /user/:handle
 */
export type GetUserAccountResponse = IUserAccount;

/*
 * GET /user/:handle/public
 */
export type GetUserPublicResponse = IUserPublicInfo;

/*
 * GET /user/:handle/private
 */
export type GetUserPrivateResponse = IUserPrivateInfo;

/*
 * GET /user/:handle/feeds
 */
export type GetUserFeedsResponse = IUserContentFeeds;

/*
 * PUT /user/:handle
 */
export type PutUserResponse = {};

/*
 * PUT /user/:handle/subscription
 */
export type PutUserSubscriptionResponse = {};

/*
 * PUT /user/:handle/follow
 */
export type PutUserFollowResponse = {};

/*
 * PUT /user/:handle/history
 */
export type PutUserHistoryResponse = {};

/*
 * PUT /user/:handle/settings
 */
export type PutUserSettingsResponse = {};

/*
 * PUT /user/:handle/owner/accept
 */
export type PutUserOwnerAcceptResponse = {};

/*
 * PUT /user/:handle/collaboration/accept
 */
export type PutUserCollaborationAcceptResponse = {};

/*
 * PUT /user/:handle/admin/accept
 */
export type PutUserAdminAcceptResponse = {};

/*
 * PUT /user/:handle/moderator/accept
 */
export type PutUserModeratorAcceptResponse = {};

/*
 * DELETE /user/:handle
 */
export type DeleteUserResponse = {};

/*
 * DELETE /user/:handle/subscription
 */
export type DeleteUserSubscriptionResponse = {};

/*
 * DELETE /user/:handle/follow
 */
export type DeleteUserFollowResponse = {};

/*
 * DELETE /user/:handle/history
 */
export type DeleteUserHistoryResponse = {};

/*
 * DELETE /user/:handle/history/all
 */
export type DeleteUserEntireHistoryResponse = {};

/*
 * DELETE /user/:handle/collaboration
 */
export type DeleteUserCollaborationResponse = {};

/*
 * DELETE /user/:handle/admin
 */
export type DeleteUserAdminResponse = {};

/*
 * DELETE /user/:handle/moderator
 */
export type DeleteUserModeratorResponse = {};

/*
 * DELETE /user/:handle/owner/invite
 */
export type DeleteUserOwnerInviteResponse = {};

/*
 * DELETE /user/:handle/collaboration/invite
 */
export type DeleteUserCollaborationInviteResponse = {};

/*
 * DELETE /user/:handle/admin/invite
 */
export type DeleteUserAdminInviteResponse = {};

/*
 * DELETE /user/:handle/moderator/invite
 */
export type PutUserModeratorInviteResponse = {};

//
// Channel Responses
// --------------------------------------------------

/*
 * POST /channel
 */
export type PostChannelResponse = {};

/*
 * GET /channel/:channel
 */
export type GetChannelAccountResponse = IChannelAccount;

/*
 * GET /channel/:channel/public
 */
export type GetChannelPublicResponse = IChannelPublicInfo;

/*
 * GET /channel/:channel/private
 */
export type GetChannelPrivateResponse = IChannelPrivateInfo;

/*
 * GET /channel/:channel/content
 */
export type GetChannelContentResponse = IChannelContent;

/*
 * PUT /channel/:channel
 */
export type PutChannelResponse = {};

/*
 * PUT /channel/:channel/owner/invite
 */
export type PutChannelOwnerInviteResponse = {};

/*
 * PUT /channel/:channel/collaborator/invite
 */
export type PutChannelCollaboratorInviteResponse = {};

/*
 * PUT /channel/:channel/contributor/invite
 */
export type PutChannelContributorInviteResponse = {};

/*
 * PUT /channel/:channel/contributor/roles
 */
export type PutChannelContributorRolesResponse = {};

/*
 * PUT /channel/:channel/admin/invite
 */
export type PutChannelAdminInviteResponse = {};

/*
 * PUT /channel/:channel/admin/settings
 */
export type PutChannelAdminSettingsResponse = {};

/*
 * PUT /channel/:channel/moderator/invite
 */
export type PutChannelModeratorInviteResponse = {};

/*
 * PUT /channel/:channel/moderator/settings
 */
export type PutChannelModeratorSettingsResponse = {};

/*
 * DELETE /channel/:channel
 */
export type DeleteChannelResponse = {};

/*
 * DELETE /channel/:channel/owner
 */
export type DeleteChannelOwnerResponse = {};

/*
 * DELETE /channel/:channel/collaborator
 */
export type DeleteChannelCollaboratorResponse = {};

/*
 * DELETE /channel/:channel/contributor
 */
export type DeleteChannelContributorResponse = {};

/*
 * DELETE /channel/:channel/admin
 */
export type DeleteChannelAdminResponse = {};

/*
 * DELETE /channel/:channel/moderator
 */
export type DeleteChannelModeratorResponse = {};

/*
 * DELETE /channel/:channel/owner/invite
 */
export type DeleteChannelOwnerInviteResponse = {};

/*
 * DELETE /channel/:channel/collaborator/invite
 */
export type DeleteChannelCollaboratorInviteResponse = {};

/*
 * DELETE /channel/:channel/contributor/invite
 */
export type DeleteChannelContributorInviteResponse = {};

/*
 * DELETE /channel/:channel/admin/invite
 */
export type DeleteChannelAdminInviteResponse = {};

/*
 * DELETE /channel/:channel/moderator/invite
 */
export type DeleteChannelModeratorInviteResponse = {};

//
// Video Responses
// --------------------------------------------------

/*
 * POST /video
 */
export type PostVideoResponse = {};

/*
 * GET /video/:id
 */
export type GetVideoResponse = IVideo;

/*
 * PUT /video/:id
 */
export type PutVideoResponse = {};

/*
 * PUT /video/:id/view
 */
export type PutVideoViewResponse = {};

/*
 * PUT /video/:id/content
 */
export type PutVideoContentResponse = {};

/*
 * PUT /video/:id/report
 */
export type PutVideoReportResponse = {};

/*
 * DELETE /video/:id
 */
export type DeleteVideoResponse = {};

//
// Show Responses
// --------------------------------------------------

/*
 * POST /show
 */
export type PostShowResponse = {};

/*
 * POST /show/:id/episode
 */
export type PostShowEpisodeResponse = {};

/*
 * GET /show/:id
 */
export type GetShowResponse = IShow;

/*
 * PUT /show/:id
 */
export type PutShowResponse = {};

/*
 * PUT /show/:id/episode
 */
export type PutShowEpisodeResponse = {};

/*
 * PUT /show/:id/content
 */
export type PutShowContentResponse = {};

/*
 * DELETE /show/:id
 */
export type DeleteShowResponse = {};

//
// Playlist Responses
// --------------------------------------------------

/*
 * POST /playlist
 */
export type PostPlaylistResponse = {};

/*
 * GET /playlist/:id
 */
export type GetPlaylistResponse = IPlaylist;

/*
 * PUT /playlist/:id
 */
export type PutPlaylistResponse = {};

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistResponse = {};

/*
 * DELETE /playlist/:id/video
 */
export type DeletePlaylistVideoResponse = {};
