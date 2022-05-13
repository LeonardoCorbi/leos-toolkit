/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/useMenu';
import { getArchiveIcon, getFolderIcon } from '../../../Utils/getIcon';
import {
  Container,
  Content,
  Details,
  File,
  Summary,
} from './styles';

export interface IData {
  title: string;
  files?: FileType[];
  folders?: IData[];
}

type FileType = Omit<IData, 'files' | 'folders'> & {
  url?: string;
}

interface IFolder {
  data: IData
  index?: number;
}

const Folder = ({
  data, index,
}: IFolder) => {
  const {
    title: folderTitle,
    folders,
    files,
  } = data;
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
        {files?.map(({ title: fileTitle, url = '/' }) => {
          const { src, alt } = getArchiveIcon(fileTitle);
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
            <Link to={url}>

              <File key={fileTitle} className={isSelected()} onClick={handleClick}>
                <img src={src} alt={`${alt} icon`} />
                {fileTitle}
              </File>
            </Link>

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
