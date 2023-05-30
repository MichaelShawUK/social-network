import EditProfile from "./EditProfile";
import FriendsCard from "./FriendsCard";
import PostCard from "./PostCard";
import FriendRequest from "./FriendRequest";
import PendingRequestsCard from "./PendingRequestsCard";
import useNavMenu from "../hooks/useNavMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { database } from "../data/constants";

const Profile = () => {
  const { userId } = useParams();
  const ownProfile = userId === localStorage.getItem("userId");

  const [update, setUpdate] = useState(false);

  const [user, setUser] = useState({ friends: [], friendRequests: [] });
  const [posts, setPosts] = useState([]);

  const hasFriendRequest = user.friendRequests.length > 0;

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
  }, [userId, update]);

  useNavMenu();

  return (
    <div>
      <FriendsCard user={user} />
      {hasFriendRequest && ownProfile && (
        <PendingRequestsCard
          requests={user.friendRequests}
          update={update}
          setUpdate={setUpdate}
        />
      )}
      {ownProfile ? (
        <EditProfile setUpdate={setUpdate} update={update} />
      ) : (
        <FriendRequest user={user} update={update} setUpdate={setUpdate} />
      )}
      {posts.length > 0 && (
        <div className="postcards-header">{user.firstName}'s Posts</div>
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
    </div>
  );
};

export default Profile;
