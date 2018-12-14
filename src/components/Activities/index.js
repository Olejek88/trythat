import ActivityView from './ActivityView';
import React from 'react';

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            id: 0
        };
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        //this.setState({filter: this.props.match.params.filter});
        //this.setState({id: this.props.match.params.id});
    }

    componentWillMount() {
        this.setState({filter: this.props.match.params.filter});
        this.setState({id: this.props.match.params.id});
    }

    render() {
        return (
            <div className="main" style={{
                minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '80px'
            }}>
                <div className="main-row">
                    <ActivityView filter={this.state.filter} i={this.state.id} id={9}/>
                </div>
            </div>
        );
    }
}
export default Activities;