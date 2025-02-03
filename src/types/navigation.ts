export interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

export type DocType = 'cvs' | 'pos' | 'vsp';