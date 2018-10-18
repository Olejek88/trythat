import React from 'react';

class ExperienceTitle extends React.Component {
    render() {
        let title = this.props.title;
        return (
            <div className="discovery-row experience-title" style={{clear: 'both'}}>
                <h2 className="experience_header" style={{marginBottom: '20px'}}>
                    {title}</h2>
                <div></div>
                <h3 className="experience_sub_header">Лучшие предложения от наших представителей</h3>
            </div>
        );
    }
}

export default ExperienceTitle;
