import React from 'react';
import {observer} from 'mobx-react';

@observer
class WishListPopItem extends React.Component {
    render() {
        const activity = this.props.activity;
        let activity_link = "/#/activity/" + activity._id;
        let activity_price = this.props.price;
        let activity_image = {
            backgroundImage: 'url(' + this.props.activity.images[0].path + ')'
        };
        return (
            <li className="wish-pop-li item sg-inline-middle" style={{padding: '0 10px'}}>
                <a className="img-box-wrapper" href={activity_link} style={{flex: '1'}}>
                    <div className="img-box wishlist-image" style={activity_image}></div>
                </a>
                <div className="name" style={{flex: '3', textAlign: 'left'}}>
                    <a href={activity_link} className="sg-c-1">{activity.title}</a>
                </div>
                <div className="amount" style={{
                    flex: '1',
                    padding: '0 20px 0 5px', maxHeight: '50px', overflow: 'hidden'
                }}>
                    {activity_price}
                </div>
            </li>
        );
    }
}

export default WishListPopItem;
