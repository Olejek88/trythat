import React from 'react';
import { observer } from 'mobx-react';

@observer
class CategoryTitle extends React.Component {
  render() {
    return (
        <div className="discovery_block">
            <h2 className="discovery_header" style={{marginBottom: '20px'}}>
                Выбирайте впечатления, которые запомнятся вам надолго</h2>
        </div>
    );
  }
}

export default CategoryTitle;
