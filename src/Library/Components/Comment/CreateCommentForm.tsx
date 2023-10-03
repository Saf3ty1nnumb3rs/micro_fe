import { Button, CardActionArea, CardActions, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

interface ICreateCommentFormProps {
  postId: string;
}
export const CreateCommentForm = (props: ICreateCommentFormProps) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:4001/posts/${props.postId}/comments`, {
        content
      });
      setContent('');
      if (error) setError('');
    } catch (err) {
      const errorResponse = err as Error;
      setError(errorResponse.message);
    }
  };
  return (
    <form onSubmit={onSubmit}>
        <Stack spacing={2} alignItems="flex-start" mt="2rem">
          <Typography fontWeight="600">
            Add Comment
          </Typography>
          <TextField
            fullWidth
            id="my-input"
            label="Title"
            type="text"
            aria-describedby="my-helper-text"
            value={content}
            onChange={
              (event: React.ChangeEvent<HTMLInputElement>) =>
              setContent(event.target.value)
            }
          />
          {error &&
            <FormHelperText
              color="red"
              id="my-helper-text"
            >
              Enter your comment here.
            </FormHelperText>
          }
        </Stack>
        <CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </CardActions>
        </CardActionArea>
      </form>
  );
};