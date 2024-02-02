import React, { useState, useEffect } from "react";
import './home.css';
import OfflineContent from "../OfflineContent/OfflineContent";
import homevideo from 'E:\\vitereacr\\portfolio\\public\\homevideo.mp4';

const Home = () => {
    const jobProfiles = [
        "Software Engineer",
        "Front End Developer",
        "Automating Web App",
    ];

    const [profileIndex, setProfileIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [showing, setShowing] = useState(true);

    useEffect(() => {
        const currentProfile = jobProfiles[profileIndex];

        const handleText = () => {
            let newText = '';
            let newShowing = showing;

            if (showing) {
                newText = currentProfile.slice(0, displayedText.length + 1);
                if (newText === currentProfile) {
                    newShowing = false;
                }
            } else {
                newText = currentProfile.slice(0, displayedText.length - 1);
                if (newText === '') {
                    setProfileIndex((profileIndex + 1) % jobProfiles.length);
                    newShowing = true;
                }
            }

            setDisplayedText(newText);
            setShowing(newShowing);
        };

        const intervalId = setInterval(handleText, 100); // Adjust the interval time as needed

        return () => clearInterval(intervalId);
    }, [displayedText, profileIndex, jobProfiles, showing]);

    const isOffline = !navigator.onLine;

    return (
        <div>
            <section id="video-section pb-5">
                {isOffline ? (
                    <OfflineContent />
                ) : (
                    <>
                        <video autoPlay loop muted playsInline>
                            <source src={homevideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="d-flex flex-column overlay pb-5 ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 py-5 my-5">
                                        <h3>HI THERE!!</h3>
                                        <h1>I'M <span className="text-warning">Piyush</span></h1>
                                        <h4>Interested on <span className="text-warning">{displayedText}</span></h4>
                                    </div>

                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 py-1 text-center text-success">
                                        <h5>Enthusiastic and adaptable Developer/Engineer with strong desire to excel in technology. Seeking an Technical role to contribute for  the development and innovation of cutting-edge technologies.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section >
        </div >
    );
}

export default Home;
