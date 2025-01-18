import DownloadButton from "./downloadbutton";
import Intro from "./Intro";
import styles from '../styles/Home.module.css';  // Importing the CSS module
import DisplayImages from "./DisplayImages";

const HomeComing = () => {
    return (
        <>
            
      <Intro />
      <section className={styles.homePageContent}>  {/* Using styles from the CSS module */}

        <div style={{
          position:'relative',
          color:'grey',
          padding:'20px'
        }}>
          <p>
          Join thousands of users who are discovering meaningful connections on Unima Dating Hub. Whether you're looking for friendship, love, or something in between, our app makes it easier than ever to meet like-minded people near you. With an easy-to-use interface, advanced matching algorithms, and a safe community, Unima Dating is designed to help you connect with others who share your interests and values. Download the app now and take the first step towards finding your perfect match!
          </p>
        </div>
        
        {/* Use the DownloadButton component */}
        <DownloadButton />

        
        <DisplayImages/>
        
      </section>
        </>
    );
}
 
export default HomeComing;