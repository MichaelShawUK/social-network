import EditProfile from "./EditProfile";
import FriendsCard from "./FriendsCard";

const Profile = () => {
  return (
    <div>
      <FriendsCard friends={[]} />
      <EditProfile />
    </div>
  );
};

export default Profile;
