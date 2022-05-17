import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';
import { getFileIcon } from '../../../Utils/getIcon';
import { exploreItems } from '../SideBar/constants/exploreItems';
import { IData } from '../TreeView';
import { Container, HamburgerMenu, Tab } from './styles';

interface ITabs {
  fileTitle: string;
  folderTitle: string;
  url: string;
}

const TabsWrapper = () => {
  const tabs: ITabs[] = [];

  const handleExploreItems = (item: IData[]) => {
    item?.forEach(({ title: folderTitle, files, folders }) => {
      files?.forEach(({ title: fileTitle, url, external }) => {
        if (!external) {
          tabs.push({
            fileTitle,
            folderTitle,
            url,
          });
        }
      });
      handleExploreItems(folders);
    });
  };

  handleExploreItems(exploreItems);
  const {
    selected, onFileClick, isMenuOpened, toggleMenu,
  } = useMenu();

  return (
    <nav style={{ width: '100%' }}>
      <Container isMenuOpened={isMenuOpened}>
        {isMenuOpened && <HamburgerMenu onClick={toggleMenu} />}
        {tabs.map(({ fileTitle, folderTitle, url = '/' }) => {
          const { alt, src } = getFileIcon(fileTitle);

          const isSelected = useCallback(() => {
            if (folderTitle === selected.folderTitle && fileTitle === selected.fileTitle) {
              return 'selected';
            }
            return '';
          }, [selected]);

          const onClick = () => {
            onFileClick({ fileTitle, folderTitle });
          };

          return (
            <Link to={url} key={`${folderTitle}/${fileTitle}`}>
              <Tab className={isSelected()} onClick={onClick}>
                <img src={src} alt={alt} />
                <p>{fileTitle}</p>
                <p>{folderTitle}</p>
              </Tab>
            </Link>
          );
        })}
      </Container>
    </nav>
  );
};

export default TabsWrapper;
