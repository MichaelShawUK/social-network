import PostPrompt from "./PostPrompt";
import PostCard from "./PostCard";
import FriendsCard from "./FriendsCard";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { database } from "../data/constants";

const Home = () => {
  const data = useState(useLoaderData())[0];
  const user = data.user;
  const [posts, setPosts] = useState(data.posts);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const response = await axios({
        baseURL: database,
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      setPosts(response.data.posts);
    }
    getPosts();
  }, [update]);

  return (
    <>
      <FriendsCard user={user} />
      <PostPrompt setPosts={setPosts} />
      {posts.map((post) => {
        return (
          <PostCard
            post={post}
            key={post._id}
            update={update}
            setUpdate={setUpdate}
          />
        );
      })}
    </>
  );
};

export default Home;
