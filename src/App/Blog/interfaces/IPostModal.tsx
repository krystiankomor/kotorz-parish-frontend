import { IPostEntry } from "./IPostEntry";
import { IPost } from "./IPost";

export interface IPostModal {
  post: IPost;
  showModal: boolean;
  onHide: () => void;
  afterUpdate: (BlogEntry: IPostEntry) => void;
}
