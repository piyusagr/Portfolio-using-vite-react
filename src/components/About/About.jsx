import React from "react";
import image from '/public/profile1.jpg'
import './about.css';

const About = () => {
    return (
        <div className="px-5 py-5 bg-info text-center">
            <h3 className=" mx-5 my-5 py-2 text-light  border rounded border-dark bg-success " style={{ width: 200, height: 50 }}>About Me</h3>
            <div class="d-flex mb-2 ">
                <div className="border-top border-5 border-end border-secondary py-3 mx-5  rounded " style={{ width: 230, height: 230 }}>
                    <div className="border-top border-end border-secondary border-5 py-3 mx-3  rounded " style={{ width: 200, height: 230 }}>
                        <img src={image} className="rounded " alt="Profile" style={{ width: 180 }} />
                    </div>
                </div>
                <div className="text-start margin">
                    <div className="text-secondary px-5">
                        <h4>Name: Piyush Agrawal</h4>
                    </div>
                    <div className="text-secondary px-5">
                        <h4>Programme: B.Tech. in CSE</h4>
                    </div>
                    <div className="text-secondary px-5">
                        <h4>Passout: 2024</h4>
                    </div>
                    <div className="text-secondary px-5">
                        <h4>Proficient Knowledge: Front end Developer, Automation Testing, Software engineer</h4>
                    </div>
                    <div className="text-secondary px-5">
                        <button type="button" className="btn btn-hover text-center p-2 bg-success text-light rounded my-4"
                                onClick={() => window.open('https://drive.usercontent.google.com/download?id=1vxr6S6-jc-iqSqLIJ-YazET2H1XocOJr&export=download&authuser=1', '_blank') }>
                            <h5> Download CV</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;

// after 761 width the flex become unflex