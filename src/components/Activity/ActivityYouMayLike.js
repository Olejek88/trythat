import React from 'react';
import {observer, inject} from 'mobx-react';
import Experience from "../Experience/Experience";

@observer
@inject('activityStore')
class ActivityYouMayLike extends React.Component {
    render() {
        let predicate = {
            filter: 'like',
            id: this.props.activity._id,
            limit: 4
        };
        this.props.activityStore.setPredicate(predicate);

        let activitiesList = Array.of(undefined);
        let activities = this.props.activityStore.loadActivities();
        if (activities) {
            activities.forEach(function (activity, i) {
                activitiesList.push(<Experience activity={activity} key={i}/>);
            });
        }

        return (
            <div className="p-otherExp-section " data-html="">
                <div className="otherExp-section">
                    <div style={{width: '100%', maxWidth: '960px', margin: '0 auto'}}>
                        <div className="row">
                            <div className="row" style={{margin: '32px 0'}}>
                                <h3 className="sg-f-dspl-l sg-text-transform you-may-also-enjoy">Вам также может понравиться</h3>
                            </div>
                            <div className="experience">
                                {activitiesList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ActivityYouMayLike;
