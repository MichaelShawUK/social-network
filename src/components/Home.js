import PostPrompt from "./PostPrompt";
import PostCard from "./PostCard";
import FriendsCard from "./FriendsCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import LoggedInContext from "../context/loggedIn";
import axios from "axios";
import { database } from "../data/constants";
import Loading from "./Loading";
import useNavMenu from "../hooks/useNavMenu";

const Home = () => {
  useNavMenu();
  const setLoggedIn = useContext(LoggedInContext)[1];

  useEffect(() => {
    setLoggedIn(true);
  }, [setLoggedIn]);

  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getPosts() {
      const { data } = await axios({
        url: database,
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      if (data?.redirect) {
        navigate(data.redirect);
      }

      setData(data);
    }
    getPosts();
  }, [update, navigate]);

  const user = data?.user;
  const posts = data?.posts;

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <>
          <FriendsCard user={user} />
          <PostPrompt setData={setData} />
          {posts.length > 0 && (
            <div className="postcards-header">Your Timeline</div>
          )}
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
      )}
    </>
  );
};

export default Home;
