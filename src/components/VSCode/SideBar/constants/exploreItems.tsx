import { IData } from '../../TreeView';

export const exploreItems: IData = {
  title: 'Frontend',
  folders: [
    {
      title: 'Home',
      files: [
        {
          title: 'index.tsx',
          url: '/',
        },
      ],
    },
    {
      title: 'public',
    },
    {
      title: 'Projects',
      files: [
        {
          title: 'pallets.tsx',
          url: '/Projects/pallets.tsx',
        },
        {
          title: 'dimensions.tsx',
          url: '/Projects/dimensions.tsx',
        },
        {
          title: 'rem.tsx',
          url: '/Projects/rem.tsx',
        },
        {
          title: 'pixel-perfect.tsx',
          url: '/Projects/pixel-perfect.tsx',
        },
        {
          title: 'font-test.tsx',
          url: '/Projects/font-test.tsx',
        },
      ],
    },
    {
      title: 'Scholarship',
    },
  ],
  files: [
  ],
};
