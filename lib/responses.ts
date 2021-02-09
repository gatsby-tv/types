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
  TopicBrowsable,
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
 * GET /user/:id/public
 */
export type GetUserPublicResponse = UserPublicInfo;

/*
 * GET /user/:id/private
 */
export type GetUserPrivateResponse = UserPrivateInfo;

/*
 * GET /user/:id/feeds
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
 * GET /user/:id/listing/recommended
 */
export type GetUserListingRecommendedResponse = Array<Browsable>;

/*
 * GET /user/:id/listing/subscriptions
 */
export type GetUserListingSubscriptionsResponse = Array<Video>;

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
 * PUT /user/:id/subscription
 */
export type PutUserSubscriptionResponse = {};

/*
 * PUT /user/:id/follow
 */
export type PutUserFollowResponse = {};

/*
 * PUT /user/:id/history
 */
export type PutUserHistoryResponse = {};

/*
 * PUT /user/:id/promotion
 */
export type PutUserPromotionResponse = {};

/*
 * PUT /user/:id/settings
 */
export type PutUserSettingsResponse = {};

/*
 * PUT /user/:id/owner/accept
 */
export type PutUserOwnerAcceptResponse = {};

/*
 * PUT /user/:id/collaboration/accept
 */
export type PutUserCollaborationAcceptResponse = {};

/*
 * PUT /user/:id/admin/accept
 */
export type PutUserAdminAcceptResponse = {};

/*
 * PUT /user/:id/moderator/accept
 */
export type PutUserModeratorAcceptResponse = {};

/*
 * DELETE /user/:id
 */
export type DeleteUserResponse = {};

/*
 * DELETE /user/:id/subscription
 */
export type DeleteUserSubscriptionResponse = {};

/*
 * DELETE /user/:id/follow
 */
export type DeleteUserFollowResponse = {};

/*
 * DELETE /user/:id/history
 */
export type DeleteUserHistoryResponse = {};

/*
 * DELETE /user/:id/history/all
 */
export type DeleteUserEntireHistoryResponse = {};

/*
 * DELETE /user/:id/promotion
 */
export type DeleteUserPromotionResponse = {};

/*
 * DELETE /user/:id/collaboration
 */
export type DeleteUserCollaborationResponse = {};

/*
 * DELETE /user/:id/admin
 */
export type DeleteUserAdminResponse = {};

/*
 * DELETE /user/:id/moderator
 */
export type DeleteUserModeratorResponse = {};

/*
 * DELETE /user/:id/owner/invite
 */
export type DeleteUserOwnerInviteResponse = {};

/*
 * DELETE /user/:id/collaboration/invite
 */
export type DeleteUserCollaborationInviteResponse = {};

/*
 * DELETE /user/:id/admin/invite
 */
export type DeleteUserAdminInviteResponse = {};

/*
 * DELETE /user/:id/moderator/invite
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
 * GET /channel/{:id,:handle}
 */
export type GetChannelAccountResponse = Channel;

/*
 * GET /channel/:id/public
 */
export type GetChannelPublicResponse = ChannelPublicInfo;

/*
 * GET /channel/:id/private
 */
export type GetChannelPrivateResponse = ChannelPrivateInfo;

/*
 * GET /channel/:id/content
 */
export type GetChannelContentResponse = ChannelContent;

/*
 * PUT /channel/:id
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
 * PUT /channel/:id/owner/invite
 */
export type PutChannelOwnerInviteResponse = {};

/*
 * PUT /channel/:id/collaborator/invite
 */
export type PutChannelCollaboratorInviteResponse = {};

/*
 * PUT /channel/:id/contributor/invite
 */
export type PutChannelContributorInviteResponse = {};

/*
 * PUT /channel/:id/contributor/roles
 */
export type PutChannelContributorRolesResponse = {};

/*
 * PUT /channel/:id/admin/invite
 */
export type PutChannelAdminInviteResponse = {};

/*
 * PUT /channel/:id/admin/settings
 */
export type PutChannelAdminSettingsResponse = {};

/*
 * PUT /channel/:id/moderator/invite
 */
export type PutChannelModeratorInviteResponse = {};

/*
 * PUT /channel/:id/moderator/settings
 */
export type PutChannelModeratorSettingsResponse = {};

/*
 * DELETE /channel/:id
 */
export type DeleteChannelResponse = {};

/*
 * DELETE /channel/:id/owner
 */
export type DeleteChannelOwnerResponse = {};

/*
 * DELETE /channel/:id/collaborator
 */
export type DeleteChannelCollaboratorResponse = {};

/*
 * DELETE /channel/:id/contributor
 */
export type DeleteChannelContributorResponse = {};

/*
 * DELETE /channel/:id/admin
 */
export type DeleteChannelAdminResponse = {};

/*
 * DELETE /channel/:id/moderator
 */
export type DeleteChannelModeratorResponse = {};

/*
 * DELETE /channel/:id/owner/invite
 */
export type DeleteChannelOwnerInviteResponse = {};

/*
 * DELETE /channel/:id/collaborator/invite
 */
export type DeleteChannelCollaboratorInviteResponse = {};

/*
 * DELETE /channel/:id/contributor/invite
 */
export type DeleteChannelContributorInviteResponse = {};

/*
 * DELETE /channel/:id/admin/invite
 */
export type DeleteChannelAdminInviteResponse = {};

/*
 * DELETE /channel/:id/moderator/invite
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
 * GET /video/:id/listing/related
 */
export type GetVideoListingRelatedResponse = Array<Browsable>;

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
export type GetListingFeaturedChannelsResponse = Array<Channel>;

/*
 * GET /listing/videos/popular
 */
export type GetListingPopularVideosResponse = Array<Browsable>;

/*
 * GET /listing/videos/new
 */
export type GetListingNewVideosResponse = Array<Browsable>;

/*
 * GET /listing/topics
 */
export type GetListingTopicsResponse = Array<TopicBrowsable>;
