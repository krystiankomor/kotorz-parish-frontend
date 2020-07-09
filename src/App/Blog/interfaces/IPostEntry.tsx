import { IPost } from "./IPost"
export interface IPostEntry {
  data: IPost;
  onDelete: () => void;
}
