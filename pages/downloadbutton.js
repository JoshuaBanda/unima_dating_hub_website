// components/DownloadButton.js
import React from 'react';// pages/Home.js or components/Home.js
import styles from '../styles/Home.module.css'; // Import the CSS module


const DownloadButton = () => {
  return (
    <div className={styles.container}>
      <a
        href="/downloads/UniDatingHub.apk" // Correct path to the APK file inside the public folder
        download="UniDatingHub.apk"
        className={styles.button}
      >
        Download
      </a>
    </div>
  );
};

export default DownloadButton;
