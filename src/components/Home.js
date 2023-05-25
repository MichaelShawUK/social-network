import PostPrompt from "./PostPrompt";
import PostCard from "./PostCard";
import FriendsCard from "./FriendsCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { user, posts } = useState(useLoaderData())[0];

  return (
    <>
      <FriendsCard user={user} />
      <PostPrompt />
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </>
  );
};

export default Home;
