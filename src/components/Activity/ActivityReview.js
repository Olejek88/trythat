import React from 'react';
import {observer} from 'mobx-react';

@observer
class ActivityReview extends React.Component {
    render() {
        return (
            <div className="reviews-section" data-html="" style={{clear: 'both', borderBottom: '1px solid #e1e1e1',
                borderTop: '1px solid #e1e1e1'}}>
                <div className="product_sec_div reviews view_all_link_container desktop ">
                    <div className="product_sec_header ">
                        <div className="product_sec_title sg-f-ttl">Отзывы клиентов
                            <div className="review_stars_div " data-average-rating="4.00">
                                <div className="review_stars_inner_div sg-inline-middle">
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <span className="total_reviews_span sg-f-bdy">(1)</span></div>
                            </div></div>
                    </div>

                    <div className="reviews_list clearfix">
                        <div className="review_item">
                            <div className="review_stars_div " data-average-rating="4.00">
                                <div className="review_stars_inner_div sg-inline-middle">
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <img className="review_star" src={"icon_star_filled.png"} />
                                    <span className="review_date sg-f-subttl fs-1 sg-c-2">16.06.18</span>
                                </div>
                            </div>
                            <div className="review_content sg-f-bdy fs-1 sg-c-2">It was fun. Really nice people at this
                                place. This is one technical sport! The instructor kept it relaxed and moving forward
                                with obvious enthusiasm for the sport. And I got to stab him over and over again... like
                                he could have stopped me!
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default ActivityReview;
