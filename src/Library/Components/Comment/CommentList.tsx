import { Box } from '@mui/material';

interface ICommentListProps {
  comments: IComment[];
}
export const CommentList = ({ comments }: ICommentListProps) => {
  const renderComments = comments.map((comment: IComment) => {
    switch(comment.status) {
      case 'pending':
        return <li key={comment.id}>This comment is awaiting moderation</li>;
      case 'rejected':
        return <li key={comment.id}>This comment has been rejected</li>;
      case 'approved':
      default:
        return <li key={comment.id}>{comment.content}</li>;
    }
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
