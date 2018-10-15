import React from 'react';
import {observer} from 'mobx-react';
import activityStore from "../stores/activityStore";

@observer
class Experience extends React.Component {
    constructor() {
        super();

        const activity = this.props.activity;

        this.state = {
            favored: false,
        };

        this.onFavored = (event) => {
            this.setState({ favored: !this.state.favored; });
        };
    }

    componentWillMount() {
        if (this.props.activity) {

            Object.assign(this.state, {
                favored: this.props.activity.favored;
            });
        }
    }

    render() {
        const activityPrice = activityStore.loadTestActivityMininumPrice(this.activity);
        return (
            <div className="experience-tile tile1 discovery">
                <a className="tile_product tile js-product-title desktop" href={"/#/activity/" + this.activity.id}>
                    <div>
                        <div className="product_img_container">
                            <div className="buy_type black sg-inline-middle" style={{direction: 'ltr', display: 'none'}}>
                                <div className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                     style={{backgroundColor: '#000000'}}>
                            <span>
                            </span>
                                </div>
                                <svg style={{marginLeft: '-1px', width: '1em', height: '2em'}}>
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
                                    <img className="product_img" data-src={this.activity.images[0].path} alt={this.activity.images[0].title}
                                         title={this.activity.images[0].title} src={this.activity.images[0].path} />
                                </div>
                            </div>
                            <img className="celeb_img" src={this.activity.luminary.user.image.path} alt={this.activity.luminary.user.firstName}/>
                            <div className="heart_img" tabIndex="0" title="Список желаний">
                            </div>
                            <div className="wishlist-main-con wishlist_spec">
                                <img className="wishlist-carrot" src={"/arrow_up_white_border.png"} alt={""}/>
                                <div className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                    <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                       style={{textAlign: 'center'}}>хочу!</p>
                                </div>
                            </div>
                            <div className="occasion_banner_container ">
                            </div>
                        </div>
                    </div>
                    <div className="product_text_container">
                        <div className="details_div">
                            <div className="min_height_placeholder"></div>
                            <div className="product_celeb_name sg-c-2">
                                {this.activity.luminary.user.firstName + " " + this.activity.luminary.user.lastName}</div>
                            <div className="product_stars">
                            </div>
                            <div style={{clear: 'both'}}></div>
                        </div>
                        <div className="product_location sg-c-2">{this.activity.location.title}</div>
                        <div className="product_title sg-c-1">
                            <p style={{margin: '0 0 2px 0'}}>{this.activity.title}</p>
                        </div>
                        <div className="product_price sg-c-2">от {this.activityPrice}</div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Experience;
