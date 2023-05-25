import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/comments",
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data: { postId },
      });

      setComments(response.data.comments);
    }

    fetchComments();
  }, [postId]);
  return (
    <>
      <CommentForm />
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
