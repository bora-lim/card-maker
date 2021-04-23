import React from "react";
import styles from "./card_preview.module.css";

const ItemPreview = (props) => {
  return (
    <div className={styles.prvBox}>
      <ul>
        <li>NAME : {props.item.name}</li>
        <li>E-MAIL : {props.item.email}</li>
        <li>PHONE : {props.item.phone}</li>
      </ul>
    </div>
  );
};

export default ItemPreview;
