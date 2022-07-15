import React from 'react';
import '../../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Social} from '../Interfaces';

import {
  faYoutube,
  faSpotify,
  faInstagram,
  faItunes,
} from '@fortawesome/free-brands-svg-icons';

import {faEnvelope, faBasketShopping} from '@fortawesome/free-solid-svg-icons';

interface props {
  social: Social;
}

export default function SocialFollow({social}: props) {
  const iconSize = '1x';
  const mailTo = 'mailto:' + social.email;
  return (
    <div className="social-container">
      <a href={social.youtube} className="youtube social" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size={iconSize} />
      </a>
      <a href={social.instagram} className="instagram social" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size={iconSize} />
      </a>
      <a href={social.spotify} className="spotify social" target="_blank">
        <FontAwesomeIcon icon={faSpotify} size={iconSize} />
      </a>
      <a href={social.appleMusic} className="apple social" target="_blank">
        <FontAwesomeIcon icon={faItunes} size={iconSize} />
      </a>
      <a href={mailTo} className="email social" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
      </a>{' '}
      <a href={social.shop} className="shop social" target="_blank">
        <FontAwesomeIcon icon={faBasketShopping} size={iconSize} />
      </a>
    </div>
  );
}
