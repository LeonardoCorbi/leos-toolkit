/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useCallback, useState, ReactElement,
} from 'react';

interface ISelected {
  folderTitle: string;
  fileTitle: string;
}

interface IMenuContext {
  selected: ISelected;
  onFileClick: (selection: ISelected) => void;
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export const MenuProvider = ({ children }: { children: ReactElement}) => {
  const [selected, setSelected] = useState<ISelected>({} as ISelected);

  const onFileClick = useCallback((selection: ISelected) => {
    setSelected(selection);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        selected,
        onFileClick,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
