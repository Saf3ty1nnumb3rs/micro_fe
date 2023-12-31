import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { usePostContext } from '../../Contexts/PostContext';
import { CreateCommentForm } from '../Comment/CreateCommentForm';
import { CommentList } from '../Comment/CommentList';

export const PostList = () => {
  const { posts, setPosts } = usePostContext();
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshPostList = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };
  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4002/posts');
      setPosts(response.data);
      refreshPostList();
    } catch(e) {
      console.log(e); // just log error for now; consider useful error messaging on your API
    }
  }, [setPosts]);

  useEffect(() => {
    fetchPosts(); // change this to a context that refreshes after post creation
  }, [fetchPosts, refreshKey]);

  console.log(posts);
  const renderPosts = useMemo(() => Object.values(posts).map((post: IPost) => {
    return (
      <Grid
        item
        xs={12}
        md={6}
        xl={4}
      >
        <Card
          sx={{ width: '100%', minHeight: '18rem', mb: '1rem' }}
          key={post.id}
        >
          <CardContent>
            <Typography fontSize="1.5rem">{post.title}</Typography>
            <CommentList comments={post.comments} />
            <CreateCommentForm postId={post.id} />
          </CardContent>
        </Card>
      </Grid>
    );
  }), [posts]);

  return (
    <Grid container spacing={2}>
      {renderPosts}
    </Grid>
  );
};
