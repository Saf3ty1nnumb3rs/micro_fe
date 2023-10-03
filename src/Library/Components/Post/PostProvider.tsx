
import { ReactNode, useState } from 'react';
import { PostContext } from '../../Contexts/PostContext';

interface IPostProvider {
  children: ReactNode[];
}

export const PostProvider = ({ children }: IPostProvider) => {
  const [posts, setPosts] = useState<Record<string, IPost>>({});
  return (
    <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>
  );
};
