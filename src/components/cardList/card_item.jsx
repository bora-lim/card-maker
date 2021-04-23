import React, { useRef, useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import { fetchPhotos, openUploadWidget } from "../../service/cloudinary";
import MyImage from "../my_image";
import styles from "./card_list.module.css";

const CardItem = (props) => {
  // const inputName = useRef();
  // const inputMail = useRef();
  // const inputPhone = useRef();

  const [values, setValues] = useState({
    id: 1,
    name: "",
    email: "",
    phone: "",
  });
  const { name, email, phone } = values;

  const [editMode, setEditmode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    props.handleChange(props.item, values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleComplete();
  };

  const handleEdit = () => {
    setEditmode(true);
    console.log(editMode);
  };

  const handleComplete = () => {
    props.handleChange(props.item, values);
    setEditmode(false);
    console.log(editMode);
  };

  // const beginUpload = (tag) => {
  //   const uploadOptions = {
  //     cloudName: "dmeytxql8",
  //     tags: [tag],
  //     uploadPreset: "afzds6ro",
  //   };

  //   openUploadWidget(uploadOptions, (error, photos) => {
  //     if (!error) {
  //       console.log(photos);
  //       if (photos.event === "success") {
  //         setImages([...images, photos.info.public_id]);
  //       }
  //     } else {
  //       console.log(error);
  //     }
  //   });
  // };

  // const openWidget = () => {
  //   const widget = window.cloudinary.createUploadWidget(
  //     {
  //       cloudName: "dmeytxql8",
  //       uploadPreset: "afzds6ro",
  //     },
  //     (error, result) => {
  //       if (result.event === "success") {
  //         console.log(result);
  //         setImage(result.info.secure_url);
  //       }
  //     }
  //   );
  //   widget.open(); // open up the widget after creation
  // };

  // useEffect(() => {
  //   fetchPhotos("image", setImages);
  // }, []);

  return (
    <li className={styles.cardBox}>
      {editMode === false ? (
        <ul>
          <li>NAME : {props.item.name}</li>
          <li>E-MAIL : {props.item.email}</li>
          <li>PHONE : {props.item.phone}</li>
          <button onClick={handleEdit}>Edit</button>
        </ul>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <span>NAME :</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </li>

              <li>
                <span>E-MAIL :</span>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </li>

              <li>
                <span>PHONE :</span>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </li>
            </ul>

            <button onClick={handleComplete}>Complete</button>
          </form>
        </div>
      )}

      <MyImage />
    </li>
  );
};

export default CardItem;
