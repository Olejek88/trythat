import React from 'react';
import {observer, inject} from 'mobx-react';
import Experience from "../Experience/Experience";
import activityStore from "../../stores/activityStore";
import {action} from "mobx/lib/mobx";

@inject('activityStore')
@observer
class ActivityYouMayLike extends React.Component {
    constructor() {
        super();
        this.state = {
            activity: activityStore.defaultData,
            updated: false,
            activityList: []
        };
        this.activityList=[];
    }

    componentDidMount() {
        this.setState({activity: this.props.activity});
    }

    componentDidUpdate() {
        if (this.props.activity && !this.state.updated) {
            let self = this;
            let predicate = {
                //filter: 'like',
                filter: null,
                id: this.props.activity.id,
                limit: 4
            };
            this.props.activityStore.setPredicate(predicate);

            this.props.activityStore.loadActivities().
            then(action((activities) => {
                activities.forEach(function (activity, i) {
                    self.activityList.push(<Experience activity={activity} key={i}/>);
                });
            }));
            this.setState ({updated: true});
        }
    }

    render() {
        return (
            <div className="p-otherExp-section " data-html="">
                <div className="otherExp-section">
                    <div style={{width: '100%', maxWidth: '960px', margin: '0 auto'}}>
                        <div className="row">
                            <div className="row" style={{margin: '32px 0'}}>
                                <h3 className="sg-f-dspl-l sg-text-transform you-may-also-enjoy">Вам также может понравиться</h3>
                            </div>
                            <div className="experience">
                                {this.state.updated &&
                                    this.state.activityList
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ActivityYouMayLike;
