import StyledEditProfile from "../styles/StyledEditProfile";
import StyledButton from "../styles/StyledButton";

const EditProfile = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  return (
    <StyledEditProfile>
      <h3>Edit Profile</h3>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder={firstName}
        name="firstName"
        id="firstName"
        autoFocus
        defaultValue={firstName}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder={lastName}
        defaultValue={lastName}
        name="lastName"
        id="lastName"
      ></input>
      <label htmlFor="avatar">Avatar</label>
      <input type="file" id="avatar" name="avatar"></input>
      <StyledButton>Update</StyledButton>
    </StyledEditProfile>
  );
};

export default EditProfile;
