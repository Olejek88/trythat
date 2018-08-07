import React from 'react';
import { observer } from 'mobx-react';
import ActivityDescription from "./ActivityDescription";
import ActivityPhoto from "./ActivityPhoto";
import ActivitySelect from "./ActivitySelect";
import ActivityDetails from "./ActivityDetails";
import ActivityHowItWorks from "./ActivityHowItWorks";
import ActivityAboutLuminary from "./ActivityAboutLuminary";
import ActivityYouMayLike from "./ActivityYouMayLike";
import {withRouter} from "react-router-dom";
import ActivityReview from "./ActivityReview";


@observer
@withRouter
class Activity extends React.Component {
    componentDidMount() {
        //const slug = this.props.match.params.id;
        //this.props.articlesStore.loadArticle(slug, { acceptCached: true });
        //this.props.commentsStore.setArticleSlug(slug);
        //this.props.commentsStore.loadComments();
    }

    handleDeleteActivity = slug => {
/*
        this.props.activityStore.deleteActivity(slug)
            .then(() => this.props.history.replace('/'));
*/
    };

  render() {
    return (
        <div id="content">
            <div className="product-section ">
                <div className="inner-product-section" style={{width: '100%', maxWidth: '1124px', margin: '0 auto'}}>
                    <div className="p-top-sec">
                        <React.Fragment>
                            <ActivityPhoto/>
                            <ActivitySelect/>
                            <ActivityDescription/>
                            <ActivityDetails/>
                        </React.Fragment>
                    </div>
                </div>
            </div>
            <React.Fragment>
                <ActivityHowItWorks/>
                <ActivityReview/>
                <ActivityAboutLuminary/>
                <ActivityYouMayLike/>
            </React.Fragment>
        </div>
    );
  }
}

export default Activity;
