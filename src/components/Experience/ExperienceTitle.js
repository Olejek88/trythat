import React from 'react';

class ExperienceTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Лучшие предложения от наших представителей',
            subtitle: ''
        };
    }

    componentDidMount() {
        if (this.props.title)
            this.setState({title: this.props.title});
        if (this.props.subtitle)
            this.setState({subtitle: this.props.subtitle});
    }

    render() {
        return (
            <div className="discovery-row experience-title" style={{clear: 'both'}}>
                <h2 className="experience_header" style={{marginBottom: '20px'}}>
                    {this.state.title}</h2>
                <div></div>
                <h3 className="experience_sub_header">{this.state.subtitle}</h3>
            </div>
        );
    }
}

export default ExperienceTitle;
