import ActivityView from './ActivityView';
import React from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
export default class Activities extends React.Component {
    render() {
        return (
            <div className="main" style={{
                minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '80px'
            }}>
                <div className="main-row">
                    <ActivityView filter={this.props.match.params.filter} i={this.props.match.params.id} id={9}/>
                </div>
            </div>
        );
    }
}
