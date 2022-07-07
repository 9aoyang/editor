import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { RawDraftContentState } from 'draft-js';

import { RichEditor, Message } from '../components';
import {
  Container,
  Return,
  Title,
  Tabs,
  Tab,
  CountWrapper,
  TitleInput,
  SaveButton,
  CancelButton,
  Footer,
  StyledSnackbar,
} from './styled';
import type { PostType } from '../data';

interface Props {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

export const Edit = ({ posts, setPosts }: Props) => {
  const navigate = useNavigate();
  const { postId = '' } = useParams<any>();

  const post = posts.find(({ id }) => id === Number(postId))!;
  const [title, setTitle] = React.useState(post.title);
  const [content, setContent] = React.useState(post.content);
  const [alignment, setAlignment] = React.useState('posts');
  const [open, setOpen] = React.useState(false);
  const count = React.useMemo(() => posts.length, [posts.length]);

  const goBack = () => {
    navigate('/');
  };

  const onTabChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onContentChange = (content: RawDraftContentState) => {
    setContent(content);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(false);
  };

  const handleSave = () => {
    const newPosts = posts.map((post) =>
      post.id !== Number(postId) ? post : { ...post, title, content }
    );
    setPosts(newPosts);
    setOpen(true);
  };

  return (
    <Container>
      <Return onClick={goBack}>
        <ArrowBackIcon />
        <span>Back</span>
      </Return>
      <Title>Manage post</Title>
      <Tabs
        color="primary"
        value={alignment}
        exclusive
        fullWidth
        onChange={onTabChange}
      >
        <Tab
          value="settings"
          className={alignment === 'settings' ? 'selected' : ''}
        >
          Settings
        </Tab>
        <Tab value="posts" className={alignment === 'posts' ? 'selected' : ''}>
          Posts
          <CountWrapper>{count}</CountWrapper>
        </Tab>
      </Tabs>

      <TitleInput
        value={title}
        fullWidth
        label="Input post title"
        variant="outlined"
        onChange={onTitleChange}
      />

      <RichEditor content={content} onChange={onContentChange} />
      <Footer>
        <SaveButton onClick={handleSave}>
          <CheckIcon />
          Post
        </SaveButton>
        <CancelButton onClick={goBack}>
          <ClearIcon />
          Cancel
        </CancelButton>
      </Footer>
      <StyledSnackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        children={
          <div>
            <Message postId={postId} />
          </div>
        }
      />
    </Container>
  );
};
