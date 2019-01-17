import React from 'react';
import ActivityDescription from "./ActivityDescription";
import ActivityPhoto from "./ActivityPhoto";
import ActivitySelect from "./ActivitySelect";
import ActivityDetails from "./ActivityDetails";
import ActivityHowItWorks from "./ActivityHowItWorks";
import ActivityAboutLuminary from "./ActivityAboutLuminary";
import ActivityYouMayLike from "./ActivityYouMayLike";
import ActivityReviews from "./ActivityReviews";
import {inject} from "mobx-react/index";
import {Helmet} from "react-helmet";

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showActivityItem: true,
            activity: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.loadActivity(nextProps.match.params.id);
    }

    componentDidMount() {
        this.loadActivity(this.props.match.params.id);
    }

    loadActivity(id) {
        let self = this;
        this.props.activityStore.loadActivity(id)
            .then((activity) => {
                //console.log(activity);
                self.setState({activity: activity});
            });
    }

    render() {
        return (
            <div id="content">
                <div className="product-section ">
                    <div className="inner-product-section"
                         style={{width: '100%', maxWidth: '1124px', margin: '0 auto'}}>
                        <div className="p-top-sec">
                            <React.Fragment>
                                <ActivityPhoto activity={this.state.activity}/>
                                <ActivitySelect activity={this.state.activity}/>
                                <ActivityDescription activity={this.state.activity}/>
                                <ActivityDetails activity={this.state.activity}/>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <React.Fragment>
                    <ActivityHowItWorks/>
                    <ActivityReviews activity={this.state.activity}/>
                    <ActivityAboutLuminary activity={this.state.activity}/>
                    <ActivityYouMayLike activity={this.state.activity}/>
                </React.Fragment>
            </div>
        );
    }
}

export default inject('activityStore', 'activityListingStore')(Activity);
