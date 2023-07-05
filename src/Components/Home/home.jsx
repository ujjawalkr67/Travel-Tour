import React from "react";
import './home.css'
import video from '../../assets/video.mp4'
const Home = ()=>{
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    
                    <span className="smalltext">
                        Our Packages
                    </span>
                    
                    <h1 className="homeTitle">
                        Search Your Holiday
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Home;