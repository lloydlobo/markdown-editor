export interface INote {
  id: number;
  nanoid: string;
  title: string;
  content: string;
  createdAt: string;
}

export type NavItemProps = {
  page: string;
  pathname: string;
};

