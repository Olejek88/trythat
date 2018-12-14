import React from 'react';
import {withRouter} from 'react-router-dom';
import LuminaryItem from "./LuminaryItem";
import {inject} from "mobx-react/index";
import LuminaryRow from "./LuminaryRow";

class AllLuminary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luminaryRows: [],
            updated: false
        };
    }

    componentWillMount() {
        let self = this;
        let count = 0;
        let luminaryRow = [];

        this.props.luminaryStore.getLuminaries()
            .then((luminaries) => {
                luminaries.forEach(function (luminary, i) {
                    luminaryRow.push(<LuminaryItem luminary={luminary} key={count}/>);
                    count++;
                    if (count % 4 === 0) {
                        self.state.luminaryRows.push(<LuminaryRow luminaries={luminaryRow} key={count}/>);
                        luminaryRow = [];
                    }
                });
                if (count % 4 !== 0) {
                    self.state.luminaryRows.push(<LuminaryRow luminaries={luminaryRow} key={count}/>);
                }
                self.setState({updated: true});
            });
    }

    render() {
        return (
            <div className="main" style={{
                minHeight: '100%', width: '80%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '40px'
            }}>
                <div className="main-row">
                    <div className="row" style={{margin: '30px 0 20px 0', textAlign: 'center'}}>
                        <div className="section-title"><h3 style={{border: 'none'}}>Все исполнители</h3></div>
                    </div>
                    <div id="allCelebrities">
                        {this.state.updated && this.state.luminaryRows}
                    </div>
                </div>
            </div>
        )
    }
}

export default inject('luminaryStore', 'commonStore')(withRouter(AllLuminary));
