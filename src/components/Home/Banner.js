import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
      <div className="discovery">
          <div className="sy-slide"
               style={{display: 'block', transitionDuration: '500ms', opacity: '1', backgroundImage: 'url("bucket.jpg")'}}>
              <div className="text_header_overlay" style={{display: 'block'}}>
                  <span className="static_text" style={{textTransform: 'none'}}>Unforgettable Experiences for</span>
                  <span className="moving_text">
                  <span className="old_value" style={{bottom: '0px', opacity: '1'}}>Great Causes</span></span>
              </div>
              <div className="search_container">
                  <div id="disc-d-widget" className="disc-d-widget" data-value="" data-text="" data-catname="">
                      <div className="disc-input-block" style={{display: 'inline-block'}}>
                          <div className="search-wrapper ">
                              <input className="js-discovery-search"
                                  data-appendto="#disc-d-widget" value="" aria-label="WHAT ARE YOU INTERESTED IN?"
                                  placeholder="WHAT ARE YOU INTERESTED IN?" name="discovery-search" autoComplete="off"
                                  type="text"/>
                          </div>
                          <div className="city-search-wrapper">
                              <input className="discovery-city-search"
                                     id="disc-d-widget_bd-js-city-autocomplete" aria-label="WHERE?" placeholder="WHERE?"
                                     autoComplete="off" type="text"/>
                          </div>
                      </div>
                      <div className="disc-btn-block" style={{float: 'right'}}>
                          <div className="disc-btn sg-text-transform primaryButton button" style={{width: '100%'}}
                               tabIndex="0">
                              <div className="title-container"><p className="title">find experiences</p></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Banner;
