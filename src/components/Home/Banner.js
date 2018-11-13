import React from 'react';
import Redirect from "react-router-dom/es/Redirect";

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            redirect: false
        };
        this.inputEnter = this.inputEnter.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputEnter = function (e) {
        if (e.key === 'Enter') {
            this.setState({redirect: true});
        }
    };

    inputChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={"/activities/search/" + this.state.search}/>;
        }
        return (
            <div className="discovery">
                <div className="sy-slide"
                     style={{
                         display: 'block',
                         transitionDuration: '500ms',
                         opacity: '1',
                         backgroundImage: 'url("images/try_that_tourism_1280.jpg")'
                     }}>
                    <div className="text_header_overlay" style={{display: 'block'}}>
                        <span className="static_text"
                              style={{textTransform: 'none'}}>Незабываемые впечатления для</span>
                        <span className="moving_text">
                            <span className="old_value" style={{bottom: '0px', opacity: '1'}}>Отличного повода</span>
                        </span>
                    </div>
                    <div className="search_container">
                        <div id="disc-d-widget" className="disc-d-widget" data-value="" data-text="" data-catname="">
                            <div className="disc-input-block" style={{display: 'inline-block'}}>
                                <div className="search-wrapper ">
                                    <input className="js-discovery-search" onKeyPress={this.inputEnter}
                                           onChange={this.inputChange} aria-label="Что ищем?"
                                           placeholder="Что ищем?" name="discovery-search" autoComplete="off"
                                           type="text"/>
                                </div>
                                <div className="city-search-wrapper">
                                    <input className="discovery-city-search"
                                           id="disc-d-widget_bd-js-city-autocomplete" aria-label="WHERE?"
                                           placeholder="Где?"
                                           autoComplete="off" type="text"/>
                                </div>
                            </div>
                            <div className="disc-btn-block" style={{float: 'right', border: 'none'}}>
                                <div className="disc-btn sg-text-transform primaryButton button" style={{width: '100%'}}
                                     tabIndex="0">
                                    <div className="title-container"><p className="title">найти впечатления</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
