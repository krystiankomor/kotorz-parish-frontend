import { IPost } from "./IPost"

export interface IPostEntry extends IPost {
  onDelete: () => void;
}
