import React from "react";
import styles from "./subHeader.module.scss";
import Button from "@material-ui/core/Button";
const defaultImage =
  "https://styles.redditmedia.com/t5_2tk95/styles/communityIcon_hrq90p2z27k11.jpg?width=256&format=pjpg&s=adbf89b8f1cd7c19f29cfc9b3680c6eb35542a9d";

export function getImage(image) {
  return image ? image.replace("&amp;", "&") : defaultImage;
}

export default function ButtonAppBar({ about }) {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}> </div>
      <div className={styles.div2}> </div>
      <div className={styles.div3}>
        <div className={styles.flexContainer}>
          <img
            alt="sub header image"
            src={getImage(about.community_icon)}
            className={styles.image}
          />
          <div>
            <div className={styles.titleDetails}>
              <div className={styles.title}>{about.display_name}</div>
              <div>{about.display_name_prefixed}</div>
            </div>
          </div>
          <div className={styles.titleDetails}>
            <Button variant="contained" color="primary">
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.div4}></div>
    </div>
  );
}
