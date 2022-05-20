/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useCallback,
  useState,
  ReactElement,
  useEffect,
} from 'react';
import useStorage from '../hooks/usePersistedState';

export interface ISelected {
  folderTitle: string;
  fileTitle: string;
}

interface IMenuContext {
  selected: ISelected;
  isMenuOpened: boolean;
  isMobile: boolean;
  isCodeView: boolean;
  // eslint-disable-next-line no-unused-vars
  onFileClick: (selection: ISelected) => void;
  toggleMenu: () => void;
  toggleIsCodeView: () => void;
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export const MenuProvider = ({ children }: { children: ReactElement}) => {
  const [selected, setSelected] = useState<ISelected>({
    fileTitle: 'index.tsx',
    folderTitle: 'Home',
  });
  const [isMenuOpened, setIsOpened] = useStorage('@LC:isMenuOpened', false);
  const [isCodeView, handleIsCodeView] = useStorage('@LC:isCodeView', false);
  const [isMobile, setIsMobile] = useState(false);

  const onFileClick = useCallback((selection: ISelected) => {
    setSelected(selection);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);

  const toggleIsCodeView = () => {
    handleIsCodeView((prevState) => !prevState);
  };

  useEffect(() => {
    setIsMobile(window.screen.width < 750);
    if (!(window.screen.width < 750)) {
      setIsOpened(false);
    }
  }, [window.screen.width]);

  return (
    <MenuContext.Provider
      value={{
        selected,
        onFileClick,
        toggleMenu,
        isMenuOpened,
        isMobile,
        isCodeView,
        toggleIsCodeView,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
