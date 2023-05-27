import StyledPostPrompt from "../styles/StyledPostPrompt";
import StyledButton from "../styles/StyledButton";
import uploadImage from "../utils/cloudinary";
import { useState, useEffect, useRef } from "react";
import LoadingCard from "./LoadingCard";
import { useFetcher } from "react-router-dom";
import axios from "axios";
import { database } from "../data/constants";

const PostPrompt = ({ setPosts }) => {
  const firstName = localStorage.getItem("firstName");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const textInputRef = useRef(null);

  let fetcher = useFetcher();

  useEffect(() => {
    async function uploadPost(data) {
      const response = await axios({
        method: "POST",
        url: `${database}/post`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data,
      });
      textInputRef.current.value = "";
      setImageUrl("");
      setIsLoading(false);
      setPosts(response.data.posts);
    }

    if (fetcher.formData) {
      const { text, image } = Object.fromEntries(fetcher.formData);
      if (text || image) {
        setIsLoading(true);
        uploadPost({ text, image });
      }
    }
  }, [fetcher, setPosts]);

  return (
    <StyledPostPrompt>
      <fetcher.Form>
        <input
          ref={textInputRef}
          placeholder={`What's on your mind, ${firstName}?`}
          className="textInput"
          type="text"
          name="text"
          autoFocus
        ></input>
        {!imageUrl && (
          <label htmlFor="imageFile" className="fileLabel">
            Add Photo
            <span className="camera"> &#128248;</span>
          </label>
        )}
        <input
          id="imageFile"
          type="file"
          hidden
          onChange={(e) => {
            if (e.target?.files.length > 0) {
              setIsLoading(true);
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onerror = () => console.log("Failed to convert to base64");
              reader.onload = async () => {
                const { data } = await uploadImage(reader.result);
                setImageUrl(data.secure_url);
                setIsLoading(false);
              };
            }
          }}
        ></input>
        <input
          hidden
          readOnly
          type="text"
          name="image"
          value={imageUrl}
        ></input>
        <StyledButton>Post</StyledButton>
      </fetcher.Form>
      {imageUrl && (
        <div className="flexContainer">
          <div className="imageContainer">
            <div className="clearImage" onClick={() => setImageUrl("")}>
              &#10060;
            </div>
            <img className="previewImage" src={imageUrl} alt=""></img>
          </div>
        </div>
      )}
      {isLoading && <LoadingCard />}
    </StyledPostPrompt>
  );
};

export default PostPrompt;
