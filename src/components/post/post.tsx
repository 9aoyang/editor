import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

import type { PostType } from '../../data';

import {
  Container,
  Header,
  Title,
  EditButton,
  DeleteButton,
  Main,
  ImgListContainer,
  Img,
  Audio,
  Footer,
} from './style';

interface Props {
  post: PostType;
  onDelete: (id: number) => void;
}

const styleMap = {
  BOLD: {
    color: '#8600FF',
    fontWeight: '500',
  },
};

export const Post = ({ post, onDelete }: Props) => {
  const { id, title, date, content, imgList, audio } = post;

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(convertFromRaw(content))
  );

  const navigate = useNavigate();

  const handleEdit = React.useCallback(() => {
    navigate(`/edit/${id}`);
  }, [id, navigate]);

  const handleDelete = React.useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  function renderImgList() {
    return (
      imgList?.length && (
        <ImgListContainer>
          {imgList.map((url) => (
            <Img src={url} key={url} />
          ))}
        </ImgListContainer>
      )
    );
  }

  function renderAudio() {
    return audio && <Audio controls src={audio}></Audio>;
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <div>
          <EditButton onClick={handleEdit}>
            <EditIcon />
            edit
          </EditButton>
          <DeleteButton onClick={handleDelete}>
            <DeleteIcon />
          </DeleteButton>
        </div>
      </Header>
      <Main>
        <Editor
          customStyleMap={styleMap}
          editorState={editorState}
          readOnly
          onChange={setEditorState}
        />
        {renderImgList()}
        {renderAudio()}
        <Footer>{date}</Footer>
      </Main>
    </Container>
  );
};
