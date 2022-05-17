/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';
import { getFileIcon, getFolderIcon } from '../../../Utils/getIcon';
import {
  Container,
  Content,
  Details,
  File,
  Summary,
} from './styles';

export interface IData {
  title?: string;
  files?: FileType[];
  folders?: IData[];
}

type FileType = Omit<IData, 'files' | 'folders'> & {
  url?: string;
  external?: boolean
  auxIcon?: string;
}

interface IFolder {
  data: IData
  index?: number;
}

const Folder = ({
  data: {
    title: folderTitle,
    files,
    folders,
  },
  index,
}: IFolder) => {
  const { onFileClick, selected } = useMenu();
  const { fSrc, fAlt } = getFolderIcon(folderTitle);

  return (
    <Details id={folderTitle} open tabLength={index}>
      <hr />

      <Summary>
        <img src={fSrc} alt={`${fAlt} folder icon`} />
        <span>{folderTitle}</span>
      </Summary>

      {folders?.map((item, pos) => (
        <Folder
          key={item.title}
          data={item}
          index={pos + 1}
        />
      ))}

      <Content>
        {files?.map(({
          title: fileTitle,
          url = '/',
          external,
          auxIcon,
        }) => {
          const { src, alt } = getFileIcon(fileTitle);
          const handleClick = () => {
            onFileClick({ fileTitle, folderTitle });
          };
          const isSelected = useCallback(() => {
            if (folderTitle === selected.folderTitle && fileTitle === selected.fileTitle) {
              return 'selected';
            }
            return '';
          }, [selected]);
          return (
            <span>
              {external ? (
                <a href={url} key={`${folderTitle}/${fileTitle}`} target="_blank" rel="noreferrer">
                  <File key={fileTitle} className={isSelected()} onClick={handleClick}>
                    <img src={src} alt={`${alt} icon`} />
                    {fileTitle}
                    {auxIcon && <img className="icon" src={auxIcon} alt={`${alt} icon`} />}
                  </File>
                </a>
              ) : (
                <Link to={url} key={`${folderTitle}/${fileTitle}`}>
                  <File key={fileTitle} className={isSelected()} onClick={handleClick}>
                    <img src={src} alt={`${alt} icon`} />
                    {fileTitle}
                    {auxIcon && <img className="icon" src={auxIcon} alt={`${alt} icon`} />}
                  </File>
                </Link>
              )}
            </span>
          );
        })}
      </Content>

    </Details>
  );
};

const TreeView = ({ data }: IFolder) => (
  <Container>
    <Folder data={data} />
  </Container>
);

export default TreeView;
