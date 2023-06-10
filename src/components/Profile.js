import EditProfile from "./EditProfile";
import FriendsCard from "./FriendsCard";
import PostCard from "./PostCard";
import FriendRequest from "./FriendRequest";
import PendingRequestsCard from "./PendingRequestsCard";
import Loading from "./Loading";
import useNavMenu from "../hooks/useNavMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { database } from "../data/constants";

const Profile = () => {
  const { userId } = useParams();
  const ownProfile = userId === localStorage.getItem("userId");

  const [update, setUpdate] = useState(false);

  const [data, setData] = useState({
    user: {
      friends: [],
      friendRequests: [],
    },
    posts: [],
  });

  const user = data.user;
  const posts = data.posts;

  const hasFriendRequest = user.friendRequests.length > 0;

  useEffect(() => {
    async function getProfile(userId) {
      const response = await axios({
        url: `${database}/profile/${userId}`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      setData(response.data);
    }
    getProfile(userId);
  }, [userId, update]);

  useNavMenu();

  return (
    <>
      {!data?.user?.username | (userId !== data.user._id) ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Profile;
