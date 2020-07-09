import { IPostEntry } from "./IPostEntry";
import { IPost } from "./IPost";

export interface IPostModal {
  post: IPost | undefined;
  showModal: boolean;
  onHide: () => void;
  afterUpdate: (BlogEntry: IPost) => void;
}
