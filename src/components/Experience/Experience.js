import React from 'react';
import customerStore from "../../stores/customerStore";
import {inject} from "mobx-react/index";

@inject('activityListingStore','activityStore', 'userStore')
class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            favored: false,
            favoredClass: "heart_img",
            customer: null
        };

        this.onFavored = () => {
            this.setState({favored: !this.state.favored});
            if (this.state.favored) {
                this.setState({favoredClass: 'heart_img wishlist listed'});
                this.props.activityStore.makeFavorite(this.props.activity._id, this.state.customer._id);
            }
            else {
                this.setState({favoredClass: 'heart_img'});
                this.props.activityStore.unmakeFavorite(this.props.activity._id, this.state.customer._id);
            }
        };
    }

    componentWillMount() {
        if (this.props.activity) {
            const customer = customerStore.getCustomer(this.props.userStore.currentUser);
            this.setState({customer: customer});
            const favored = this.props.activityStore.isFavorite(this.props.activity._id, customer._id);
            this.setState({favored: "favored"});
            if (favored)
                this.setState({favoredClass: "heart_img wishlist listed"});
            else
                this.setState({favoredClass: 'heart_img'});
        }
    }

    render() {
        const activity = this.props.activity;
        this.props.activityListingStore.loadActivityListing(activity);
        //console.log(this.props.activityListingStore.activityListingRegistry);
        const activityPrice = this.props.activityListingStore.loadActivityListingMinimumPrice();
        if (!activity)
            return null;
        else
            return (
                <div className="experience-tile tile1 discovery">
                    <div>
                        <div className="product_img_container">
                            <div className="buy_type black sg-inline-middle"
                                 style={{direction: 'ltr', display: 'none'}}>
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
                                    <a className="tile_product tile js-product-title desktop"
                                       href={"/#/activity/" + activity._id}>
                                        <img className="product_img" data-src={activity.images[0].path}
                                             alt={activity.images[0].title}
                                             title={activity.images[0].title} src={activity.images[0].path}/>
                                    </a>
                                </div>
                            </div>
                            <img className="celeb_img" src={activity.luminary.user.image.path}
                                 alt={activity.luminary.user.firstName}/>
                            <div className={this.state.favoredClass} tabIndex="0" title="Список желаний"
                                 onClick={this.onFavored}>
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
                        <a className="tile_product tile js-product-title desktop" href={"/#/activity/" + activity._id}>
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
                                <p style={{margin: '0 0 2px 0'}}>{activity.title}</p>
                            </div>
                            <div className="product_price sg-c-2">от {activityPrice}</div>
                        </a>
                    </div>
                </div>
            );
    }
}

export default Experience;
