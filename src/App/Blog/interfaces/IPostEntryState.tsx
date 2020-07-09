import { IPostEntry } from "./IPostEntry";

export interface IPostEntryState extends IPostEntry {
  showEditModal: boolean;
  showDeleteModal: boolean;
  openShowMore: boolean;
}
