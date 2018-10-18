import React from 'react';
import {observer} from 'mobx-react';
import Experience from "../Experience/Experience";

@observer
class ActivityYouMayLike extends React.Component {
    render() {
        const activity = this.props.activity;
        // TODO добавить выборку по понравившимся
        return (
            <div className="p-otherExp-section " data-html="">
                <div className="otherExp-section">
                    <div style={{width: '100%', maxWidth: '960px', margin: '0 auto'}}>
                        <div className="row">
                            <div className="row" style={{margin: '32px 0'}}>
                                <h3 className="sg-f-dspl-l sg-text-transform you-may-also-enjoy">Вам также может понравиться</h3>
                            </div>
                            <div className="experience">
                                <React.Fragment>
                                    <Experience activity={activity}/>
                                    <Experience activity={activity}/>
                                    <Experience activity={activity}/>
                                    <Experience activity={activity}/>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                            /*
                            <div className="products-row">
                                <div className="main-vertical-list">
                                    <div id="wall_5" className="wall">
                                        <input className="js-totalTilesCnt" type="hidden">
                                            <div className="pages">
                                                <div className="first js-block" idx="0">
                                                    <div className="productTile product default" pid="324" displayorder="20.000000" pos="1" data-content="">
                                                        <a className="tile_product tile js-product-title   desktop" href="/" pid="324" displayorderpoints="" displayorder="">
                                                            <div>
                                                                <div className="product_img_container sg-c-3">
                                                                    <div className="buy_type black sg-inline-middle" style="direction:ltr; display:none; ">
                                                                        <div className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle" style="background-color:#000000;">
                                                                        <span>
                                                                        </span>
                                                                        </div>
                                                                        <svg style="margin-left: -1px;" width="1em" height="2em">
                                                                            <polygon points="0,0 12,0 0,25" style="fill:#000000"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="product_image_wrapper">
                                                                        <div className="product_image_viewport">
                                                                            <img className="product_img js-lazyload"
                                                                                 data-src="alicewaters__market__L.jpg"
                                                                                 alt="Alice Waters"
                                                                                 title="Alice Waters">
                                                                        </div>
                                                                    </div>
                                                                    <img className="celeb_img js-lazyload  sg-bg-3"
                                                                         data-src="waters_350px__L.jpg" style="">
                                                                        <div className="heart_img wishlist "
                                                                             tabIndex="0"
                                                                             pid="324" title="Wishlist" lvl="1">
                                                                        </div>
                                                                        <div className="wishlist-main-con"
                                                                             style="z-index:1; position: absolute; right: 5px; text-align: right; top: 40px;">
                                                                            <img className="wishlist-carrot"
                                                                                 src="activity_files/arrow_up_white_border.png">
                                                                                <div
                                                                                    className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                                                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                                                                       style="text-align:center">add to
                                                                                        wishlist</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="occasion_banner_container ">
                                                                        </div>

                                                                </div>
                                                            </div>


                                                            <div className="product_text_container sg-f-bdy ">
                                                                <div className="details_div">
                                                                    <div className="min_height_placeholder"></div>
                                                                    <div className="product_celeb_name sg-c-2">Alice
                                                                        Waters
                                                                    </div>
                                                                    <div className="product_stars">
                                                                    </div>
                                                                    <div style="clear:both;"></div>
                                                                </div>

                                                                <div className="product_location sg-c-2">Berkeley,
                                                                    California
                                                                </div>

                                                                <div className="product_title sg-c-1">
                                                                    <p>Alice Waters-Led Tour of the Farmers Market and
                                                                        Seasonal Lunch at Chez Panisse Cafe</p>
                                                                </div>

                                                                <div className="product_price sg-c-2">US$5,000/person
                                                                </div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="productTile product default" pid="1200"
                                                         displayorder="10000.000000" pos="2" data-content="">

                                                        <a className="tile_product tile js-product-title   desktop"
                                                           href="https://www.ifonly.com/culinary/product/1200/private-meal-at-your-residence/5/31?sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1&amp;webSyncID=42396a29-6b5c-16d4-4a0c-c7528d6b8470&amp;sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1"
                                                           pid="1200" displayorderpoints="" displayorder="">

                                                            <div>
                                                                <div className="product_img_container sg-c-3">


                                                                    <div className="buy_type black sg-inline-middle"
                                                                         style="direction:ltr; display:none; ">
                                                                        <div
                                                                            className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                                                            style="background-color:#000000;">
                    <span>
                                            </span>
                                                                        </div>
                                                                        <svg style="margin-left: -1px;" width="1em"
                                                                             height="2em">
                                                                            <polygon points="0,0 12,0 0,25"
                                                                                     style="fill:#000000"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="auction_type"
                                                                         style="display:none; ">
                                                                        <div
                                                                            className="auction_text sg-text-transform sg-inline-middle"
                                                                            style="">
                    <span>
                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="product_image_wrapper">
                                                                        <div className="product_image_viewport">
                                                                            <img className="product_img js-lazyload"
                                                                                 data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/36/products/panisse-1main__L.jpg"
                                                                                 alt="Private Meal at Your Residence: San Francisco, California"
                                                                                 title="Private Meal at Your Residence: San Francisco, California">
                                                                        </div>
                                                                    </div>
                                                                    <img className="celeb_img js-lazyload  sg-bg-3"
                                                                         data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/36/waters_350px__L.jpg"
                                                                         style="">
                                                                        <div className="heart_img wishlist "
                                                                             tabIndex="0"
                                                                             pid="1200" title="Wishlist" lvl="1">
                                                                        </div>
                                                                        <div className="wishlist-main-con"
                                                                             style="z-index:1; position: absolute; right: 5px; text-align: right; top: 40px;">
                                                                            <img className="wishlist-carrot"
                                                                                 src="activity_files/arrow_up_white_border.png">
                                                                                <div
                                                                                    className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                                                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                                                                       style="text-align:center">add to
                                                                                        wishlist</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="occasion_banner_container ">
                                                                        </div>

                                                                </div>
                                                            </div>


                                                            <div className="product_text_container sg-f-bdy ">
                                                                <div className="details_div">
                                                                    <div className="min_height_placeholder"></div>
                                                                    <div className="product_celeb_name sg-c-2">Alice
                                                                        Waters
                                                                    </div>
                                                                    <div className="product_stars">
                                                                    </div>
                                                                    <div style="clear:both;"></div>
                                                                </div>

                                                                <div className="product_location sg-c-2">San Francisco,
                                                                    California
                                                                </div>

                                                                <div className="product_title sg-c-1">
                                                                    <p>Private Meal at Your Residence</p>
                                                                </div>

                                                                <div className="product_price sg-c-2">Request Quote
                                                                </div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="productTile product default" pid="1914"
                                                         displayorder="1.000000" pos="3" data-content="">

                                                        <a className="tile_product tile js-product-title   desktop"
                                                           href="https://www.ifonly.com/culinary/product/1914/clos-pissarra-winemaker-dinner-with-tastes-of-gascony-and-basque-country/5/31?sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1&amp;webSyncID=42396a29-6b5c-16d4-4a0c-c7528d6b8470&amp;sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1"
                                                           pid="1914" displayorderpoints="" displayorder="">

                                                            <div>
                                                                <div className="product_img_container sg-c-3">


                                                                    <div className="buy_type black sg-inline-middle"
                                                                         style="direction:ltr; display:none; ">
                                                                        <div
                                                                            className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                                                            style="background-color:#000000;">
                    <span>
                                            </span>
                                                                        </div>
                                                                        <svg style="margin-left: -1px;" width="1em"
                                                                             height="2em">
                                                                            <polygon points="0,0 12,0 0,25"
                                                                                     style="fill:#000000"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="auction_type"
                                                                         style="display:none; ">
                                                                        <div
                                                                            className="auction_text sg-text-transform sg-inline-middle"
                                                                            style="">
                    <span>
                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="product_image_wrapper">
                                                                        <div className="product_image_viewport">
                                                                            <img className="product_img js-lazyload"
                                                                                 data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/309/products/laurent_manrique_clos_pissarra_winemaker_dinner_with_tastes_of_gascony_and_basque_country_ifonly_714x470_1__L.jpg"
                                                                                 alt="Clos Pissarra Winemaker Dinner with Tastes of Gascony and Basque Country: San Francisco, California"
                                                                                 title="Clos Pissarra Winemaker Dinner with Tastes of Gascony and Basque Country: San Francisco, California">
                                                                        </div>
                                                                    </div>
                                                                    <img className="celeb_img js-lazyload  sg-bg-3"
                                                                         data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/309/screen.shot.2014.03.03.at.4.31.49.pm__L.jpg"
                                                                         style="">
                                                                        <div className="heart_img wishlist "
                                                                             tabIndex="0"
                                                                             pid="1914" title="Wishlist" lvl="1">
                                                                        </div>
                                                                        <div className="wishlist-main-con"
                                                                             style="z-index:1; position: absolute; right: 5px; text-align: right; top: 40px;">
                                                                            <img className="wishlist-carrot"
                                                                                 src="activity_files/arrow_up_white_border.png">
                                                                                <div
                                                                                    className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                                                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                                                                       style="text-align:center">add to
                                                                                        wishlist</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="occasion_banner_container ">
                                                                        </div>

                                                                </div>
                                                            </div>


                                                            <div className="product_text_container sg-f-bdy ">
                                                                <div className="details_div">
                                                                    <div className="min_height_placeholder"></div>
                                                                    <div className="product_celeb_name sg-c-2">Laurent
                                                                        Manrique
                                                                    </div>
                                                                    <div className="product_stars">
                                                                    </div>
                                                                    <div style="clear:both;"></div>
                                                                </div>

                                                                <div className="product_location sg-c-2">San Francisco,
                                                                    California
                                                                </div>

                                                                <div className="product_title sg-c-1">
                                                                    <p>Clos Pissarra Winemaker Dinner with Tastes of
                                                                        Gascony
                                                                        and Basque Country</p>
                                                                </div>

                                                                <div className="product_price sg-c-2">US$500/person
                                                                </div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="productTile product default" pid="1415"
                                                         displayorder="2.000000" pos="4" data-content="">

                                                        <a className="tile_product tile js-product-title   desktop"
                                                           href="https://www.ifonly.com/culinary/product/1415/springtime-aioli-luncheon-at-cafe-de-la-presse/5/31?sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1&amp;webSyncID=42396a29-6b5c-16d4-4a0c-c7528d6b8470&amp;sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1"
                                                           pid="1415" displayorderpoints="" displayorder="">

                                                            <div>
                                                                <div className="product_img_container sg-c-3">


                                                                    <div className="buy_type black sg-inline-middle"
                                                                         style="direction:ltr; display:none; ">
                                                                        <div
                                                                            className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                                                            style="background-color:#000000;">
                    <span>
                                            </span>
                                                                        </div>
                                                                        <svg style="margin-left: -1px;" width="1em"
                                                                             height="2em">
                                                                            <polygon points="0,0 12,0 0,25"
                                                                                     style="fill:#000000"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="auction_type"
                                                                         style="display:none; ">
                                                                        <div
                                                                            className="auction_text sg-text-transform sg-inline-middle"
                                                                            style="">
                    <span>
                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="product_image_wrapper">
                                                                        <div className="product_image_viewport">
                                                                            <img className="product_img js-lazyload"
                                                                                 data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/309/products/laurent_manrique_springtime_aioli_luncheon_at_cafe_de_la_presse_ifonly_714x470_1__L.jpg"
                                                                                 alt="Springtime Aioli Luncheon at Café de la Presse: San Francisco, California"
                                                                                 title="Springtime Aioli Luncheon at Café de la Presse: San Francisco, California">
                                                                        </div>
                                                                    </div>
                                                                    <img className="celeb_img js-lazyload  sg-bg-3"
                                                                         data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/309/screen.shot.2014.03.03.at.4.31.49.pm__L.jpg"
                                                                         style="">
                                                                        <div className="heart_img wishlist "
                                                                             tabIndex="0"
                                                                             pid="1415" title="Wishlist" lvl="1">
                                                                        </div>
                                                                        <div className="wishlist-main-con"
                                                                             style="z-index:1; position: absolute; right: 5px; text-align: right; top: 40px;">
                                                                            <img className="wishlist-carrot"
                                                                                 src="activity_files/arrow_up_white_border.png">
                                                                                <div
                                                                                    className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                                                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                                                                       style="text-align:center">add to
                                                                                        wishlist</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="occasion_banner_container ">
                                                                        </div>

                                                                </div>
                                                            </div>


                                                            <div className="product_text_container sg-f-bdy ">
                                                                <div className="details_div">
                                                                    <div className="min_height_placeholder"></div>
                                                                    <div className="product_celeb_name sg-c-2">Laurent
                                                                        Manrique
                                                                    </div>
                                                                    <div className="product_stars">
                                                                    </div>
                                                                    <div style="clear:both;"></div>
                                                                </div>

                                                                <div className="product_location sg-c-2">San Francisco,
                                                                    California
                                                                </div>

                                                                <div className="product_title sg-c-1">
                                                                    <p>Springtime Aioli Luncheon at Café de la
                                                                        Presse</p>
                                                                </div>

                                                                <div className="product_price sg-c-2">US$375/person
                                                                </div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="productTile product default" pid="259"
                                                         displayorder="3.000000" pos="5" data-content="">

                                                        <a className="tile_product tile js-product-title   desktop"
                                                           href="https://www.ifonly.com/culinary/product/259/private-dinner-party-at-restaurant-1833/5/31?sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1&amp;webSyncID=42396a29-6b5c-16d4-4a0c-c7528d6b8470&amp;sessionGUID=0baade86-6582-1e2c-63db-0805d57789c1"
                                                           pid="259" displayorderpoints="" displayorder="">

                                                            <div>
                                                                <div className="product_img_container sg-c-3">


                                                                    <div className="buy_type black sg-inline-middle"
                                                                         style="direction:ltr; display:none; ">
                                                                        <div
                                                                            className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                                                            style="background-color:#000000;">
                    <span>
                                            </span>
                                                                        </div>
                                                                        <svg style="margin-left: -1px;" width="1em"
                                                                             height="2em">
                                                                            <polygon points="0,0 12,0 0,25"
                                                                                     style="fill:#000000"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="auction_type"
                                                                         style="display:none; ">
                                                                        <div
                                                                            className="auction_text sg-text-transform sg-inline-middle"
                                                                            style="">
                    <span>
                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="product_image_wrapper">
                                                                        <div className="product_image_viewport">
                                                                            <img className="product_img js-lazyload"
                                                                                 data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/34/products/levi_mezick_private_dinner_at_restaurant_1833_ifonly_714x470_1__L.jpg"
                                                                                 alt="Private Dinner Party at Restaurant 1833: Monterey, California"
                                                                                 title="Private Dinner Party at Restaurant 1833: Monterey, California">
                                                                        </div>
                                                                    </div>
                                                                    <img className="celeb_img js-lazyload  sg-bg-3"
                                                                         data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/34/levi_mezick_marquee__L.jpg"
                                                                         style="">
                                                                        <div className="heart_img wishlist "
                                                                             tabIndex="0"
                                                                             pid="259" title="Wishlist" lvl="1">
                                                                        </div>
                                                                        <div className="wishlist-main-con"
                                                                             style="z-index:1; position: absolute; right: 5px; text-align: right; top: 40px;">
                                                                            <img className="wishlist-carrot"
                                                                                 src="activity_files/arrow_up_white_border.png">
                                                                                <div
                                                                                    className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                                                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                                                                       style="text-align:center">add to
                                                                                        wishlist</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="occasion_banner_container ">
                                                                        </div>

                                                                </div>
                                                            </div>


                                                            <div className="product_text_container sg-f-bdy ">
                                                                <div className="details_div">
                                                                    <div className="min_height_placeholder"></div>
                                                                    <div className="product_celeb_name sg-c-2">Levi
                                                                        Mezick
                                                                    </div>
                                                                    <div className="product_stars">
                                                                    </div>
                                                                    <div style="clear:both;"></div>
                                                                </div>

                                                                <div className="product_location sg-c-2">Monterey,
                                                                    California
                                                                </div>

                                                                <div className="product_title sg-c-1">
                                                                    <p>Private Dinner Party at Restaurant 1833</p>
                                                                </div>

                                                                <div className="product_price sg-c-2">US$250/person
                                                                </div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="productTile product default" pid="399" displayorder="4.000000" pos="6" data-content="">
                                                        <a className="tile_product tile js-product-title   desktop"
                                                           href="/" pid="399" displayorderpoints="" displayorder="">
                                                            <div>
                                                                <div className="product_img_container sg-c-3">
                                                                    <div className="buy_type black sg-inline-middle"
                                                                         style="direction:ltr; display:none; ">
                                                                        <div
                                                                            className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                                                            style="background-color:#000000;">
                                                                        <span>
                                                                        </span>
                                                                        </div>
                                                                        <svg style="margin-left: -1px;" width="1em"
                                                                             height="2em">
                                                                            <polygon points="0,0 12,0 0,25"
                                                                                     style="fill:#000000"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="auction_type"
                                                                         style="display:none; ">
                                                                        <div
                                                                            className="auction_text sg-text-transform sg-inline-middle"
                                                                            style="">
                    <span>
                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="product_image_wrapper">
                                                                        <div className="product_image_viewport">
                                                                            <img className="product_img js-lazyload"
                                                                                 data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/79/products/shutterstock_14633161_1__L.jpg"
                                                                                 alt="Greenmarket Tour: New York, New York"
                                                                                 title="Greenmarket Tour: New York, New York">
                                                                        </div>
                                                                    </div>
                                                                    <img className="celeb_img js-lazyload  sg-bg-3"
                                                                         data-src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/79/aprilbloomfield_ifonly__L.jpg"
                                                                         style="">
                                                                        <div className="heart_img wishlist "
                                                                             tabIndex="0"
                                                                             pid="399" title="Wishlist" lvl="1">
                                                                        </div>
                                                                        <div className="wishlist-main-con"
                                                                             style="z-index:1; position: absolute; right: 5px; text-align: right; top: 40px;">
                                                                            <img className="wishlist-carrot"
                                                                                 src="activity_files/arrow_up_white_border.png">
                                                                                <div
                                                                                    className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                                                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                                                                       style="text-align:center">add to
                                                                                        wishlist</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="occasion_banner_container ">
                                                                        </div>

                                                                </div>
                                                            </div>


                                                            <div className="product_text_container sg-f-bdy ">
                                                                <div className="details_div">
                                                                    <div className="min_height_placeholder"></div>
                                                                    <div className="product_celeb_name sg-c-2">April Bloomfield</div>
                                                                    <div className="product_stars">
                                                                    </div>
                                                                    <div style="clear:both;"></div>
                                                                </div>
                                                                <div className="product_location sg-c-2">New York, New York</div>
                                                                <div className="product_title sg-c-1">
                                                                    <p>Greenmarket Tour</p>
                                                                </div>
                                                                <div className="product_price sg-c-2">US$1,000/person
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="tiles-helper" flpc="6" flac="0">
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
*/
    );
    }
}
export default ActivityYouMayLike;
