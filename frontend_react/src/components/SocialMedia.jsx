import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.facebook.com/maaxii.91/">
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a href="https://www.instagram.com/mcseemo._/">
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
