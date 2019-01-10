import React from 'react';
import Link from "react-router-dom/es/Link";
import {inject} from "mobx-react/index";

class SiteMenu extends React.Component {
    render() {
        return (
            <div id="footer" className="desktop-sitemenu responsive sg-bg-1">
                <div style={{width: '100%', margin: '0 auto'}} className="responsive ">
                    <div id="footer-logo">
                        <Link to="/" className="navbar-brand">
                            <img className="logo-img" style={{maxHeight: '50px'}}
                                 alt={this.props.commonStore.appName.toLowerCase()}
                                 src={"images/trythat_logo_text_1.png"}/>
                        </Link>
                    </div>
                    <div id="footer-menu" className="responsive sg-c-3" style={{textAlign: 'center'}}>
                        <ul className="footer-menu-item">
                            <p style={{marginBottom: '16px'}}>Компания</p>
                            <li><a className="sg-c-3 allowAllUsers" href={"/#/about"}>О нас</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href={"/#/sell"}>Как это работает</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Карьера</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Статьи</a></li>
                        </ul>
                        <ul className="footer-menu-item">
                            <p>Помощь</p>
                            <li>
                                <div id="email-us"><a href={"mailto:sale@trythat.info"}>Е-мэйл</a></div>
                                <div>(922) 1212121</div>
                            </li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Гарантии</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">FAQ</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Карта сайта</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href={"/#/luminaries"}>Все представители</a></li>
                        </ul>
                        <ul className="footer-menu-item">
                            <p>Работайте с нами</p>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Клиенты</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Партнеры</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href="/">Корпоративным клиентам</a></li>
                        </ul>
                        <ul className="footer-menu-item">
                            <p>Правила</p>
                            <li><a className="sg-c-3 allowAllUsers" href={"/#/privacy"}>Безопасность</a></li>
                            <li><a className="sg-c-3 allowAllUsers" href={"/#/terms-customers"}>Правила для клиентов</a>
                            </li>
                            <li><a className="sg-c-3 allowAllUsers" href={"/#/terms-luminary"}>Правила для
                                исполнителей</a>
                            </li>
                        </ul>
                        <ul id="stay-connected" className="footer-menu-item" style={{margin: '0'}}>
                            <p>Мы в сетях</p>
                            <li style={{display: 'inline'}}>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                                   className="allowAllUsers">
                                    <img className="social-media-icons" src={"images/icon_facebook.png"} alt="fb"/></a>
                            </li>
                            <li style={{display: 'inline'}}>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                                   className="allowAllUsers">
                                    <img className="social-media-icons" src={"images/icon_twitter.png"} alt="twitter"/></a>
                            </li>
                            <li style={{display: 'inline'}}>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                                   className="allowAllUsers">
                                    <img className="social-media-icons" src={"images/icon_instagram.png"}
                                         alt="inst"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('commonStore')(SiteMenu);
