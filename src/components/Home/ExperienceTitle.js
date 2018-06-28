import React from 'react';
import { observer } from 'mobx-react';

@observer
class ExperienceTitle extends React.Component {
  render() {
    return (
        <h2 className="pageframe_header sg-f-dspl-m txt-align-ovr1 discovery" style={{marginBottom: '20px'}}>
            Explore Experiences that Give Back</h2>
    );
  }
}

export default ExperienceTitle;
