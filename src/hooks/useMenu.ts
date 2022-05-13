import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

export const useMenu = () => {
  const menu = useContext(MenuContext);
  return menu;
};
