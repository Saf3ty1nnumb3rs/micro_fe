import noop from 'lodash/noop';
import { createContext, useContext } from 'react';

interface PostContextProps {
  posts: Record<string, IPost>;
  setPosts: React.Dispatch<React.SetStateAction<Record<string, IPost>>>;
}

export const PostContext = createContext<PostContextProps>({
  posts: {},
  setPosts: noop,
});

export const usePostContext = () => useContext(PostContext);
