import React from 'react';

class SiteMenu extends React.Component {
  render() {
    return (
        <div id="header-menu" className="sg-inline-flex-grow" style={{margin: '0 10px', order: '2'}}>
            <div className="level-menu  sg-inline-middle version1" style={{flexWrap: 'nowrap'}} data-header-version="1">
                <div className="l-menu js-menu" data-navmenuid="1" id="menu1">
                    <a href="/" className="label js-tab-featrue js-show-dropdown" id="menu1">
                        <p className="sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Категории</p>
                    </a>
                    <div className="highlight-bar" id="menu_highlight_1"></div>
                    <div className="drop-down version1" style={{minWidth: '320px'}} id="menu_drop_1">
                        <div className="level-3">
                            <div className="col" style={{minWidth: '320px'}}>
                                <div data-navmenuid="185" className="topNavCat">
                                    <a href="/#/category/1" title="Искусство" className=" " tabIndex="1001">
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
                    </div>
                </div>
                <div className="l-menu js-menu" data-navmenuid="2" id="menu2">
                    <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1100">
                        <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>На случай</p>
                    </a>
                    <div className="highlight-bar" id="menu_highlight_2"></div>
                    <div className="drop-down  version1" style={{minWidth: '320px'}} id="menu_drop_2">
                        <div className="level-2 f-style-ovr1 sg-c-3">
                            <div className="col"><p className="fo-13-i-g co-ff">Впечатления</p></div>
                            <div className="col"><p className="fo-13-i-g co-ff">События</p></div>
                        </div>
                        <div className="level-3">
                            <div className="col">
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Локальные туры" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Локальные туры</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Путешествия" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Путешествия</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Один раз в жизни" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Один раз в жизни</p></a>
                                </div>
                                <div data-navmenuid="203" className="topNavCat">
                                    <a href="/" title="Концеты" className=" " tabIndex="1001">
                                        <p className="level-link fo-14-n-s4">Концерты</p></a>
                                </div>
                            </div>
                            <div className="col">
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
                    </div>
                </div>
                <div className="l-menu js-menu  " data-navmenuid="3"  id="menu3">
                    <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1200">
                        <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Локации</p>
                    </a>
                    <div className="highlight-bar" id="menu_highlight_3"></div>
                    <div className="drop-down version1" style={{minWidth: '160px'}} id="menu_drop_3">
                        <div className="level-3">
                            <div className="col">
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
                <div className="l-menu js-menu  " data-navmenuid="122" id="menu4">
                    <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1300">
                        <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Фильтр</p>
                    </a>
                    <div className="highlight-bar" id="menu_highlight_4"></div>
                    <div className="drop-down  version1" style={{minWidth: '160px'}} id="menu_drop_4">
                        <div className="level-3">
                            <div className="col">
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
            </div>
        </div>
   );
  }
}

export default SiteMenu;
