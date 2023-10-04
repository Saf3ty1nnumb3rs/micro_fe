import { Box } from '@mui/material';

interface ICommentListProps {
  comments: IComment[];
}
export const CommentList = ({ comments }: ICommentListProps) => {
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
