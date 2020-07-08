import React from 'react';
import './footer.sass';

var Footer = () => {
  return (
    <div className="footer">
        <ul>
            <li><a href="/">© 2020 <span style={{color: '#ED6A5A'}}>Torch.fyi</span></a></li>
            {/* <li><a href="/">Work for us</a></li> */}
            <li><a href="/doNotSellInfo">Do Not Sell My Personal Information</a></li>
            <li><a href="/privacy_center">Privacy Center</a></li>
            <li><a href="/privacy_terms">Cookies, Privacy and Terms</a></li>
            <li><a href="/help_center">Help Center</a></li>
        </ul>
    </div>
  );
}

export default Footer;
