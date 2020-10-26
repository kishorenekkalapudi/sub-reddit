import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../about.module.scss'




export default function Display( {about}) {

    console.log(about)
  return (
    <div className={styles.about}>
        <div className={styles.header}>About Community </div>
        <div className={styles.content}>{about?.public_description} 
        <div className={styles.members}>
            <div className={styles.box}>
                <div className={styles.total}>309k</div>
                <p className={styles.text} >Members</p>
            </div>

            <div className={styles.box}><div  className={styles.total}>9.7k</div>
                <p className={styles.text} >Online</p>
            </div>
        </div>
        </div>
        <hr className={styles.hr}/>
        {/* <div className={styles.created}>Created Dec 31, 2008</div> */}
    </div>
  );
}