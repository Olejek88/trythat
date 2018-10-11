import React from 'react';
import {observer} from 'mobx-react';

@observer
class ActivityPhotoDiv extends React.Component {
    render() {
        return <div className="imgDiv cloned" style={this.props.image.visibility}>
            <img data-link={this.props.image.path} src={this.props.image.path}
                 title={this.props.image.title} alt={this.props.image.title}
                 style={{
                     maxWidth: '714px',
                     width: '100%',
                     height: '100%',
                     display: 'block',
                     margin: '0 auto'
                 }}/>
        </div>;
    }
}

export default ActivityPhotoDiv;
