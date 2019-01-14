import React from 'react';
import SiteMenu from "./SiteMenu";
import SiteInfo from "./SiteInfo";
import SiteMenuMobile from "./SiteMenuMobile";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1920
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        let documentElement = document.documentElement;
        this.setState({width: documentElement.clientWidth});
    }

    componentWillMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className="main_container" style={{float: 'bottom'}}>
                <React.Fragment>
                    {this.state.width >= 1000 &&
                    <SiteMenu/>
                    }
                    {this.state.width < 1000 &&
                    <SiteMenuMobile/>
                    }
                    <SiteInfo/>
                </React.Fragment>
            </div>
        );
    }
}

export default Footer;
