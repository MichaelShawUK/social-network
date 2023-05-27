import PostPrompt from "./PostPrompt";
import PostCard from "./PostCard";
import FriendsCard from "./FriendsCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const data = useState(useLoaderData())[0];
  const user = data.user;
  const [posts, setPosts] = useState(data.posts);

  return (
    <>
      <FriendsCard user={user} />
      <PostPrompt setPosts={setPosts} />
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </>
  );
};

export default Home;
