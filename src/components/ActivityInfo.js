import React from 'react';
import { observer } from 'mobx-react';
import ActivityDescription from "./Activity/ActivityDescription";
import ActivityPhoto from "./Activity/ActivityPhoto";

@observer
class ActivityInfo extends React.Component {
  render() {
    return (
        <React.Fragment>
            <ActivityPhoto/>
            <ActivitySelect/>
            <ActivityDescription/>
            <ActivityDetails/>
            <ActivityHowItWorks/>
            <ActivityAboutLuminary/>
            <ActivityYouMayLike/>
        </React.Fragment>
    );
  }
}

export default ActivityInfo;
