import React from "react";
import CardItem from "./card_item";
import styles from "./card_list.module.css";

const CardList = (props) => {
  const handleChange = (selectItem, cardProfile) => {
    props.handleChange(selectItem, cardProfile);
  };

  return (
    <div className={styles.cardWr}>
      <h2>Card Maker</h2>

      <ul>
        {props.profile.map((item) => (
          <CardItem key={item.id} item={item} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
