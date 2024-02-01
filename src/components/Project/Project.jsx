import React from "react";
import { Link } from "react-router-dom";
import './project.css';

const Project = () => {
    return (
        <div className="px-2 py-5 text-center bg-info">
            <div className="mx-5 my-5 mb-3 text-secondary border border-middle border-secondary bg-warning border-3 p-2 rounded" style={{ width: 270, height: 60 }}>
                <h2>Personal Project</h2>
            </div>
            <div className="d-flex  mx-5 px-5">
                <div className="card m-5 wid" >
                    <div className="card-overlay">
                        <span className="text-center bg-dark text-warning">Keep Notes</span>
                    </div>
                    <img src="src/Project/keepnotes.png" className="card-img-top" alt="Keep Notes" />
                    <div className="project-name-overlay flex-column">
                        <div> <h4 className="text-light pb-3">Keep Notes</h4></div>
                        <div>
                            <h6 className="text-light">Tech Stack used: HTML, JavaScript, Bootstrap</h6>
                        </div>
                        <div><h6><Link to="https://main--remarkable-monstera-02d20c.netlify.app">Web Link</Link></h6></div>
                    </div>
                </div>

                <div className="card m-5 wid" >
                    <div className="card-overlay">
                        <span className="text-center bg-dark text-warning">Make my trip railway automate homepage</span>
                    </div>
                    <img src="src/Project/makemytripauto.png" className="card-img-top " alt="Make my trip" style={{height:300}} />
                    <div className="project-name-overlay flex-column">
                        <div><h4 className="text-light pb-3">Makemytrip Railway Home Automate</h4></div>
                        <div><h6 className="text-light">Tech Stack used: Python, Selenium</h6></div>
                        <div><h6><Link to="https://github.com/piyush31009/Makemytrip-railway-automation">Github Link</Link></h6></div>

                    </div>
                </div>
           </div>
           <div className="d-flex  mx-5 px-5">
                <div className="card m-5 wid" >
                    <div className="card-overlay">
                        <span className="text-center bg-dark text-warning">rockpaperscissor</span>
                    </div>
                    <img src="src/Project/rockpaperscissor.png" className="card-img-top" alt="Rock Paper Scissor" />
                    <div className="project-name-overlay flex-column">
                        <div> <h4 className="text-light pb-3">Rock Paper Scissor Game</h4></div>
                        <div>
                            <h6 className="text-light">Tech Stack used: HTML, JavaScript, Bootstrap, React, CSS</h6>
                        </div>
                        <div><h6><Link to="https://rpsgame-7qp3poy25-piyush31009.vercel.app">Web Link</Link></h6></div>
                    </div>
                </div>

                <div className="card m-5 wid" >
                    <div className="card-overlay">
                        <span className="text-center bg-dark text-warning">Box Shadow Generator</span>
                    </div>
                    <img src="src/Project/shadowgen.png" className="card-img-top " alt="Make my trip"  />
                    <div className="project-name-overlay flex-column">
                        <div><h4 className="text-light pb-3">Box Shadow Generator</h4></div>
                        <div><h6 className="text-light">Tech Stack used: CSS, ReactJS, Bootstrap</h6></div>
                        <div><h6><Link to="https://box-shadow-generator-three.vercel.app">Web Link</Link></h6></div>
                    </div>
                </div>
           </div>
           <div className="d-flex  mx-5 px-5">
                <div className="card m-5 wid" >
                    <div className="card-overlay">
                        <span className="text-center bg-dark text-warning">Programming Language Voting App</span>
                    </div>
                    <img src="src/Project/votingapp.png" className="card-img-top" alt="voting application" style={{height: 300}}/>
                    <div className="project-name-overlay flex-column">
                        <div> <h4 className="text-light pb-3">Programming language Voting</h4></div>
                        <div>
                            <h6 className="text-light">Tech Stack used: HTML, Django, Bootstrap, CSS</h6>
                        </div>
                        <div><h6><Link to="https://github.com/piyush31009/language-voting">Github Link</Link></h6></div>
                    </div>
                </div>

                <div className="card m-5 wid" >
                    <div className="card-overlay">
                        <span className="text-center bg-dark text-warning">Whatsapp Message Automation</span>
                    </div>
                    <img src="src/Project/whatsappmessageauto.png" className="card-img-top " alt="Automate message"  />
                    <div className="project-name-overlay flex-column">
                        <div><h4 className="text-light pb-3">Whatsapp Message Automation</h4></div>
                        <div><h6 className="text-light">Tech Stack used: Python, Tkinter</h6></div>
                        <div><h6><Link to="https://drive.usercontent.google.com/download?id=1UiatIe8a-Ju7DnE_7qpG-BZ-dh5uyoDc&export=download&authuser=1">Download Link</Link></h6></div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Project;
