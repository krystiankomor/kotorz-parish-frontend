export interface IPost {
  id: number | undefined;
  title: string;
  slug: string;
  date: Date;
  body: string;
  extraBody: string;
}
