import React from 'react';
import {inject} from "mobx-react/index";
import Link from "react-router-dom/es/Link";
import FavoredButton from "../Components/FavoredButton";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null,
            isMounted: false,
            activity: '',
            activity_image: '',
            activityPrice: 0
        };
    }

    componentWillMount() {
        let self = this;
        if (this.props.activity) {
            this.setState({activity: this.props.activity});
            if (this.props.activity.activityImages[0])
                this.setState({
                    activity_image: {
                        title: this.props.activity.activityImages[0].image.title,
                        path: this.props.commonStore.apiServer + this.props.activity.activityImages[0].image.path
                    }
                });
            else {
                this.setState({
                    activity_image: {
                        title: 'no', path: 'images/activity_no_image.jpg'
                    }
                });
            }

            const customer = this.props.userStore.currentCustomer;
            if (customer) {
                this.setState({customer: customer});
            }
            this.props.activityListingStore.loadActivityListing(this.props.activity).then(function (activityListing) {
                let price = self.props.activityListingStore.loadActivityListingMinimumPrice(activityListing);
                self.setState({activityPrice: price});
            });
        }
    }

    render() {
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
                            <div className="product_image_viewport" style={{overflow: 'hidden'}}>
                                <Link
                                    to={"/activity/" + this.state.activity.id}
                                    className="tile_product tile js-product-title desktop">
                                    <img className="thumbnail_img product_img" alt={this.state.activity_image.title}
                                         title={this.state.activity_image.title}
                                         src={this.state.activity_image.path}
                                         style={{width: '350px'}}
                                    />
                                </Link>
                            </div>
                        </div>
                        <img className="celeb_img"
                             src={this.props.commonStore.apiServer + this.state.activity.luminary.user.image.path}
                             alt={this.state.activity.luminary.user.firstName}/>
                        <FavoredButton activity={this.state.activity}/>
                        <div className="wishlist-main-con wishlist_spec">
                            <img className="wishlist-carrot" src={"images/arrow_up_white_border.png"} alt={""}/>
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
                    <Link
                        to={"/activity/" + this.state.activity.id}
                        className="tile_product tile js-product-title desktop">
                        <div className="details_div">
                            <div className="min_height_placeholder">
                            </div>
                            <div className="product_celeb_name sg-c-2">
                                {this.state.activity.luminary.user.firstName + " " + this.state.activity.luminary.user.lastName}</div>
                            <div className="product_stars">
                            </div>
                            <div style={{clear: 'both'}}>
                            </div>
                        </div>
                        <div className="product_location sg-c-2">{this.state.activity.location &&
                        this.state.activity.location.title}</div>
                        <div className="product_title sg-c-1">
                            <p style={{margin: '0 0 2px 0'}}>{this.state.activity.title}</p>
                        </div>
                        <div className="product_price sg-c-2">от {this.state.activityPrice}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default inject('activityListingStore', 'activityStore', 'commonStore', 'userStore', 'wishListStore')(Experience);
