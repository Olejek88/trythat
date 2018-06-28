import React from 'react';
import { observer } from 'mobx-react';

@observer
class CategoryTitle extends React.Component {
  render() {
    return (
        <h2 className="pageframe_header sg-f-dspl-m txt-align-ovr1 discovery" style="margin-bottom:20px; ">
            Explore Experiences that Give Back</h2>
    );
  }
}

export default CategoryTitle;
