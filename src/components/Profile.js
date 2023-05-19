import EditProfile from "./EditProfile";
import FriendsCard from "./FriendsCard";
import PostCard from "./PostCard";

const Profile = () => {
  return (
    <div>
      <FriendsCard friends={[]} />
      <EditProfile />
      <PostCard />
    </div>
  );
};

export default Profile;
