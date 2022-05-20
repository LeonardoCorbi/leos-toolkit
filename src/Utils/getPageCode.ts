import { bioIndex, defaultMessage, shadesIndex } from '../constants/pageSourceCodes';
import { ISelected } from '../context/MenuContext';

export const getPageCode = ({ fileTitle, folderTitle }: ISelected) => {
  if (folderTitle === 'Home') return bioIndex;
  if (folderTitle === 'Projects') {
    if (fileTitle === 'pallets.tsx') return shadesIndex;
  }
  return defaultMessage;
};
