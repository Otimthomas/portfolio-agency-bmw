import React from "react";
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer py-5'>
		<img src="images/bmw.svg" alt=""/>
      <p className='text-center text-light'>
        Copyright - developed by Thomas Otim
      </p>
	  <div className="social-icons mt-4 d-flex justify-content-center">
		<FaFacebook />
		<FaTwitter />
		<FaInstagram />
	  </div>
    </footer>
  );
};

export default Footer;
