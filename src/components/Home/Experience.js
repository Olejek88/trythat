import React from 'react';
import { observer } from 'mobx-react';

@observer
class Experience extends React.Component {
  render() {
    return (
        <div className="experience-tile tile1 discovery">
            <a className="tile_product tile js-product-title desktop" href="/">
                <div>
                    <div className="product_img_container">
                        <div className="buy_type black sg-inline-middle" style={{direction:'ltr', display:'none'}}>
                            <div className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                 style={{backgroundColor: '#000000'}}>
                            <span>
                            </span>
                            </div>
                            <svg style={{marginLeft: '-1px', width:'1em', height:'2em'}}>
                                <polygon points="0,0 12,0 0,25" style={{fill: '#000000'}}>
                                </polygon>
                            </svg>
                        </div>
                        <div className="auction_type" style={{display: 'none'}}>
                            <div className="auction_text sg-text-transform sg-inline-middle">
                                <span>
                                </span>
                            </div>
                        </div>

                        <div className="product_image_wrapper">
                            <div className="product_image_viewport">
                                <img className="product_img" data-src="/example_experience.jpg"
                                     alt="Dine in the Heart Kitchen" title="Dine in the Heart California"
                                     src="/example_experience.jpg"/>
                            </div>
                        </div>
                        <img className="celeb_img" src="/luminary2.jpg" />
                            <div className="heart_img" tabIndex="0" pid="325" title="Wishlist" lvl="1">
                            </div>
                            <div className="wishlist-main-con"
                                 style={{zIndex: '1', position: 'absolute', right: '5px', textAlign: 'right', top: '40px'}}>
                                <img className="wishlist-carrot" src="/arrow_up_white_border.png"/>
                                    <div className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                        <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                           style={{textAlign: 'center'}}>add to wishlist</p>
                                    </div>
                            </div>
                            <div className="occasion_banner_container ">
                            </div>
                    </div>
                </div>
                <div className="product_text_container">
                    <div className="details_div">
                        <div className="min_height_placeholder"></div>
                        <div className="product_celeb_name sg-c-2">Alice Waters</div>
                        <div className="product_stars">
                        </div>
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="product_location sg-c-2">Berkeley, California</div>
                    <div className="product_title sg-c-1">
                        <p style={{margin: '0 0 2px 0'}}>Dine in the Heart of the Chez Panisse Kitchen: A Convivial Supper at an Iconic Restaurant</p>
                    </div>
                    <div className="product_price sg-c-2">US$1,000/person</div>
                </div>
            </a>
        </div>
    );
  }
}

export default Experience;
