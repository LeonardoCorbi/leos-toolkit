import { IData } from '../../TreeView';
import { externalLinkIcon } from './icons';

export const exploreItems: IData[] = [
  {
    title: 'Home',
    files: [
      {
        title: 'index.tsx',
        url: '/Home/index.tsx',
      },
    ],
  },
  {
    title: 'public',
    files: [
      {
        title: 'linked-in.ts',
        url: 'https://www.linkedin.com',
        external: true,
        auxIcon: externalLinkIcon,
      },
      {
        title: 'email.ts',
        url: 'mailto:oi@leonardocorbi.dev',
        external: true,
        auxIcon: externalLinkIcon,
      },
    ],
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
    ],
  },
];
