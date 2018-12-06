import React from 'react';
import {observer} from 'mobx-react';

@observer
class ActivityPhotoDiv extends React.Component {
    constructor() {
        super();
        this.state = {
            image: null
        };
    }

    componentWillMount() {
        this.loadData(this.props.image);
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps.image);
    }

    loadData (image) {
        if(image)
            this.setState({image: image});
        else
            this.setState({image: {title: 'load', path: 'files/no_image.jpg'}});
    }

    render() {
        return <div className="imgDiv cloned" style={{visibility: 'visible'}}>
            <img src={"http://api.tt.ru/"+this.state.image.path}
                 title={this.state.image.title} alt={this.state.image.title}
                 style={{
                     maxWidth: '714px',
                     width: '100%',
                     //height: '100%',
                     display: 'block',
                     margin: '0 auto'
                 }}/>
        </div>;
    }
}

export default ActivityPhotoDiv;
