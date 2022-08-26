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
                        <p>Gg. Gayamsari II KarangWuni, Caturtunggal, Depok, Sleman</p>
                        <p>Yogyakarta</p>
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
                <h4>About Me</h4>
                <p>Saya Ghozi, Seorang mahasiswa Teknologi Informasi di Universitas Muhammadiyah Yogyakarta. Terimakasih sudah berkunjung ke website portfolio saya. Semoga anda menikmati.</p>
                <div className="social">
                    <FaInstagram 
                        size={30} 
                        style={{ color:"#fff", marginRight: "1rem" }} 
                    />
                    <FaLinkedin 
                        size={30} 
                        style={{ color:"#fff", marginRight: "1rem" }} 
                    />
                    <FaGithub 
                        size={30} 
                        style={{ color:"#fff", marginRight: "1rem" }} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer