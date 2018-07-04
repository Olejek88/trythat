import React from 'react';
import { observer } from 'mobx-react';

@observer
class SiteMenu extends React.Component {
  render() {
    return (
        <div id="footer" className="desktop-sitemenu responsive sg-bg-1">
            <div style={{width: '100%', margin: '0 auto'}} className="responsive ">
                <div id="footer-menu" className="responsive sg-c-3" style={{textAlign: 'center'}}>
                    <ul className="footer-menu-item">
                        <p style={{marginBottom: '16px'}}>Company</p>
                        <li><a className="sg-c-3 allowAllUsers" href="/">About Us</a></li>
                        <li><a className="sg-c-3 allowAllUsers">How It Works</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Careers</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Press</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Blog</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Past Events &amp; Products</a></li>
                    </ul>
                    <ul className="footer-menu-item">
                        <p>Customer Care</p>
                        <li>
                            <div id="email-us">Email Us</div>
                            <div>(922) 1212121</div>
                        </li>
                        <li><a className="sg-c-3 allowAllUsers"
                               href="/">Returns &amp; Shipping</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">FAQs</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Sitemap</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">All Luminaries</a></li>
                    </ul>
                    <ul className="footer-menu-item">
                        <p>Working with Us</p>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Charities</a></li>
                        <li><a className="sg-c-3 allowAllUsers"
                               href="/">Luminaries</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Our Partners</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Corporate Services</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Our Charities (A-Z)</a></li>
                    </ul>
                    <ul className="footer-menu-item">
                        <p>Policies</p>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Privacy</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Copyright Policy</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Customer Terms Of Use</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Luminary Terms Of Use</a>
                        </li>
                    </ul>
                    <ul id="stay-connected" className="footer-menu-item" style={{margin: '0'}}>
                        <p>Stay Connected</p>
                        <li style={{display: 'inline'}}>
                            <a href="https://www.facebook.com/" target="_blank" className="allowAllUsers">
                            <img className="social-media-icons" src="/icon_facebook.png" alt="fb"/></a>
                        </li>
                        <li style={{display: 'inline'}}>
                            <a href="https://twitter.com/" target="_blank" className="allowAllUsers">
                                <img className="social-media-icons" src="/icon_twitter.png" alt="twitter"/></a>
                        </li>
                        <li style={{display: 'inline'}}>
                            <a href="https://www.instagram.com/" target="_blank" className="allowAllUsers">
                                <img className="social-media-icons" src="/icon_instagram.png" alt="inst" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default SiteMenu;
