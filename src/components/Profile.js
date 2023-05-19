import EditProfile from "./EditProfile";
import FriendsCard from "./FriendsCard";
import PostCard from "./PostCard";
import FriendRequest from "./FriendRequest";

const Profile = () => {
  const ownProfile = 1;

  return (
    <div>
      <FriendsCard friends={[]} />
      {!ownProfile && <FriendRequest />}
      {ownProfile && <EditProfile />}
      <PostCard />
    </div>
  );
};

export default Profile;
