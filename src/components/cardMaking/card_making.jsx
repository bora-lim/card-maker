import React, { useEffect, useState } from "react";
import CardList from "../cardList/card_list";
import CardPreview from "../cardPreview/card_preview";
import styles from "../cardMaking/card_making.module.css";

const CardMaking = (props) => {
  const [profile, setProfile] = useState([
    {
      id: 1,
      name: "",
      email: "",
      phone: "",
    },
  ]);

  const handleChange = (selectItem, cardProfile) => {
    // const profile = [...profile];
    // const idx = profile.indexOf(selectItem);
    // profile[idx] = cardProfile;
    // setProfile({ profile });
    // console.log(profile);

    // const profile = profile.map((item) => {
    //   console.log(item);
    // });
    // console.log(selectItem);
    // console.log(cardProfile);

    setProfile(
      profile.map((item) => (item.id === selectItem.id ? cardProfile : item))
    );
  };

  return (
    <div className={styles.makingWr}>
      <CardList profile={profile} handleChange={handleChange} />
      <CardPreview profile={profile} />
    </div>
  );
};

export default CardMaking;
