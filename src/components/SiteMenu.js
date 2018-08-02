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
                        <p style={{marginBottom: '16px'}}>Компания</p>
                        <li><a className="sg-c-3 allowAllUsers" href="/">О нас</a></li>
                        <li><a className="sg-c-3 allowAllUsers">Как это работает</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Карьера</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Статьи</a></li>
                    </ul>
                    <ul className="footer-menu-item">
                        <p>Помощь</p>
                        <li>
                            <div id="email-us">Е-мэйл</div>
                            <div>(922) 1212121</div>
                        </li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Гарантии</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">FAQ</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Карта сайта</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Все представители</a></li>
                    </ul>
                    <ul className="footer-menu-item">
                        <p>Работайте с нами</p>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Клиенты</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Партнеры</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Корпоративным клиентам</a></li>
                    </ul>
                    <ul className="footer-menu-item">
                        <p>Правила</p>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Безопасность</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Правила для клиентов</a></li>
                        <li><a className="sg-c-3 allowAllUsers" href="/">Правила для исполнителей</a>
                        </li>
                    </ul>
                    <ul id="stay-connected" className="footer-menu-item" style={{margin: '0'}}>
                        <p>Stay Connected</p>
                        <li style={{display: 'inline'}}>
                            <a href="https://www.facebook.com/" target="_blank" className="allowAllUsers">
                            <img className="social-media-icons" src={"icon_facebook.png"} alt="fb"/></a>
                        </li>
                        <li style={{display: 'inline'}}>
                            <a href="https://twitter.com/" target="_blank" className="allowAllUsers">
                                <img className="social-media-icons" src={"icon_twitter.png"} alt="twitter"/></a>
                        </li>
                        <li style={{display: 'inline'}}>
                            <a href="https://www.instagram.com/" target="_blank" className="allowAllUsers">
                                <img className="social-media-icons" src={"icon_instagram.png"} alt="inst" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default SiteMenu;
