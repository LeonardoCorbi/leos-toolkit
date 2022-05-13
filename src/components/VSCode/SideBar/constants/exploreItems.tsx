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
          url: '/pallets',
        },
        {
          title: 'dimensions.tsx',
          url: '/dimensions',
        },
        {
          title: 'rem.tsx',
          url: '/REM',
        },
        {
          title: 'pixel-perfect.tsx',
          url: '/pixelPerfect',
        },
        {
          title: 'font-test.tsx',
          url: '/fontTest',
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
