import { IPost } from "./IPost";
export interface IPostEntryState extends IPost {
  showEditModal: boolean;
  showDeleteModal: boolean;
  showPost: boolean;
  isDeleted: boolean;
}
