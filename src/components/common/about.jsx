import React from "react";
import styles from "../about.module.scss";

export default function Display({ about }) {
  return (
    <div className={styles.about}>
      <div className={styles.header}>About Community </div>
      <div className={styles.content}>
        <p>{about.public_description} </p>
        <div className={styles.members}>
          <div className={styles.box}>
            <div className={styles.total}>
              {Math.round((about.subscribers / 1000) * 10) / 10}K
            </div>
            <div className={styles.text}>Members</div>
          </div>

          <div className={styles.box}>
            <div className={styles.total}>
              {Math.round((about.active_user_count / 1000) * 10) / 10}K
            </div>
            <div className={styles.text}>Online</div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      {/* <div className={styles.created}>Created Dec 31, 2008</div> */}
    </div>
  );
}
