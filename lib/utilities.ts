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
import { PaginatedResponse } from "@lib/types";

export function isPaginated<T>(
  response: T | PaginatedResponse<T>
): response is PaginatedResponse<T> {
  return (
    (response as PaginatedResponse<T>).page !== undefined &&
    (response as PaginatedResponse<T>).response !== undefined
  );
}

export function isSerialVideo(content: IVideo): content is ISerialVideo {
  return (content as ISerialVideo).playlist !== undefined;
}

export function isEpisodicVideo(content: IVideo): content is IEpisodicVideo {
  return (content as IEpisodicVideo).show !== undefined;
}

export function isBasicVideo(content: IVideo): content is IBasicVideo {
  return !isSerialVideo(content) && !isEpisodicVideo(content);
}

export function isSeasonedShow(show: ICollection): show is ISeasonedShow {
  return (show as ISeasonedShow).seasons !== undefined;
}

export function isEpisodicShow(show: ICollection): show is IEpisodicShow {
  return (show as IEpisodicShow).episodes !== undefined;
}

export function isShow(collection: ICollection): collection is IShow {
  return isSeasonedShow(collection) || isEpisodicShow(collection);
}

export function isPlaylist(collection: ICollection): collection is IPlaylist {
  return (collection as IPlaylist).videos !== undefined;
}
