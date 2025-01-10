import Navbar from '../components/Navbar'; // Adjust path if necessary
import '../styles/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
