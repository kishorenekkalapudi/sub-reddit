import { AmpStories, Style } from "@material-ui/icons";
import React from "react";

import styles from "../about.module.scss";
import { getImage } from "../subHeader";
import Avatar from "@material-ui/core/Avatar";
import AcUnitIcon from "@material-ui/icons/AcUnit";

export default function Display({ about }) {
  console.log(about);
  return (
    <div className={styles.about}>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${getImage(about?.subreddit.banner_img)})`,
        }}
      ></div>
      <div className={styles.avatar}>
        <Avatar
          variant="square"
          alt="Remy Sharp"
          src={getImage(about.icon_img)}
          className={styles.large}
          style={{ width: "60px", height: "auto" }}
        />

        <div>{about.name}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.members}>
          <div className={styles.box}>
            <p className={styles.text}>Karma</p>
            <div className={styles.total}>
              <AcUnitIcon color="primary" />
              {about.total_karma}
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      {/* <div className={styles.created}>Created Dec 31, 2008</div> */}
    </div>
  );
}
