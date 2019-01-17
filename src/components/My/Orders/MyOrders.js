import React from 'react';
import {inject} from 'mobx-react';
import OrderListItem from "./OrderListItem";
import MyMenu from "./../MyMenu";
import {action} from "mobx/lib/mobx";

class MyOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false,
            showSearch: true,
            search: '',
            header: 'Ваши заказы'
        };
        this.ordersRows = [];
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.fillList(nextProps);
    }

    componentWillMount() {
        this.fillList(null);
    }

    inputChange(event) {
        let self = this;
        this.ordersRows = [];
        this.setState({
            search: event.target.value
        });
        let predicate = {
            filter: 'search',
            id: this.state.search,
            limit: 10
        };
        this.props.orderStore.setPredicate(predicate);
        this.props.orderStore.loadOrders().then(action((orders) => {
            orders.forEach(function (order, i) {
                self.ordersRows.push(<OrderListItem order={order} key={i}/>);
            });
        }));
    }

    fillList(nextProps) {
        let filter = null;
        let order = null;
        let self = this;
        this.ordersRows = [];
        if (this.props.userStore.currentLuminary) {
            let predicate = {
                filter: 'luminary',
                id: this.props.userStore.currentLuminary.id
            };
            this.props.orderStore.setPredicate(predicate);
        }
        if (nextProps) {
            filter = nextProps.match.params.filter;
            if (filter !== '') {
                if (filter === 'current') {
                    this.setState({header: 'Заказы текущие'});
                }
                if (filter === 'closed') {
                    this.setState({header: 'Заказы завершенные'});
                }
            }
        }
        this.props.orderStore.loadOrders()
            .then((orders) => {
                orders.forEach(function (order, i) {
                    self.ordersRows.push(<OrderListItem order={order} key={i}/>);
                });
                this.setState({showSearch: true});
                this.setState({update: true});
            }).catch(action(err => {
                throw err;
            }));
    }

    render() {
        return (
            <div className="vendor-main">
                <div className="custom-form vendor-page">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '0px', marginLeft: '15%'}}>
                        <div className="view-container">
                            <div className="view-frame">
                                <div className="communication_div desktop">
                                    <div className="top_div">
                                        <div className="conversation_title sg-f-dspl-m">{this.state.header}</div>
                                        <div className="clear-both">
                                        </div>
                                    </div>
                                    {this.state.showSearch &&
                                    <div className="search_div">
                                        <input onChange={this.inputChange}
                                               className="vendor_search_text search_box sg-bd-8 ng-pristine ng-valid ng-touched"
                                               name="search" aria-label="Искать" placeholder="Искать"
                                               style={{paddingLeft: '50px', width: '100%'}} type="search"/>
                                    </div>
                                    }
                                    <div className="conversation_div">
                                        {this.ordersRows}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('userStore', 'orderStore')(MyOrders);
