import {
  Token,
  Channel,
  ChannelPublicInfo,
  ChannelPrivateInfo,
  ChannelContent,
  User,
  UserPublicInfo,
  UserPrivateInfo,
  UserContentFeeds,
  UserHistory,
  UserPromotions,
  Video,
  Browsable,
  Show,
  Playlist,
} from "@lib/types";
import { WestEggError } from "@lib/errors";

export type ErrorResponse = { error: WestEggError };

//
// Authentication Responses
// --------------------------------------------------

/*
 * POST /auth/signup
 */
export type PostAuthSignupResponse = { token: Token };

/*
 * GET /auth/user/:id
 */
export type GetAuthUserResponse = { token: Token };

/*
 * GET /auth/user/:id/exists
 */
export type GetAuthUserExistsResponse = {};

/*
 * GET /auth/user/handle/:handle/exists
 */
export type GetAuthUserHandleExistsResponse = {};

/*
 * GET /auth/channel/handle/:handle/exists
 */
export type GetAuthChannelHandleExistsResponse = {};

//
// User Responses
// --------------------------------------------------

/*
 * GET /user/{:id,:handle}
 */
export type GetUserAccountResponse = User;

/*
 * GET /user/:handle/public
 */
export type GetUserPublicResponse = UserPublicInfo;

/*
 * GET /user/:handle/private
 */
export type GetUserPrivateResponse = UserPrivateInfo;

/*
 * GET /user/:handle/feeds
 */
export type GetUserFeedsResponse = UserContentFeeds;

/*
 * GET /user/:id/history
 */
export type GetUserHistoryResponse = UserHistory;

/*
 * GET /user/:id/promotions
 */
export type GetUserPromotionsResponse = UserPromotions;

/*
 * PUT /user/:id
 */
export type PutUserResponse = {};

/*
 * PUT /user/:id/handle
 */
export type PutUserHandleResponse = {};

/*
 * PUT /user/:id/avatar
 */
export type PutUserAvatarResponse = {};

/*
 * PUT /user/:id/banner
 */
export type PutUserBannerResponse = {};

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
 * PUT /user/:id/promotion
 */
export type PutUserPromotionResponse = {};

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
 * DELETE /user/:id/promotion
 */
export type DeleteUserPromotionResponse = {};

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
export type GetChannelAccountResponse = Channel;

/*
 * GET /channel/:channel/public
 */
export type GetChannelPublicResponse = ChannelPublicInfo;

/*
 * GET /channel/:channel/private
 */
export type GetChannelPrivateResponse = ChannelPrivateInfo;

/*
 * GET /channel/:channel/content
 */
export type GetChannelContentResponse = ChannelContent;

/*
 * PUT /channel/:channel
 */
export type PutChannelResponse = {};

/*
 * PUT /channel/:id/handle
 */
export type PutChannelHandleResponse = {};

/*
 * PUT /channel/:id/avatar
 */
export type PutChannelAvatarResponse = {};

/*
 * PUT /channel/:id/banner
 */
export type PutChannelBannerResponse = {};

/*
 * PUT /channel/:id/poster
 */
export type PutChannelPosterResponse = {};

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
export type GetVideoResponse = Video;

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
export type GetShowResponse = Show;

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
export type GetPlaylistResponse = Playlist;

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

//
// Listing Responses
// --------------------------------------------------

/*
 * GET /listing/featured/channels
 */
export type GetListingFeaturedChannelsResponse = { channels: Array<Channel> };

/*
 * GET /listing/videos/recommended
 */
export type GetListingRecommendedVideosResponse = { content: Array<Browsable> };

/*
 * GET /listing/videos/popular
 */
export type GetListingPopularVideosResponse = { content: Array<Browsable> };

/*
 * GET /listing/videos/new
 */
export type GetListingNewVideosResponse = { content: Array<Browsable> };

/*
 * GET /listing/subscriptions
 */
export type GetListingSubscriptionsResponse = { content: Array<Browsable> };

/*
 * GET /listing/topics
 */
export type GetListingTopicsResponse = {
  topics: Array<{ topic: string; content: Array<Browsable> }>;
};
