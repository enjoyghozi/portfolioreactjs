import "./AboutContentStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Siapa Saya ?</h1>
            <p>Perkenalkan saya seorang mahasiswa tingkat akhir di Universita Muhammadiyah Yogyakarta jurusan Teknologi Informasi. 
            </p>
            <Link to="/contact">
                <button className="btn">Hubungi Saya</button>
            </Link>
        </div>


        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={About1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={About2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent