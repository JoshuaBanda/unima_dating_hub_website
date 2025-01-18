import DownloadButton from "./downloadbutton";
import Intro from "./Intro";
import styles from '../styles/Home.module.css';  // Importing the CSS module
import DisplayImages from "./DisplayImages";

const HomeComing = () => {
    return (
        <>
            
      <Intro />
      <section className={styles.homePageContent}>  {/* Using styles from the CSS module */}

        <p style={{
          padding:"20px",
        }}>Click below to download the APK file:</p>
        
        {/* Use the DownloadButton component */}
        <DownloadButton />

        
        <DisplayImages/>
        
      </section>
        </>
    );
}
 
export default HomeComing;