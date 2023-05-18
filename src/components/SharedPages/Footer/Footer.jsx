import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <div className="flex items-center gap-x-1">
            <img
              className="h-[50px] w-[50px] rounded-[50%]"
              src="https://i.ibb.co/L6zc9Qk/logo.png"
              alt=""
            />
            <h1 className="text-3xl font-semibold text-orange-400">
              Toy Store
            </h1>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a href="#">
            <FaFacebook className="text-2xl"></FaFacebook>
          </a>
          <a href="#">
            <FaTwitter className="text-2xl"></FaTwitter>
          </a>
          <a href="#">
            <FaInstagram className="text-2xl"></FaInstagram>
          </a>
          <a href="#">
            <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
          </a>
        </div>
        <div>
          <span className="footer-title">links</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">Patenga</a>
          <a className="link link-hover">Chattogram</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">01834-XXXXXX</a>
          <a className="link link-hover">01886-XXXXXX</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Tuhin Kanti Pal</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
