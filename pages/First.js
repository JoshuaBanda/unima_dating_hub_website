import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link

const Landing = () => {
    return (
        <>
            {/* Overlay for black color with opacity */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black background with 50% opacity
                zIndex: 10, // Ensures it is above other content
            }}></div>

            {/* Welcome text */}
            <div style={{
                position: 'fixed',
                top: '30%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3rem', // Adjust font size as needed
                color: 'white',
                fontWeight: 'bold',
                zIndex: 20, // Ensures the text appears above the overlay
            }}>
                Welcome To Unima Dating Hub
            </div>

            {/* Link with adjusted styling */}
            <Link
                href="/HomeComing" // Path to navigate to
                style={{
                    position: 'absolute',
                    top: '90%', // Adjust the position to be below the welcome text
                    left: '50%',
                    transform: 'translateX(-50%)', // Center the link horizontally
                    height: '40px',
                    width: '300px', // Adjust width for the link
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '',
                    lineHeight: '30px', // Vertically center the text
                    borderRadius: '25px', // Optional: adds rounded corners
                    cursor: 'pointer', // Change cursor to pointer to show it’s clickable
                    zIndex: 20, // Ensure it appears above the overlay and below the welcome text
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

            {/* Link with moving yellow border */}
      <motion.div
        style={{
          left: '50%',
          transform: 'translateX(-50%)', // Center the link horizontally
          height: '40px',
          width: '300px', // Adjust width for the link
          textAlign: 'center',
          color: 'white',
          lineHeight: '30px', // Vertically center the text
          borderRadius: '25px', // Optional: adds rounded corners
          cursor: 'pointer', // Change cursor to pointer to show it’s clickable
          zIndex: 20, // Ensure it appears above the overlay and below the welcome text
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Center the text inside the link
          border: '3px solid transparent', // Set an initial transparent border
          fontSize: '22px',
          position: 'relative', // Ensure correct positioning for the animation
          overflow: 'hidden', // Ensures border does not exceed the element’s boundary
          animation: 'borderAnimation 2s linear infinite', // Apply the animation
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Continue

        <style jsx>{`
          @keyframes borderAnimation {
            0% {
              border-color: transparent;
            }
            50% {
              border-color: white;
              border-width: 3px;
            }
            100% {
              border-color: transparent;
            }
          }
        `}</style>
      </motion.div>

            </Link>

            {/* Main container with flex layout */}
            <motion.div style={{ display: 'flex' }}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
            >
                {/* Left side container */}
                <motion.div style={{
                    margin: '2px',
                    height: '150px',
                    width: '50%',
                    borderRadius: '10px',
                    position: 'relative', // Ensure the container has relative positioning
                }}
                    initial={{ x: -700 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',
                    }}
                >
                    {/* Inner container with background */}
                    <div style={{
                        margin: '2px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for layout="fill" to work
                        overflow:'hidden'
                    }}>
                        <Image
                            src='/love1.jpg'
                            alt='image1'
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                            priority
                        />
                    </div>

                    {/* Inner container with background */}
                    <div style={{
                        margin: '2px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: '',
                        borderRadius: '10px',
                        display: "flex",
                        position: 'relative', // Position relative for layout="fill" to work
                    }}>
                        <div style={{
                            margin: '2px',
                            height: '145px',
                            width: '50%',
                            backgroundColor: 'grey',
                            borderRadius: '10px',
                            position: 'relative', // Position relative for layout="fill" to work
                            overflow:'hidden'
                        }}>
                            <Image
                                src='/images/image6.jpg'
                                alt='image6'
                                layout="fill"
                                objectFit="cover"
                                quality={80}
                                priority
                            />
                        </div>

                        <div style={{
                            margin: '2px',
                            height: '145px',
                            width: '50%',
                            backgroundColor: 'grey',
                            borderRadius: '10px',
                            position: 'relative', // Position relative for layout="fill" to work
                            overflow:'hidden'
                        }}>
                            <Image
                                src='/images/image7.jpg'
                                alt='image1'
                                layout="fill"
                                objectFit="cover"
                                quality={80}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right side container */}
                <motion.div style={{
                    margin: '2px',
                    height: '300px',
                    width: '50%',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for layout="fill" to work
                    overflow:'hidden'
                }}
                    initial={{ y: -700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',
                    }}
                >
                    <Image
                        src='/images/image4.jpg'
                        alt='image4'
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Second flex container */}
            <motion.div style={{ display: 'flex' }}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
            >
                {/* Left side container */}
                <motion.div style={{
                    margin: '2px',
                    height: '350px',
                    width: '50%',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for layout="fill" to work
                    overflow:'hidden'
                }}
                    initial={{ y: 700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 70, duration: 50, repeat: 2, repeatType: 'reverse',
                    }}
                >
                    <Image
                        src='/images/image2.jpg'
                        alt='image2'
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                        priority
                    />
                </motion.div>

                {/* Right side container with nested divs */}
                <motion.div style={{
                    margin: '2px',
                    height: '350px',
                    width: '50%',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for layout="fill" to work
                }}
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', stiffness: 30, duration: 70, repeat: 2, repeatType: 'reverse',
                    }}
                >
                    {/* Inner container with background */}
                    <div style={{
                        margin: '2px',
                        height: '195px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for layout="fill" to work
                        overflow:'hidden'
                    }}>
                        <Image
                            src='/couple.jpg'
                            alt='image1'
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                            priority
                        />
                    </div>

                    {/* Inner container with background */}
                    <div style={{
                        margin: '2px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for layout="fill" to work
                        overflow:'hidden'
                    }}>
                        <Image
                            src='/love1.jpg'
                            alt='image1'
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Landing;
