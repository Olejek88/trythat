import React from 'react';
import { observer } from 'mobx-react';

@observer
class SiteMenu extends React.Component {
  render() {
    return (
        <div id="header-menu" className="sg-inline-flex-grow" style={{margin: '0 10px', order: '2'}}>
            <div className="level-menu  sg-inline-middle version2" style={{flexWrap: 'nowrap'}} data-header-version="2">
                <div className="l-menu js-menu" data-navmenuid="175">
                    <a href="#" style={{cursor: 'default'}} className="label js-tab-featrue js-show-dropdown " tabIndex="1000">
                        <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Впечатления</p>
                    </a>
                    <div className="highlight-bar" style={{display: 'block'}}></div>
                    <div className="drop-down version2" style={{minWidth: '0px', display: 'block'}}>
                        <div className="lvl2_container">
                            <div className="lvl2_title sg-f-btn sg-text-transform sg-bg-1 sg-c-5">Категории</div>
                            <div className="lvl2_content">
                                <div data-navmenuid="185" className="topNavCat">
                                    <a href="/" title="Искусство" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Искусство</p></a>
                                </div>
                                <div data-navmenuid="185" className="topNavCat">
                                    <a href="/" title="Фотография" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Фотография</p></a>
                                </div>
                                <div data-navmenuid="185" className="topNavCat">
                                    <a href="/" title="Игры" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Игры</p></a>
                                </div>
                                <div data-navmenuid="185" className="topNavCat">
                                    <a href="/" title="Спорт" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Спорт</p></a>
                                </div>
                                <div data-navmenuid="185" className="topNavCat">
                                    <a href="/" title="Музыка" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Музыка</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="lvl2_container">
                            <div
                                className="lvl2_title sg-f-btn sg-text-transform sg-bg-1 sg-c-5">Случаи
                            </div>
                            <div className="lvl2_content">
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Корпоративные события" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Корпоративные события</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Свадьбы" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Свадьба</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Вечеринки" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Вечеринки</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Подарки" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Подарки</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Юбилеи" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Юбилеи</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="lvl2_container">
                            <div className="lvl2_title sg-f-btn sg-text-transform sg-bg-1 sg-c-5">Тренды</div>
                            <div className="lvl2_content">
                                <div data-navmenuid="213" className="topNavCat">
                                    <a href="/" title="Популярное" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Популярное</p></a>
                                </div>
                                <div data-navmenuid="213" className="topNavCat">
                                    <a href="/" title="Новинки" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Новинки</p></a>
                                </div>
                                <div data-navmenuid="213" className="topNavCat">
                                    <a href="/" title="Недорогие" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Недорогие</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-menu js-menu  " data-navmenuid="220">
                    <a href="#" style={{cursor: 'default'}} className="label js-tab-featrue js-show-dropdown" tabIndex="1100">
                        <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Города</p>
                    </a>
                    <div className="highlight-bar" style={{display: 'none'}}></div>
                    <div className="drop-down  version2" style={{minWidth: '0px', display: 'none'}}>
                        <div className="lvl2_container">
                            <div className="lvl2_title sg-f-btn sg-text-transform sg-bg-1 sg-c-3"></div>
                            <div className="lvl2_content">
                                <div data-navmenuid="go-298" className="topNavCat">
                                    <a href="/" title="Челябинск" className=" " tabIndex="1101">
                                        <p className="level-link fo-14-n-s4">Челябинск</p></a>
                                </div>
                                <div data-navmenuid="go-298" className="topNavCat">
                                    <a href="/" title="Екатеринбург" className=" " tabIndex="1101">
                                        <p className="level-link fo-14-n-s4">Екатеринбург</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
  }
}

export default SiteMenu;
