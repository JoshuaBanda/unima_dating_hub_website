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
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with 50% opacity
                zIndex: 10, // Ensures it is above other content
            }}></div>

            {/* Welcome text */}
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3rem', // Adjust font size as needed
                color: 'white',
                fontWeight: 'bold',
                zIndex: 20, // Ensures the text appears above the overlay
            }}>
                Welcome
            </div>

            {/* Link with adjusted styling */}
            <Link 
                href="/HomeComing" // Path to navigate to
                style={{
                    position: 'absolute',
                    top: '60%', // Adjust the position to be below the welcome text
                    left: '50%',
                    transform: 'translateX(-50%)', // Center the link horizontally
                    height: '30px',
                    width: '100px', // Adjust width for the link
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'red',
                    lineHeight: '30px', // Vertically center the text
                    borderRadius: '5px', // Optional: adds rounded corners
                    cursor: 'pointer', // Change cursor to pointer to show it’s clickable
                    zIndex: 20, // Ensure it appears above the overlay and below the welcome text
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the text inside the link
                }}
            >
                Go Home
            </Link>

            {/* Main container with flex layout */}
            <motion.div style={{ display: 'flex' }}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
            >
                {/* Left side container */}
                <motion.div style={{
                    margin: '5px',
                    height: '150px',
                    width: '50%',
                    borderRadius: '10px',
                    position: 'relative', // Ensure the container has relative positioning
                }}
                    initial={{ y: 700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',
                    }}
                >
                    {/* Inner container with background */}
                    <div style={{
                        margin: '5px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for layout="fill" to work
                        overflow:'hidden'
                    }}>
                        <Image
                            src='/images/image1.jpg'
                            alt='image1'
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                            priority
                        />
                    </div>

                    {/* Inner container with background */}
                    <div style={{
                        margin: '5px',
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
                    margin: '5px',
                    height: '300px',
                    width: '50%',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for layout="fill" to work
                    overflow:'hidden'
                }}
                    initial={{ y: 700 }}
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
                    margin: '5px',
                    height: '300px',
                    width: '50%',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for layout="fill" to work
                    overflow:'hidden'
                }}
                    initial={{ y: 700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',
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
                    margin: '5px',
                    height: '300px',
                    width: '50%',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for layout="fill" to work
                }}
                    initial={{ y: 700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',
                    }}
                >
                    {/* Inner container with background */}
                    <div style={{
                        margin: '5px',
                        height: '145px',
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
                        margin: '5px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for layout="fill" to work
                        overflow:'hidden'
                    }}>
                        <Image
                            src='/images/image1.jpg'
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
