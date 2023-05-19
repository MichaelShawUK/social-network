import StyledEditProfile from "../styles/StyledEditProfile";
import StyledButton from "../styles/StyledButton";

const EditProfile = () => {
  return (
    <StyledEditProfile>
      <h3>Edit Profile</h3>
      <label for="firstName">First Name</label>
      <input
        type="text"
        placeholder="Demo"
        name="firstName"
        id="firstName"
        autoFocus
      ></input>
      <label for="lastName">Last Name</label>
      <input
        type="text"
        placeholder="User"
        name="lastName"
        id="lastName"
      ></input>
      <label for="avatar">Avatar</label>
      <input type="file" id="avatar" name="avatar"></input>
      <StyledButton>Update</StyledButton>
    </StyledEditProfile>
  );
};

export default EditProfile;
