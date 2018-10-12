import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";

@observer
@withRouter
@inject('activityStore')
class WishList extends React.Component {
    render() {
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
                                        <li className="sg-inline-middle" style={{width: '100%'}}>
                                            <div className="product_div desktop  sg-inline-middle "
                                                 style={{margin: '10px 0'}}>
                                                <div className="product_img_container sg-c-3"
                                                     style={{width: '150px', height: '100px'}}>
                                                    {/*
                                                <div className="buy_type black sg-inline-middle"
                                                     style={{direction: 'ltr', position: 'absolute',
                                                         fontSize: '11px', zIndex: '1', display: 'none'}}>
                                                    <div className="buy_type_text sg-text-transform sg-f-bdy-s sg-inline-middle"
                                                        style={{backgroundColor: '#000000'}}>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <svg style="margin-left: -1px;" width="1em" height="2em">
                                                        <polygon points="0,0 12,0 0,25" style="fill:#000000">
                                                        </polygon>
                                                    </svg>
                                                </div>
*/}
                                                    <a href="/" style={{
                                                        backgroundImage: 'url(luminary2.jpg)',
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        width: '150px',
                                                        height: '100px',
                                                        position: 'absolute'
                                                    }}>
                                                    </a>
                                                    <div style={{width: '22px'}}>&nbsp;</div>
                                                </div>
                                                <div className="item_txt_div sg-inline-flex-grow">
                                                    <p className="sg-c-2">Luminary</p>
                                                    <p><a className="sg-c-1" href="/">Experience 1</a></p>
                                                    <p className="sg-c-2">₽33.504</p>
                                                </div>
                                            </div>
                                            <div className="product_div_buttons sg-inline-middle"
                                                 style={{margin: '10px 0', flex: '3'}}>
                                                <div className="add-to-bag desktop secondaryButton button"
                                                     style={{margin: '5px 5px 5px 0px'}} tabIndex="0">
                                                    <div className="title-container"><p className="title">Купить</p>
                                                    </div>
                                                </div>
                                                <div className="remove desktop secondaryButton button"
                                                     style={{margin: '5px 0'}} tabIndex="0">
                                                    <div className="title-container"><p className="title">Убрать</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
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
