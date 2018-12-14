import React from 'react';
import ActivityStarAverage from "./ActivityStarAverage";

class ActivityStar extends React.Component {
  render() {
      const rate = this.props.rate;
      const date = this.props.date;
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

      let images = stars.map(function (image, i) {
          return (<img src={image} className="review_star" alt="" key={i}/>);
      });
    return (
        <div className="review_stars_inner_div sg-inline-middle">
            {images}
            <span className="review_date sg-f-subttl fs-1 sg-c-2">{date}</span>
        </div>
    );
  }
}

export default ActivityStar;
