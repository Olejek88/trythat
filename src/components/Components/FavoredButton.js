import React from 'react';
import {inject} from "mobx-react/index";

class FavoredButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favored: false,
            favoredClass: "heart_img",
            customer: undefined,
            wish: null,
            favoredButtonText: 'Подписаться'
        };
        this.onFavored = () => {
            let self = this;
            this.setState({favored: !this.state.favored});
            if (this.state.favored && this.state.wish) {
                this.props.wishListStore.unWish(this.state.wish.id).then(() => {
                    self.setState({favored: undefined});
                    self.setState({wish: undefined});
                    self.setState({favoredClass: 'heart_img'});
                });
            }
            else {
                this.setState({favoredClass: 'heart_img'});
                let wish = {
                    activity_id: this.props.activity.id,
                    customer_id: this.state.customer.id
                };
                this.props.wishListStore.wish(wish).then((wish) => {
                    self.setState({favoredClass: "heart_img wishlist listed"});
                    self.setState({wish: wish});
                    self.setState({favored: "favored"});
                });
            }
        };
    }

    componentWillMount() {
        let self = this;
        if (this.props.activity) {
            const customer = this.props.userStore.currentCustomer;
            if (customer) {
                this.setState({customer: customer});
                this.props.wishListStore.isWished(this.props.activity.id, customer.id).then((wish) => {
                    if (wish.length > 0) {
                        self.setState({favoredClass: "heart_img wishlist listed"});
                        self.setState({wish: wish[0]});
                        self.setState({favored: "favored"});
                    }
                });
            }
        }
    }

    render() {
        return (
            <div className={this.state.favoredClass} tabIndex="0" title="Список желаний"
                 onClick={this.onFavored} style={{cursor: 'pointer'}}>
            </div>
        );
    }
}

export default inject('wishListStore','userStore')(FavoredButton);