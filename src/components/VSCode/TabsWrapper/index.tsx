import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';
import { getArchiveIcon } from '../../../Utils/getIcon';
import { tabs } from './constants/tabs';
import { Container, Tab } from './styles';

const TabsWrapper = () => (
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

export default TabsWrapper;
