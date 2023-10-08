type CommentStatus = 'pending' | 'approved' | 'rejected';

interface IComment {
  id: string;
  postId: string;
  content: string;
  status?: CommentStatus;
}
