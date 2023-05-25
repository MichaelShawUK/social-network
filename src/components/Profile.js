import EditProfile from "./EditProfile";
import FriendsCard from "./FriendsCard";
import PostCard from "./PostCard";
import FriendRequest from "./FriendRequest";
import useNavMenu from "../hooks/useNavMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { database } from "../data/constants";

const Profile = () => {
  const { userId } = useParams();
  const ownProfile = userId === localStorage.getItem("userId");

  const [user, setUser] = useState({ friends: [] });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getProfile(userId) {
      const response = await axios({
        url: `${database}/profile/${userId}`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      setUser(response.data.user);
      setPosts(response.data.posts);
    }
    getProfile(userId);
  }, [userId]);

  useNavMenu();

  return (
    <div>
      <FriendsCard friends={user.friends} />
      {ownProfile ? <EditProfile /> : <FriendRequest user={user} />}
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </div>
  );
};

export default Profile;
