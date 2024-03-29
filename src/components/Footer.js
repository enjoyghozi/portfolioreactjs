import "./FooterStyle.css";

import React from 'react'

import { 
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaInstagram, 
    FaLinkedin, 
    FaGithub 
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome 
                        size={30} 
                        style={{ color:"#fff", marginRight: "2rem" }} 
                    />
                    <div>
                        <h4>Gg. Gayamsari II KarangWuni, Caturtunggal, Depok, Sleman</h4>
                        <h4>Yogyakarta</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone 
                            size={20} 
                            style={{ color:"#fff", marginRight: "2rem" }} 
                        />
                        +62-8232-5833-358
                    </h4>
                </div>
                <div className="email"> 
                    <h4>
                        <FaMailBulk 
                            size={20} 
                            style={{ color:"#fff", marginRight: "2rem" }} 
                        />
                        adamghosi03@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>Inspirasi</h4>
                <p1>Kalau semua rencanamu terwujud nanti kamu lupa caranya berdo'a.</p1>
                <div className="social">
                    <a href="https://instagram.com/ghozi_a">
                        <FaInstagram 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/ghosi-adam-73b6791a0/">
                        <FaLinkedin 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>

                    <a href="https://github.com/enjoyghozi">
                        <FaGithub 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer