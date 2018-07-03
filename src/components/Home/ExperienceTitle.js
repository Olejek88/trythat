import React from 'react';
import { observer } from 'mobx-react';

@observer
class ExperienceTitle extends React.Component {
  render() {
    return (
        <div className="discovery-row experience-title" style={{clear: 'both'}}>
            <h2 className="experience_header" style={{marginBottom: '20px'}}>
                Откройте для себя лучшие предложения</h2>
            <div></div>
            <h3 className="experience_sub_header">Unlock Access to Local Experts</h3>
        </div>
    );
  }
}

export default ExperienceTitle;
