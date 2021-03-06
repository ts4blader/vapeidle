import React from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/base";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Categories pillar */}
        <div className="pillar">
          <div className="title">Categories</div>
          <ul className="categories">
            {CATEGORIES.map((item) => (
              <li key={`${item}_footer`}>
                <Link to={`/products?category=${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social pillar */}
        <div className="pillar">
          <div className="title">Social</div>
          <ul className="social">
            <li>
              <a href="https://www.youtube.com/">
                <Icon src="youtube.svg" alt="youtube-icon" />
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <Icon src="facebook.svg" alt="facebook-icon" />
                Fanpage
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <Icon src="twitter.svg" alt="twitter-icon" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
        {/* Address pillar */}
        <div className="pillar">
          <div className="title">Address</div>
          <ul className="address">
            <li>Lake New Laurynland, Lemke Plaza, 90505</li>
            <li>North Port Vladimirtown, Wiegand Lock, 17407</li>
          </ul>
        </div>
        {/* Contact pillar */}
        <div className="pillar">
          <div className="title">Contact</div>
          <ul className="contact">
            <li>
              <div>Phone</div>
              <div>+84 706 863 720</div>
            </li>
            <li>
              <div>Email</div>
              <a href="mailto:ts4blader@gmail.com">ts4blader@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
