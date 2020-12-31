import { IPFSContent } from "../types";
import { IProvider } from "./provider";

export interface IVideo {
  title: string;
  description: string;
  views: number;
  dateUploaded: Date;
  duration: number;
  tags: string[];
  topic: string;
  genre: string;
  hash: IPFSContent;
  thumbnail: IPFSContent;
  // The channel, show, series, or sequence this video is uploaded to
  provider: IProvider;
}
