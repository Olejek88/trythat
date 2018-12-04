import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('commonStore')
@observer
class LuminaryRow extends React.Component {
    constructor() {
        super();
        this.state = {
            luminaryRow: []
        };
    }

    componentWillMount() {
        let self = this;
        console.log(this.props.luminaries);
        self.setState({luminaryRow: this.props.luminaries});
    }

    render() {
        return (
            <div id="celeb_list_0" className="celebrity-vertical-list loaded" style={{minHeight: '150px'}}>
                <div className="celebrity-vertical-list" style={{height: '750px', overflow: 'hidden'}}>
                    {this.state.luminaryRow}
                </div>
            </div>
        );
    }
}

export default LuminaryRow;
