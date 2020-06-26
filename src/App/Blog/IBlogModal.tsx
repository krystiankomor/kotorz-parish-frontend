import { IBlogEntry } from "./IBlogEntry";

export interface IBlogModal {
  data: IBlogEntry;
  showModal: boolean;
  hideModal: () => void;
  afterUpdate: (BlogEntry: IBlogEntry) => void;
}
