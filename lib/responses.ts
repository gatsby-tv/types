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
export type GetAuthUserExistsResponse = Record<string, never>;

/*
 * GET /auth/user/handle/:handle/exists
 */
export type GetAuthUserHandleExistsResponse = Record<string, never>;

/*
 * GET /auth/channel/handle/:handle/exists
 */
export type GetAuthChannelHandleExistsResponse = Record<string, never>;

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
export type PutUserResponse = Record<string, never>;

/*
 * PUT /user/:id/handle
 */
export type PutUserHandleResponse = Record<string, never>;

/*
 * PUT /user/:id/avatar
 */
export type PutUserAvatarResponse = Record<string, never>;

/*
 * PUT /user/:id/banner
 */
export type PutUserBannerResponse = Record<string, never>;

/*
 * PUT /user/:handle/subscription
 */
export type PutUserSubscriptionResponse = Record<string, never>;

/*
 * PUT /user/:handle/follow
 */
export type PutUserFollowResponse = Record<string, never>;

/*
 * PUT /user/:handle/history
 */
export type PutUserHistoryResponse = Record<string, never>;

/*
 * PUT /user/:id/promotion
 */
export type PutUserPromotionResponse = Record<string, never>;

/*
 * PUT /user/:handle/settings
 */
export type PutUserSettingsResponse = Record<string, never>;

/*
 * PUT /user/:handle/owner/accept
 */
export type PutUserOwnerAcceptResponse = Record<string, never>;

/*
 * PUT /user/:handle/collaboration/accept
 */
export type PutUserCollaborationAcceptResponse = Record<string, never>;

/*
 * PUT /user/:handle/admin/accept
 */
export type PutUserAdminAcceptResponse = Record<string, never>;

/*
 * PUT /user/:handle/moderator/accept
 */
export type PutUserModeratorAcceptResponse = Record<string, never>;

/*
 * DELETE /user/:handle
 */
export type DeleteUserResponse = Record<string, never>;

/*
 * DELETE /user/:handle/subscription
 */
export type DeleteUserSubscriptionResponse = Record<string, never>;

/*
 * DELETE /user/:handle/follow
 */
export type DeleteUserFollowResponse = Record<string, never>;

/*
 * DELETE /user/:handle/history
 */
export type DeleteUserHistoryResponse = Record<string, never>;

/*
 * DELETE /user/:handle/history/all
 */
export type DeleteUserEntireHistoryResponse = Record<string, never>;

/*
 * DELETE /user/:id/promotion
 */
export type DeleteUserPromotionResponse = Record<string, never>;

/*
 * DELETE /user/:handle/collaboration
 */
export type DeleteUserCollaborationResponse = Record<string, never>;

/*
 * DELETE /user/:handle/admin
 */
export type DeleteUserAdminResponse = Record<string, never>;

/*
 * DELETE /user/:handle/moderator
 */
export type DeleteUserModeratorResponse = Record<string, never>;

/*
 * DELETE /user/:handle/owner/invite
 */
export type DeleteUserOwnerInviteResponse = Record<string, never>;

/*
 * DELETE /user/:handle/collaboration/invite
 */
export type DeleteUserCollaborationInviteResponse = Record<string, never>;

/*
 * DELETE /user/:handle/admin/invite
 */
export type DeleteUserAdminInviteResponse = Record<string, never>;

/*
 * DELETE /user/:handle/moderator/invite
 */
export type PutUserModeratorInviteResponse = Record<string, never>;

//
// Channel Responses
// --------------------------------------------------

/*
 * POST /channel
 */
export type PostChannelResponse = Record<string, never>;

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
export type PutChannelResponse = Record<string, never>;

/*
 * PUT /channel/:id/handle
 */
export type PutChannelHandleResponse = Record<string, never>;

/*
 * PUT /channel/:id/avatar
 */
export type PutChannelAvatarResponse = Record<string, never>;

/*
 * PUT /channel/:id/banner
 */
export type PutChannelBannerResponse = Record<string, never>;

/*
 * PUT /channel/:id/poster
 */
export type PutChannelPosterResponse = Record<string, never>;

