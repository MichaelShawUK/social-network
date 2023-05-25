import PostPrompt from "./PostPrompt";
import PostCard from "./PostCard";
import FriendsCard from "./FriendsCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { user, posts } = useState(useLoaderData())[0];

  return (
    <>
      <FriendsCard friends={friends} />
      <PostPrompt />
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </>
  );
};

export default Home;

const friends = [
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664663/players/641b8352039c87ae2ba915d9.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664672/players/641b8353039c87ae2ba915f1.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664667/players/641b8353039c87ae2ba915e5.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664664/players/641b8353039c87ae2ba915dc.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664673/players/641b8353039c87ae2ba915f4.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664698/players/641b8355039c87ae2ba91636.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664686/players/641b8354039c87ae2ba91618.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679837406/players/t3967kdy8dqmsjms4ngq.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664663/players/641b8352039c87ae2ba915d9.png",
  "https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664672/players/641b8353039c87ae2ba915f1.png",
];
