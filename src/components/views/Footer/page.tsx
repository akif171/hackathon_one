import Image from "next/image";
import React from "react";
import Logo from "../../assets/Logo.webp";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col md:grid grid-cols-5 border-b border-gray-600 py-10">
        <div className="flex flex-col justify-between gap-5 col-span-2 ">
          <Image width={200} src={Logo} alt="logo" />
          <p className="text-gray-600">
            Small, artisan label that offers a thoughtfully{" "}
            <br className="hidden md:flex" /> curated collection of high quality
            everyday <br className="hidden md:flex" /> essentials made
          </p>
          <div className="flex gap-5">
            <span className="social_icon ">
              <Facebook />
            </span>
            <span className="social_icon ">
              <Linkedin />
            </span>
            <span className="social_icon ">
              <Twitter />
            </span>
            <span className="social_icon ">
              <Github />
            </span>
          </div>
        </div>
        <div>
          <h3 className="footer_link_heading">Company</h3>
          <ul className="footer_links">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="footer_link_heading">Support</h3>
          <ul className="footer_links">
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>
        <div>
          <h3 className="footer_link_heading">Contact</h3>
          <ul className="footer_links">
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-5 text-lg text-gray-600">
        <p>Copyright &copy; 2022 Dine Market</p>
        <p>
          Design by. <span className="font-bold"> Weird Design Studio</span>
        </p>
        <p>
          Code by.
          <span className="font-bold"> akif171 on github</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
