import { AdminPermissions, ContentPermissions } from "@lib/permissions";

export enum UserSettings {}

export enum ChannelSettings {}

export type AdminSettings = {
  [user: string]: {
    public: boolean;
    permissions: Array<AdminPermissions>;
  };
};

export type ModerationSettings<T extends ContentPermissions | null = null> = {
  [content: string]: Array<T extends ContentPermissions ? T : ContentPermissions>;
};

export type ModeratorSettings<T extends ContentPermissions | null = null> = {
  [user: string]: {
    public: boolean;
    moderations: ModerationSettings<T>;
  };
};
