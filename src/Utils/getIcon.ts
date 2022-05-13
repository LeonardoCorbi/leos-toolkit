import {
  tsIcon, htmlIcon, tsxIcon, gitIcon, folder, homeFolder, srcFolder, publicFolder, pagesFolder,
} from '../components/VSCode/SideBar/constants/icons';

export const getArchiveIcon = (title: string) => {
  const extension = title.split('.')[1];
  if (extension === 'ts') return { src: tsIcon, alt: 'Typescript' };
  if (extension === 'tsx') return { src: tsxIcon, alt: 'Typescript React' };
  if (extension === 'html') return { src: htmlIcon, alt: 'HTML' };
  if (extension === 'github') return { src: gitIcon, alt: 'Git' };
  return { src: '', alt: '' };
};

export const getFolderIcon = (title: string) => {
  if (title === 'Home') return { fSrc: homeFolder, fAlt: 'Home' };
  if (title === 'Pages') return { fSrc: pagesFolder, fAlt: 'Pages' };
  if (title === 'public') return { fSrc: publicFolder, fAlt: 'public' };
  if (title === 'src') return { fSrc: srcFolder, fAlt: 'src' };
  return { fSrc: folder, fAlt: 'Sample' };
};
