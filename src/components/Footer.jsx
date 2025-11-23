import React from "react";
import insta1 from "../assets/instagram-1.jpg";
import insta2 from "../assets/instagram-2.jpg";
import insta3 from "../assets/instagram-3.jpg";
import insta4 from "../assets/instagram-4.jpg";
import insta5 from "../assets/instagram-5.jpg";
import insta6 from "../assets/instagram-6.jpg";

const Footer = () => {
  const instagramImages = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <footer className="  bg-[var(--color-footer-nav-bg)] text-[var(--color-primary-light)] pt-12">
      <div className="max-w-[var(--max-width-1200)] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg gradient-text">CONTACT INFO</h4>
          <p className="flex items-center gap-2">
            <i className="ri-map-pin-2-fill"></i>
            123, London Bridge Street, London
          </p>
          <p className="flex items-center gap-2">
            <i className="ri-mail-fill"></i>
            support@SahaFashion.com
          </p>
          <p className="flex items-center gap-2">
            <i className="ri-phone-fill"></i>
            (+012) 3456 789
          </p>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <h4 className="font-bold text-lg gradient-text">COMPANY</h4>
          {["Home", "About Us", "Work With Us", "Our Blog", "Terms & Conditions"].map((item, i) => (
            <a key={i} href="#" className="block hover:text-[var(--color-primary)]">{item}</a>
          ))}
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h4 className="font-bold text-lg gradient-text">USEFUL LINK</h4>
          {["Help", "Track My Order", "Men", "Women", "Dresses"].map((item, i) => (
            <a key={i} href="#" className="block hover:text-[var(--color-primary)]">{item}</a>
          ))}
        </div>

        {/* Instagram */}
        <div>
          <h4 className="font-bold text-lg mb-4 gradient-text">INSTAGRAM</h4>
          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((img, i) => (
              <img key={i} src={img} alt={`instagram-${i}`} className="w-full h-full object-cover rounded" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 py-4 text-center border-t border-[var(--color-text-light)] text-sm">
        © 2025 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
