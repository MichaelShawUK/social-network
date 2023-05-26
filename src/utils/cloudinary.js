import axios from "axios";

async function uploadImage(file) {
  const response = await axios({
    method: "post",
    url: "https://api.cloudinary.com/v1_1/dzpobfxwj/image/upload",
    data: {
      file,
      upload_preset: "tri1uw9h",
    },
  });

  return response;
}

export default uploadImage;
