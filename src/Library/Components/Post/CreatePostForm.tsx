import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";

export const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/posts', {
        title
      });
      setTitle('');
      if (error) setError('');
    } catch (err) {
      const errorResponse = err as Error;
      setError(errorResponse.message);
    } 
  };
  return (
    <Card
      sx={{
        maxWidth: {
          xs: '27.125rem',
          md: '39.125rem',
        },
        mb: '1rem',
      }}
    >
      <form onSubmit={onSubmit}>
        <CardContent data-testid="create-post-card-content">
          <Typography
            data-testid="create-post-card-content-title"
            fontWeight="800"
            fontSize="2rem"
          >
            Create A Post
          </Typography>
          <FormGroup>
            <TextField
              data-testid="create-post-input"
              id="my-input"
              label="Title"
              type="text"
              aria-describedby="my-helper-text"
              value={title}
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(event.target.value)
                }
            />
            {error &&
              <FormHelperText
                data-testid="create-post-helper-text"
                color="red"
                id="my-helper-text"
              >
                Enter your post title here.
              </FormHelperText>
            }
          </FormGroup>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Button
              data-testid="create-post-submit-button"
              variant="contained"
              type="submit"
              disabled={!title.length}
            >
              Submit
            </Button>
          </CardActions>
        </CardActionArea>
      </form>
    </Card>
  );
};