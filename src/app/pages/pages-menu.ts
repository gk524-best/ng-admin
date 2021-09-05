export interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  group?: boolean;
  hidden?: boolean;
  children?: Array<MenuItem>;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'E-commerce',
    icon: '',
    link: '',
  },
  {
    title: 'Pages',
    group: true,
  },
  {
    title: 'test',
    children: [
      {
        title: 'test1',
        group: true,
        children: [
          {
            title: 'tc-1',
          },
          {
            title: 'tc2',
          },
        ],
      },
    ],
  },
  {
    title: 'test1',
    icon: '',
    children: [
      {
        title: 'test1-1',
      },
      {
        title: 'test1-2',
      },
    ],
  },
];
