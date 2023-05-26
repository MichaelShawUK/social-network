import StyledEditProfile from "../styles/StyledEditProfile";
import StyledButton from "../styles/StyledButton";
import Loading from "./Loading";
import uploadImage from "../utils/cloudinary";
import { useState } from "react";

const EditProfile = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      {imageUrl ? (
        <>
          <img src={imageUrl} alt="" className="avatarImage"></img>
          <button
            className="resetButton"
            type="reset"
            onClick={() => setImageUrl("")}
          >
            Clear Avatar
          </button>
        </>
      ) : (
        <input
          type="file"
          accept="image/*"
          id="avatar"
          name="avatar"
          onChange={(e) => {
            setIsLoading(true);
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onerror = () => console.log("Failed to convert to base64");
            reader.onload = async () => {
              const { data } = await uploadImage(reader.result);
              setImageUrl(data.secure_url);
              setIsLoading(false);
            };
          }}
        ></input>
      )}
      <input hidden type="text" name="imageUrl" value={imageUrl}></input>
      {isLoading ? <Loading /> : <StyledButton>Update</StyledButton>}
    </StyledEditProfile>
  );
};

export default EditProfile;
