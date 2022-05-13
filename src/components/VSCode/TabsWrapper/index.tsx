import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';
import { getArchiveIcon } from '../../../Utils/getIcon';
import { exploreItems } from '../SideBar/constants/exploreItems';
import { IData } from '../TreeView';
import { Container, Tab } from './styles';

interface ITabs {
  fileTitle: string;
  folderTitle: string;
  url: string;
}

const TabsWrapper = () => {
  const tabs: ITabs[] = [];

  const handleExploreItems = (item: IData[]) => {
    item?.forEach(({ title: folderTitle, files, folders }) => {
      files?.forEach(({ title: fileTitle, url }) => {
        tabs.push({
          fileTitle,
          folderTitle,
          url,
        });
      });
      handleExploreItems(folders);
    });
  };

  handleExploreItems(exploreItems);

  return (
    <nav style={{ width: '100%' }}>
      <Container>
        {tabs.map(({ fileTitle, folderTitle, url = '/' }) => {
          const { alt, src } = getArchiveIcon(fileTitle);
          const { selected, onFileClick } = useMenu();

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
            <Link to={url}>
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