/*
 * PUT /channel/:channel/owner/invite
 */
export type PutChannelOwnerInviteResponse = Record<string, never>;

/*
 * PUT /channel/:channel/collaborator/invite
 */
export type PutChannelCollaboratorInviteResponse = Record<string, never>;

/*
 * PUT /channel/:channel/contributor/invite
 */
export type PutChannelContributorInviteResponse = Record<string, never>;

/*
 * PUT /channel/:channel/contributor/roles
 */
export type PutChannelContributorRolesResponse = Record<string, never>;

/*
 * PUT /channel/:channel/admin/invite
 */
export type PutChannelAdminInviteResponse = Record<string, never>;

/*
 * PUT /channel/:channel/admin/settings
 */
export type PutChannelAdminSettingsResponse = Record<string, never>;

/*
 * PUT /channel/:channel/moderator/invite
 */
export type PutChannelModeratorInviteResponse = Record<string, never>;

/*
 * PUT /channel/:channel/moderator/settings
 */
export type PutChannelModeratorSettingsResponse = Record<string, never>;

/*
 * DELETE /channel/:channel
 */
export type DeleteChannelResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/owner
 */
export type DeleteChannelOwnerResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/collaborator
 */
export type DeleteChannelCollaboratorResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/contributor
 */
export type DeleteChannelContributorResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/admin
 */
export type DeleteChannelAdminResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/moderator
 */
export type DeleteChannelModeratorResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/owner/invite
 */
export type DeleteChannelOwnerInviteResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/collaborator/invite
 */
export type DeleteChannelCollaboratorInviteResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/contributor/invite
 */
export type DeleteChannelContributorInviteResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/admin/invite
 */
export type DeleteChannelAdminInviteResponse = Record<string, never>;

/*
 * DELETE /channel/:channel/moderator/invite
 */
export type DeleteChannelModeratorInviteResponse = Record<string, never>;

//
// Video Responses
// --------------------------------------------------

/*
 * POST /video
 */
export type PostVideoResponse = Record<string, never>;

/*
 * GET /video/:id
 */
export type GetVideoResponse = Video;

/*
 * PUT /video/:id
 */
export type PutVideoResponse = Record<string, never>;

/*
 * PUT /video/:id/view
 */
export type PutVideoViewResponse = Record<string, never>;

/*
 * PUT /video/:id/content
 */
export type PutVideoContentResponse = Record<string, never>;

/*
 * PUT /video/:id/report
 */
export type PutVideoReportResponse = Record<string, never>;

/*
 * DELETE /video/:id
 */
export type DeleteVideoResponse = Record<string, never>;

//
// Show Responses
// --------------------------------------------------

/*
 * POST /show
 */
export type PostShowResponse = Record<string, never>;

/*
 * POST /show/:id/episode
 */
export type PostShowEpisodeResponse = Record<string, never>;

/*
 * GET /show/:id
 */
export type GetShowResponse = Show;

/*
 * PUT /show/:id
 */
export type PutShowResponse = Record<string, never>;

/*
 * PUT /show/:id/episode
 */
export type PutShowEpisodeResponse = Record<string, never>;

/*
 * PUT /show/:id/content
 */
export type PutShowContentResponse = Record<string, never>;

/*
 * DELETE /show/:id
 */
export type DeleteShowResponse = Record<string, never>;

//
// Playlist Responses
// --------------------------------------------------

/*
 * POST /playlist
 */
export type PostPlaylistResponse = Record<string, never>;

/*
 * GET /playlist/:id
 */
export type GetPlaylistResponse = Playlist;

/*
 * PUT /playlist/:id
 */
export type PutPlaylistResponse = Record<string, never>;

/*
 * DELETE /playlist/:id
 */
export type DeletePlaylistResponse = Record<string, never>;

/*
 * DELETE /playlist/:id/video
 */
export type DeletePlaylistVideoResponse = Record<string, never>;

//
// Listing Responses
// --------------------------------------------------

/*
 * GET /listing/featured/channels
 */
export type GetListingFeaturedChannelsResponse = { content: Array<Browsable> };

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
