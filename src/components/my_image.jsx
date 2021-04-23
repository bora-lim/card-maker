import { React, useState } from "react";

const MyImage = (props) => {
  const [image, setImage] = useState({
    imageUrl: "",
    imageAlt: "",
  });

  const handleChange = () => {
    console.log("image changed!!");

    const { files } = document.querySelector('input[type="file"]');
    console.log(files[0]);

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "afzds6ro");

    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.Cloudinary.com/v1_1/dmeytxql8/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setImage({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="image-box">
      <input type="file" name="image" onChange={handleChange} />

      <img src={image.imageUrl} alt={image.imageAlt} />
    </div>
  );
};

export default MyImage;
