import React from "react";
import ItemPreview from "./item_preview";
import styles from "./card_preview.module.css";

const CardPreview = (props) => {
  return (
    <div className={styles.prvWr}>
      <h2>Card Preview</h2>

      <ul>
        {props.profile.map((item) => (
          <ItemPreview key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CardPreview;
