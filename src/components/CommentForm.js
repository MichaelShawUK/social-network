import StyledButton from "../styles/StyledButton";
import StyledCommentForm from "../styles/StyledCommentForm";
import { useFetcher } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { database } from "../data/constants";

const CommentForm = ({
  postId,
  setIsLoading,
  update,
  setUpdate,
  updatePost,
  setUpdatePost,
}) => {
  let fetcher = useFetcher();

  const textInputRef = useRef(null);

  useEffect(() => {
    async function uploadComment(data) {
      await axios({
        method: "POST",
        url: `${database}/comment`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data,
      });
      setIsLoading(false);
      setUpdate(!update);
      setUpdatePost(!updatePost);
      textInputRef.current.value = "";
    }

    if (fetcher.formData) {
      const { text, post } = Object.fromEntries(fetcher.formData);
      if (text) {
        setIsLoading(true);
        uploadComment({ text, post });
      }
    }
  }, [fetcher, setIsLoading, setUpdate, update, updatePost, setUpdatePost]);

  return (
    <StyledCommentForm>
      <fetcher.Form>
        <input
          type="text"
          name="text"
          placeholder="Write a comment..."
          ref={textInputRef}
        ></input>
        <input type="text" name="post" hidden readOnly value={postId}></input>
        <StyledButton>Comment</StyledButton>
      </fetcher.Form>
    </StyledCommentForm>
  );
};

export default CommentForm;
