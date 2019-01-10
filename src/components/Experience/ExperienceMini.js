import React from 'react';
import {inject} from 'mobx-react';
import Link from "react-router-dom/es/Link";

class ExperienceMini extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favored: false,
            favoredClass: "heart_img",
            customer: null,
            activity: '',
            activity_image: '',
            activityPrice: 0,
            wish: null
        };

        this.onFavored = () => {
            this.setState({favored: !this.state.favored});
            if (this.state.favored && this.state.wish) {
                this.setState({favoredClass: 'heart_img wishlist listed'});
                this.props.wishListStore.unWish(this.state.wish);
            }
            else {
                this.setState({favoredClass: 'heart_img'});
                let wish = {
                    activity_id: this.state.activity.id,
                    customer: this.state.customer.id
                };
                this.props.wishListStore.wish(wish);
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps.activity);
    }

    componentWillMount() {
        this.loadData(this.props.activity);
    }

    loadData(activity) {
        let self = this;
        if (activity) {
            this.setState({favoredClass: 'heart_img'});
            this.setState({activity: activity});
            this.props.activityListingStore.loadActivityListing(activity).then(function (activityListing) {
                let price = self.props.activityListingStore.loadActivityListingMinimumPrice(activityListing);
                self.setState({activityPrice: price});
            });
            if (activity.activityImages[0])
                this.setState({
                    activity_image: {
                        title: activity.activityImages[0].image.title,
                        path: this.props.commonStore.apiServer + activity.activityImages[0].image.path
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
            this.setState({customer: customer});
            this.props.wishListStore.isWished(activity.id, customer.id).then((wish) => {
                if (wish.length > 0) {
                    this.setState({favoredClass: "heart_img wishlist listed"});
                    this.setState({wish: wish[0]});
                    this.setState({favored: "favored"});
                }
            });
        }
    }

    render() {
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

                        <Link
                            to={"/activity/" + this.state.activity.id}
                            className="tile_product tile js-product-title desktop">
                            <div className="product_image_wrapper">
                                <div className="product_image_viewport">
                                    <img className="product_img lazyloaded"
                                         data-src={this.state.activity_image.path}
                                         alt={this.state.activity_image.title}
                                         title={this.state.activity_image.title}
                                         src={this.state.activity_image.path}/>
                                </div>
                            </div>
                        </Link>
                        <img className="celeb_img js-lazyload sg-bg-3"
                             data-src={this.state.activity.luminary.user.image.path}
                             src={this.props.commonStore.apiServer + this.state.activity.luminary.user.image.path}
                             alt={this.state.activity.luminary.user.firstName + " " + this.state.activity.luminary.user.lastName}/>
                        <div className={this.state.favoredClass} tabIndex="0" title="Список желаний"
                             onClick={this.onFavored}>
                        </div>
                        <div className="wishlist-main-con"
                             style={{
                                 zIndex: '1', position: 'absolute', right: '5px', textAlign: 'right',
                                 top: '40px'
                             }}>
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

                <div className="product_text_container sg-f-bdy ">
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

                    <div className="product_location sg-c-2">{this.state.activity.location.title}</div>
                    <div className="product_title sg-c-1">
                        <p>{this.state.activity.title}</p>
                    </div>
                    <div className="product_price sg-c-2">от {this.state.activityPrice}</div>
                </div>
            </div>
        );
    }
}

export default inject('activityListingStore', 'activityStore', 'commonStore', 'userStore', 'wishListStore')(ExperienceMini);
