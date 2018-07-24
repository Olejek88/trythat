import React from 'react';
import { observer } from 'mobx-react';
import ActivityDescription from "./ActivityDescription";
import ActivityPhoto from "./ActivityPhoto";
import ActivitySelect from "./ActivitySelect";
import ActivityDetails from "./ActivityDetails";
import ActivityHowItWorks from "./ActivityHowItWorks";
import ActivityAboutLuminary from "./ActivityAboutLuminary";
import ActivityYouMayLike from "./ActivityYouMayLike";

@observer
class Activity extends React.Component {
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

export default Activity;
