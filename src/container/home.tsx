import React from 'react';

import { Post } from '../components';
import { Container } from './styled';
import type { PostType } from '../data';

interface Props {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

export const Home = ({ posts, setPosts }: Props) => {
  const onDelete = React.useCallback(
    (id: number) => {
      setPosts(
        posts.reduce<PostType[]>(
          (acc, cur) => (cur.id !== id ? [...acc, cur] : acc),
          []
        )
      );
    },
    [posts, setPosts]
  );

  function renderPosts() {
    return posts.map((post) => (
      <Post post={post} key={post.id} onDelete={onDelete}></Post>
    ));
  }
  return (
    <>
      <Container>{renderPosts()}</Container>
    </>
  );
};
