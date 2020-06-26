import { IBlogEntry } from "./IBlogEntry";

export interface IBlogState extends IBlogEntry {
  showEditModal: boolean;
  openShowMore: boolean;
}
