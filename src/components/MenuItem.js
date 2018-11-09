import React from 'react';
import {observer } from 'mobx-react';

@observer
class MenuItem extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        this.props.categories.forEach(function (category,i) {
            this.list.push(<div className="topNavCat" key={i}>
                <a href={"/#/activities/" + this.props.link + "/" + category.value} title={category.label}>
                    <p className="level-link fo-14-n-s4">{category.label}</p></a></div>);
        });
    }

    render() {
        return (
            <React.Component>
                {this.state.list}
            </React.Component>
        );
    }
}

export default observer(MenuItem);