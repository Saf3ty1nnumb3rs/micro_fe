import { Box } from '@mui/material';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface ICommentListProps {
  postId: string;
}
export const CommentList = ({ postId }: ICommentListProps) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
      setComments(response.data);
    } catch (err) {
      console.log(err); // same as other; consider useful error messaging from our API
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const renderComments = comments.map((comment: IComment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mt: '1rem',
      }}
    >
       <ul>{renderComments}</ul>
    </Box>
   
  );
};
