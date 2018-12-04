import React from 'react';
import {observer} from 'mobx-react';
import {inject} from "mobx-react/index";

@inject('activityImageStore', 'commonStore')
@observer
class OrderListPopItem extends React.Component {
    render() {
        const activity = this.props.activity;
        const order = this.props.order;
        let order_link = "/#/activity/" + activity.id;
        let order_price = order.activityListing.cost + order.activityListing.currency.title;
        let order_duration = order.activityListing.duration.duration;
        let order_quantity = order.activityListing.customers;


        let activity_image = null;
        if (activity.activityImages[0].image)
            activity_image = {
                backgroundImage: 'url(' + this.props.commonStore.apiServer + activity.activityImages[0].image.path + ')'
            };
        else
            activity_image = {
                backgroundImage: 'url(files/no_image.jpg)'
            };

        return (
            <React.Fragment>
                <li className="item sg-inline-middle sg-f-bdy">
                    <a className="img-box-wrapper" href={order_link} style={{flex: '3'}}>
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
                    <div className="price"
                         style={{flex: '2', marginRight: '10px', marginLeft: '10px', overflow: 'hidden'}}>
                        <p className="label text-center">Время</p>
                        <p className="text text-center">{order_duration}</p>
                    </div>
                    <div className="amount" style={{flex: '3', overflow: 'hidden'}}>
                        <p className="label text-center">Итого</p>
                        <p className="text text-center">{order_price}</p>
                    </div>
                </li>
                <div className="separator sg-bd-3 sg-no-bd-top">
                </div>
            </React.Fragment>
        );
    }
}

export default OrderListPopItem;
