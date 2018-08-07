import React from 'react';
import { observer } from 'mobx-react';
import Experience from "./Experience";

@observer
class ExperienceRow extends React.Component {
  render() {
    return (
        <div className="experience">
            <React.Fragment>
                <Experience id={1}/>
                <Experience id={2}/>
                <Experience id={3}/>
                <Experience id={4}/>
            </React.Fragment>
        </div>
    );
  }
}

export default ExperienceRow;
