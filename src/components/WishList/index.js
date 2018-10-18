import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";
import WishListItem from "./WishListItem";

@observer
@withRouter
@inject('activityStore')
class WishList extends React.Component {
    render() {
        let wishList = '';
        const activities = this.props.activityStore.getTestWishActivities();
        const activityStore = this.props.activityStore;
        if (activities) {
            wishList = activities.map(function (activity,i) {
                let price = activityStore.loadTestActivityMinimumPrice(activity);
                return (<WishListItem activity={activity} key={i} price={price}/>);
            });
        }
        else wishList = 'Список желаний пуст';
        return (
            <div id="content">
                <div className="view-container">
                    <div className="view-frame">
                        <div id="main-detail" className="wishlist_container">
                            <div id="account-content">
                                <div className="sg-inline-middle" style={{width: '100%', padding: '15px 0'}}>
                                    <div className="sg-inline-middle sg-inline-flex-grow">
                                        <h2 className="sg-f-dspl-m">Список желаний</h2>
                                        <div className="listed_heart_img"
                                             style={{width: '30px', height: '30px', backgroundSize: 'cover'}}>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul id="wishlist" className="sg-f-dspl-s"
                                        style={{fontSize: '14px', height: '100%'}}>
                                        <React.Fragment>
                                            {wishList}
                                        </React.Fragment>
                                    </ul>

                                    {/*
                                <script type="text/javascript">
                                    $(document).ready(function (){
                                    $("#wishlist .remove").click(function () {
                                        var li = $(this).parent().parent();
                                        var current = $(this).parent();
                                        var undo = current.next();
                                        var pid = $(this).attr('pid');
                                        $.post("/wishlist/remove", {productId: pid},
                                            function (data) {
                                                if (data.result === 1) {
                                                    current.hide();
                                                    undo.show();
                                                    undo.css('flex', '3');
                                                    if (!g_is_mobile) {
                                                        undo.css('text-align', 'right');
                                                    }
                                                    li.addClass('inactive');
                                                } else {
                                                    alertEx(data.msg);
                                                }
                                            }, 'json');
                                        return false;
                                    });
                                    $("#wishlist .undo").click(function(){
                                    var li      = $(this).parent().parent();
                                    var current = $(this).parent();
                                    var remove  = current.prev();
                                    var pid     = $(this).attr('pid');
                                    $.post( "/wishlist/undo", {productId:pid},
                                    function (data){
                                    if (data.result === 1) {
                                    current.hide();
                                    remove.show();
                                    li.removeClass('inactive');
                                }else{
                                    alertEx(data.msg);
                                }
                                },'json');
                                    return false;
                                });
                                </script>
*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WishList;
