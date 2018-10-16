import React from 'react';
import {observer} from 'mobx-react';

@observer
class ActivityStarAverage extends React.Component {
    static getStarImg (filled) {
        if (filled===1) return 'icon_star_filled_green.png';
        if (filled===0.5) return 'icon_star_half_green.png';
        if (filled===0) return 'icon_star_outline_green.png';
    }

    render() {
        const rate = this.props.rate;
        const total = this.props.total;
        let stars=[ActivityStarAverage.getStarImg(0),ActivityStarAverage.getStarImg(0),ActivityStarAverage.getStarImg(0),ActivityStarAverage.getStarImg(0),ActivityStarAverage.getStarImg(0)];
        if (rate>=0.25) stars[0] = ActivityStarAverage.getStarImg(0.5);
        if (rate>=0.75) stars[0] = ActivityStarAverage.getStarImg(1);
        if (rate>=1.25) stars[1] = ActivityStarAverage.getStarImg(0.5);
        if (rate>=1.75) stars[1] = ActivityStarAverage.getStarImg(1);
        if (rate>=2.25) stars[2] = ActivityStarAverage.getStarImg(0.5);
        if (rate>=2.75) stars[2] = ActivityStarAverage.getStarImg(1);
        if (rate>=3.25) stars[3] = ActivityStarAverage.getStarImg(0.5);
        if (rate>=3.75) stars[3] = ActivityStarAverage.getStarImg(1);
        if (rate>=4.25) stars[4] = ActivityStarAverage.getStarImg(0.5);
        if (rate>=4.75) stars[4] = ActivityStarAverage.getStarImg(1);

        let images = stars.map(image => {
            return (<img src={image} className="review_star" alt="" />);
        });
        return (
            <div className="review_stars_div " data-average-rating={rate}>
                <div className="review_stars_inner_div sg-inline-middle">
                    {images}
                    <span className="total_reviews_span sg-f-bdy">({total})</span></div>
            </div>
        );
    }
}

export default ActivityStarAverage;