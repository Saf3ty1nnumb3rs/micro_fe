import { Container, Divider, ThemeProvider } from '@mui/material';
import './App.css'
import theme from './Theme/theme';
import { CreatePostForm } from './Library/Components/Post/CreatePostForm';
import { PostList } from './Library/Components/Post/PostList';
import { PostProvider } from './Library/Components/Post/PostProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ width: '90vw' }}>
        <PostProvider>
          <CreatePostForm />
          <Divider />
          <PostList />
        </PostProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
