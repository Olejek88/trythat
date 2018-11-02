import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('wishListStore', 'userStore')
@observer
class WishListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            itemPresent: true
        };
    }

    render() {
        const activity = this.props.activity;
        let activity_link = "/#/activity/" + activity._id;
        let activity_price = this.props.price;
        let activity_image = {
            backgroundImage: 'url(' + this.props.activity.images[0].path + ')'
        };
        this.onRemove = () => {
            this.props.wishListStore.unWish(this.props.userStore.currentCustomer._id, activity._id);
            this.setState({itemPresent: false});
        };

        return (
            <React.Fragment>
                {this.state.itemPresent &&
                <li className="sg-inline-middle" style={{width: '100%'}}>
                    <div className="product_div desktop  sg-inline-middle "
                         style={{margin: '10px 0'}}>
                        <div className="product_img_container sg-c-3"
                             style={{width: '150px', height: '100px'}}>
                            <a href="/" className="wish_list_image" style={activity_image}>
                            </a>
                            <div style={{width: '22px'}}>&nbsp;</div>
                        </div>
                        <div className="item_txt_div sg-inline-flex-grow">
                            <p className="sg-c-2">{activity.luminary.user.firstName} {activity.luminary.user.lastName}</p>
                            <p><a className="sg-c-1" href={activity_link}>{activity.title}</a></p>
                            <p className="sg-c-2">{activity_price}</p>
                        </div>
                    </div>
                    <div className="product_div_buttons sg-inline-middle"
                         style={{margin: '10px 0', flex: '3'}}>
                        <a href={"/#/cart/checkout"}>
                            <div className="add-to-bag desktop secondaryButton button"
                                 style={{margin: '5px 5px 5px 0px'}} tabIndex="0">
                                <div className="title-container"><p className="title">Купить</p>
                                </div>
                            </div>
                        </a>
                        <div className="remove desktop secondaryButton button" onClick={this.onRemove}
                             style={{margin: '5px 0'}} tabIndex="0">
                            <div className="title-container"><p className="title">Убрать</p>
                            </div>
                        </div>
                    </div>
                </li>
                }
            </React.Fragment>
        )
            ;
    }
}

export default WishListItem;
