import React from 'react';
import {observer, inject} from 'mobx-react';
import activityStore from "../../stores/activityStore";
import customerStore from "../../stores/customerStore";

@observer
@inject('activityListingStore')
class ExperienceMini extends React.Component {
    constructor() {
        super();
        this.state = {
            favored: false,
            favoredClass: "heart_img"
        };

        this.onFavored = () => {
            this.setState({favored: !this.state.favored});
            if (this.state.favored)
                this.setState({favoredClass:'heart_img wishlist listed'});
            else
                this.setState({favoredClass:'heart_img'});
        };
    }

    componentWillMount() {
        if (this.props.activity) {
            const customer = customerStore.getCustomer();
            const favored = activityStore.isFavorite(this.props.activity._id, customer._id);
            Object.assign(this.state, {
                favored: favored
            });
            if (favored)
                this.setState({favoredClass: "heart_img wishlist listed"});
            else
                this.setState({favoredClass: 'heart_img'});
        }
    }

    render() {
        const activity = this.props.activity;
        this.props.activityListingStore.loadActivityListing(activity);
        const activityPrice = this.props.activityListingStore.loadActivityListingMinimumPrice();
        return (
            <div className="productTile product default">
                <div>
                    <div className="product_img_container sg-c-3">
                        <div className="buy_type black sg-inline-middle"
                             style={{direction: 'ltr', display: 'none'}}>
                            <div className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                 style={{backgroundColor: '#000000'}}>
                                                <span>
                                                </span>
                            </div>
                            <svg style={{marginLeft: '-1px'}} width="1em" height="2em">
                                <polygon points="0,0 12,0 0,25" style={{fill: '#000000'}}></polygon>
                            </svg>
                        </div>
                        <div className="auction_type" style={{display: 'none'}}>
                            <div className="auction_text sg-text-transform sg-inline-middle">
                                            <span>
                                            </span>
                            </div>
                        </div>

                        <a className="tile_product tile js-product-title   desktop" href="/">
                            <div className="product_image_wrapper">
                                <div className="product_image_viewport">
                                    <img className="product_img lazyloaded"
                                         data-src={activity.images[0].path}
                                         alt={activity.title}
                                         title={activity.title}
                                         src={activity.images[0].path}/>
                                </div>
                            </div>
                        </a>
                        <img className="celeb_img js-lazyload sg-bg-3"
                             data-src={activity.luminary.user.image.path} src={activity.luminary.user.image.path}
                             alt={activity.luminary.user.firstName + " " + activity.luminary.user.lastName}/>
                        <div className={this.state.favoredClass} tabIndex="0" title="Список желаний" onClick={this.onFavored}>
                        </div>
                        <div className="wishlist-main-con"
                             style={{
                                 zIndex: '1', position: 'absolute', right: '5px', textAlign: 'right',
                                 top: '40px'
                             }}>
                            <img className="wishlist-carrot" src={"arrow_up_white_border.png"} alt={""}/>
                            <div className="wishlist-text-con sg-bg-3 sg-bd-2 ">
                                <p className="wishlist-text sg-f-bdy sg-c-primary sg-text-transform"
                                   style={{textAlign: 'center'}}>хочу!</p>
                            </div>
                        </div>
                        <div className="occasion_banner_container ">
                        </div>
                    </div>
                </div>

                <div className="product_text_container sg-f-bdy ">
                    <div className="details_div">
                        <div className="min_height_placeholder">
                        </div>
                        <div className="product_celeb_name sg-c-2">
                            {activity.luminary.user.firstName + " " + activity.luminary.user.lastName}</div>
                        <div className="product_stars">
                        </div>
                        <div style={{clear: 'both'}}>
                        </div>
                    </div>

                    <div className="product_location sg-c-2">{activity.location.title}</div>
                    <div className="product_title sg-c-1">
                        <p>{activity.title}</p>
                    </div>
                    <div className="product_price sg-c-2">от {activityPrice}</div>
                </div>
            </div>
        );
    }
}

export default ExperienceMini;
