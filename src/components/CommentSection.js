import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { database } from "../data/constants";

const CommentSection = ({ postId, setIsLoading }) => {
  const [comments, setComments] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function fetchComments() {
      const response = await axios({
        method: "post",
        url: `${database}/comments`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data: { postId },
      });

      setComments(response.data.comments);
    }

    fetchComments();
  }, [postId, update]);
  return (
    <>
      <CommentForm
        postId={postId}
        setIsLoading={setIsLoading}
        update={update}
        setUpdate={setUpdate}
      />
      {comments.length > 0 ? (
        comments.map((comment) => {
          return <Comment comment={comment} key={comment._id} />;
        })
      ) : (
        <div>There are no comments for this post.</div>
      )}
    </>
  );
};

export default CommentSection;
