import React from 'react';
import {observer, inject} from 'mobx-react';
import activityStore from "../../stores/activityStore";
import Experience from "../Experience/Experience";

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
                //filter: 'category',
                filter: null,
                //id: this.props.activity.category.id,
                id: 0,
                limit: 4
            };
            this.props.activityStore.setPredicate(predicate);

            this.props.activityStore.loadLocalActivities().then(((activities) => {
                let count=0;
                activities.forEach(function (activity, i) {
                    if (count<4)
                        self.activityList.push(<Experience activity={activity} key={i}/>);
                    count++;
                });
                self.setState({activityList: self.activityList});
            }));
            this.setState ({updated: true});
        }
    }

    render() {
        return (
            <div className="p-otherExp-section " data-html="">
                <div className="otherExp-section">
                    <div style={{width: '100%', maxWidth: '1160px', margin: '0 auto'}}>
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
