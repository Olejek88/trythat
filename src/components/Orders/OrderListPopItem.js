import React from 'react';
import {observer} from 'mobx-react';

@observer
class OrderListPopItem extends React.Component {
    render() {
        const activity = this.props.activity;
        const order = this.props.order;
        let order_link = "/#/activity/" + activity._id;
        let order_price = order.listing.cost + order.listing.currency.title;
        let order_duration = order.listing.duration.period;
        let order_quantity = order.listing.customers;
        let activity_image = {
            backgroundImage: 'url(' + this.props.activity.images[0].path + ')'
        };
        return (
            <li className="item sg-inline-middle sg-f-bdy">
                <a className="img-box-wrapper" href="/" style={{flex: '3'}}>
                    <div className="img-box"
                         style={activity_image}>
                    </div>
                </a>
                <div className="name" style={{flex: '4', lineHeight: '130%'}}>
                    {activity.title}
                </div>
                <div className="quantity" style={{flex: '1', overflow: 'hidden'}}>
                    <p className="label text-center">К-во</p>
                    <p className="text text-center">{order_quantity}</p>
                </div>
                <div className="price" style={{flex: '2', marginRight: '10px', marginLeft: '10px', overflow: 'hidden'}}>
                    <p className="label text-center">Время</p>
                    <p className="text text-center">{order_duration}</p>
                </div>
                <div className="amount" style={{flex: '3', overflow: 'hidden'}}>
                    <p className="label text-center">Итого</p>
                    <p className="text text-center">{order_price}</p>
                </div>
            </li>
        );
    }
}

export default OrderListPopItem;
