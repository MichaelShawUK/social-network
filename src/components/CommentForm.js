import StyledButton from "../styles/StyledButton";
import StyledCommentForm from "../styles/StyledCommentForm";
import { useFetcher } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  const fetcher = useFetcher();

  const [error, setError] = useState("");

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
      if (text.length > 300) {
        setError("Maximum characters 300");
      } else if (text) {
        setIsLoading(true);
        setError("");
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
      <p className="error center pad">{error}</p>
    </StyledCommentForm>
  );
};

export default CommentForm;
