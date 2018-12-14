import React from 'react';
import {inject} from 'mobx-react';
import ExperienceRow from "../Experience/ExperienceRow";
import FollowButton from "../Components/FollowButton";
import ActivityStarAverage from "../Activity/ActivityStarAverage";
import Redirect from "react-router-dom/es/Redirect";

class LuminaryActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luminary: [],
            ready: false,
            activitiesRows: []
        };
        this.luminary = null;
    }

    componentWillMount() {
        let id = this.props.match.params['id'];
        let my = this;
        if (id===undefined)
            id = this.props.id;
        if (id===undefined)
            return <Redirect to='/#/' />;
        this.props.luminaryStore.getLuminary(id).then((luminary) => {
            my.setState ({luminary: luminary});
            if (luminary === null) {
                this.props.history.replace('/');
            }

            let activitiesRow = [];
            let count = 0;
            let predicate = {
                filter: 'luminary',
                id: id
            };
            this.props.activityStore.setPredicate(predicate);
            this.props.activityStore.loadActivities().then(() => {
                this.props.activityStore.activitiesRegistry.forEach(function (activity) {
                    activitiesRow.push(activity);
                    count++;
                    if (count % 4 === 0) {
                        my.state.activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
                        activitiesRow = [];
                    }
                });
                if (count % 4 !== 0) {
                    my.state.activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
                    activitiesRow = [];
                }
                this.setState({ready: true});
            });
        });
    }

    render() {
        return (
            <div id="content" style={{
                position: 'relative', margin: '0 auto', overflow: 'hidden', width: '1124px',
                paddingTop: '80px'
            }}>
                {this.state.ready &&
                <div className="main-row">
                    <div id="category-top-nav" className="top-nav-scroll luminary"
                         style={{height: '15px', overflow: 'visible', width: '960px'}}>
                        <div className="container slick-initialized slick-slider">
                            <div className="slick-slide slick-cloned" style={{width: '960px'}}>
                                <div className="item slick-slide"
                                     style={{width: '100%', display: 'inline-block'}} aria-hidden="true">
                                    <div className="marquee-img-wrapper">
                                        <div className="marquee-img">
                                            <img src={this.props.commonStore.apiServer+this.state.luminary.user.image.path}
                                                 alt={this.state.luminary.user.firstName +
                                                 " " + this.state.luminary.user.lastName}
                                                 style={{height: '100%', width: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className="marquee-text celeb_nav">
                                        <div>
                                            <FollowButton activity={this.state.luminary} styles={'float: right'}/>
                                            <h3 className="sg-f-ttl">{this.state.luminary.user.firstName +
                                            " " + this.state.luminary.user.lastName}</h3>
                                            <div className="review_stars_div at_celeb_top_nav"
                                                 data-average-rating={this.state.luminary.rating}>
                                                <div className="review_stars_inner_div sg-inline-middle">
                                                    <ActivityStarAverage rate={this.state.luminary.rating}
                                                    total={1}/>
                                                </div>
                                            </div>
                                            <p className="org sg-c-2">{this.state.luminary.shortDescription}</p>
                                        </div>

                                        <div className="desc sg-f-bdy"><p>{this.state.luminary.description}</p>
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
                    {this.state.activitiesRows}
                </div>
                }
            </div>
        );
    }
}
export default inject('activityStore', 'userStore', 'luminaryStore', 'commonStore')(LuminaryActivity);