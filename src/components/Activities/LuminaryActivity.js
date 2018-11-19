import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import ExperienceRow from "../Experience/ExperienceRow";
import FollowButton from "../Components/FollowButton";
import ActivityStarAverage from "../Activity/ActivityStarAverage";
import Redirect from "react-router-dom/es/Redirect";

@inject('activityStore', 'userStore', 'luminaryStore')
@withRouter
export default class LuminaryActivity extends React.Component {
    constructor() {
        super();
        this.activitiesRows = [];
        this.luminary = null;
    }

    componentWillMount() {
        let predicate = {
            filter: 'luminary',
            id: this.props.id,
            limit: 12
        };
        this.props.activityStore.setPredicate(predicate);

        this.luminary = this.props.luminaryStore.getLuminary(this.props.id);
        if (this.luminary == null) {
            return <Redirect to='/'/>;
        }

        let activities = this.props.activityStore.loadActivities();
        let my = this;
        let activitiesRow = [];
        let activitiesRows = my.activitiesRows;
        let count = 0;
        if (activities && activities.length > 0) {
        }
        activities.forEach(function (activity, i) {
            activitiesRow.push(activity);
            count++;
            if (count % 4 === 0) {
                activitiesRows = my.activitiesRows;
                activitiesRows.push(<ExperienceRow activities={activitiesRow} key={i}/>);
                my.setState({activitiesRows: activitiesRows});
                activitiesRow = [];
            }
        });
        console.log (this.activitiesRows);
    }

    render() {
        return (
            <div id="content" style={{
                position: 'relative', margin: '0 auto', overflow: 'hidden', width: '1124px',
                paddingTop: '80px'
            }}>
                <div className="main-row">
                    <div id="category-top-nav" className="top-nav-scroll luminary"
                         style={{height: '15px', overflow: 'visible', width: '960px'}}>
                        <div className="container slick-initialized slick-slider">
                            <div className="slick-slide slick-cloned" style={{width: '960px'}}>
                                <div className="item slick-slide"
                                     style={{width: '100%', display: 'inline-block'}} aria-hidden="true">
                                    <div className="marquee-img-wrapper">
                                        <div className="marquee-img">
                                            <img src={this.luminary.user.image.path}
                                                 alt={this.luminary.user.firstName +
                                                 " " + this.luminary.user.lastName}
                                                 style={{height: '100%', width: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className="marquee-text celeb_nav">
                                        <div>
                                            <FollowButton activity={this.luminary} styles={'float: right'}/>
                                            <h3 className="sg-f-ttl">{this.luminary.user.firstName +
                                            " " + this.luminary.user.lastName}</h3>
                                            <div className="review_stars_div at_celeb_top_nav"
                                                 data-average-rating="4.75">
                                                <div className="review_stars_inner_div sg-inline-middle">
                                                    <ActivityStarAverage rate='4.5'/>
                                                </div>
                                            </div>
                                            <p className="org sg-c-2">{this.luminary.description}</p>
                                        </div>

                                        <div className="desc sg-f-bdy"><p>{this.luminary.fullDescription}</p>
                                        </div>
                                        <div style={{clear: 'both'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row sg-f-ttl"
                         style={{margin: '0px 0 14px 0', textAlign: 'center', borderTop: '1px solid #CDCDCD'}}>
                        <div className="section-title"><h3>Предложения</h3></div>
                    </div>
                    {this.activitiesRows}
                </div>
            </div>
        );
    }
};
