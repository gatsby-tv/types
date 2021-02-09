import {
  IVideo,
  IBasicVideo,
  ISerialVideo,
  IEpisodicVideo,
  ISeasonedShow,
  IEpisodicShow,
  IShow,
  IPlaylist,
  ICollection,
} from "@lib/entities";
import {
  Video,
  BasicVideo,
  SerialVideo,
  EpisodicVideo,
  SeasonedShow,
  EpisodicShow,
  Show,
  Playlist,
  Content,
} from "@lib/types";

/*
 * Entity Utilities
 */

export function isISerialVideo(content: IVideo): content is ISerialVideo {
  return (content as ISerialVideo).playlist !== undefined;
}

export function isIEpisodicVideo(content: IVideo): content is IEpisodicVideo {
  return (content as IEpisodicVideo).show !== undefined;
}

export function isIBasicVideo(content: IVideo): content is IBasicVideo {
  return !isISerialVideo(content) && !isIEpisodicVideo(content);
}

export function isISeasonedShow(show: ICollection): show is ISeasonedShow {
  return (show as ISeasonedShow).seasons !== undefined;
}

export function isIEpisodicShow(show: ICollection): show is IEpisodicShow {
  return (show as IEpisodicShow).episodes !== undefined;
}

export function isIShow(collection: ICollection): collection is IShow {
  return isISeasonedShow(collection) || isIEpisodicShow(collection);
}

export function isIPlaylist(collection: ICollection): collection is IPlaylist {
  return (collection as IPlaylist).videos !== undefined;
}

/*
 * Types Utilties
 */

export function isVideo(content: Content): content is Video {
  return (content as Video).content !== undefined;
}

export function isSerialVideo(content: Content): content is SerialVideo {
  return (content as SerialVideo).playlist !== undefined;
}

export function isEpisodicVideo(content: Content): content is EpisodicVideo {
  return (content as EpisodicVideo).show !== undefined;
}

export function isBasicVideo(content: Content): content is BasicVideo {
  return (
    isVideo(content) && !isSerialVideo(content) && !isEpisodicVideo(content)
  );
}

export function isSeasonedShow(content: Content): content is SeasonedShow {
  return (content as SeasonedShow).seasons !== undefined;
}

export function isEpisodicShow(content: Content): content is EpisodicShow {
  return (content as EpisodicShow).episodes !== undefined;
}

export function isShow(content: Content): content is Show {
  return isSeasonedShow(content) || isEpisodicShow(content);
}

export function isPlaylist(content: Content): content is Playlist {
  return (content as Playlist).videos !== undefined;
}
