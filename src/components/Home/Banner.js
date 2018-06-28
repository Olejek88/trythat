import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
      <div className="pageframe_div discovery brand_marquee marquee first_pageframe full_width  layout_  "
           data-frametypeid="16" data-frametypename="Discovery Brand Marquee" data-frameid="118"
           data-framename="Brand Marquee" data-layoutid="" data-layoutname="" data-displayorder="1.000">
          <div></div>
          <div className="slider_container pageframe_content_container  discovery">
              <div className="sy-box">
                  <div className="sy-slides-wrap">
                      <div className="sy-slides-crop">
                          <div className="responsive_slider   sy-list">
                              <div className="responsive_slide sy-slide fade useCSS sy-active"
                                   style="display: block; transition-duration: 500ms; opacity: 1;"
                                   data-text="Great Causes">
                                  <div className="slide_img_div" style="background-image:url(&quot;/bucket.jpg&quot;)"></div>
                              </div>
                          </div>
                      </div>
                      <div className="sy-filler" style="padding-top: 28.0702%;"></div>
                  </div>
              </div>
          </div>
          <div className="alpha_overlay discovery"></div>
          <div className="text_overlay body_content discovery partial_width txt-align-ovr1 >" style="display: block;">
              <span className="static_text sg-f-dspl-xl sg-c-3" style="text-transform:none;">Unforgettable Experiences for</span>
              <span className="moving_text sg-f-dspl-xl sg-c-primary" style="">
                  <span className="old_value" style="bottom: 0px; opacity: 1;">Great Causes</span></span>
          </div>
          <div className="search_container body_content discovery partial_width txt-align-ovr1" style="">
              <div id="disc-d-widget" className="disc-d-widget sg-inline-middle" data-value="" data-text="" data-catname="">
                  <div className="disc-input-block js-disc-input-block" style="display:inline-block;">
                      <div className="search-wrapper ">
                          <input
                              className="f-left sg-f-btn js-disc-input ui-autocomplete-input discovery-search js-discovery-search"
                              data-appendto="#disc-d-widget" value="" aria-label="WHAT ARE YOU INTERESTED IN?"
                              placeholder="WHAT ARE YOU INTERESTED IN?" name="discovery-search" autoComplete="off"
                              type="text" />
                      </div>
                      <div className="city-search-wrapper">
                          <input className="sg-f-btn js-city-autocomplete discovery-city-search"
                                 id="disc-d-widget_bd-js-city-autocomplete" aria-label="WHERE?" placeholder="WHERE?"
                                 autoComplete="off" type="text" />
                      </div>
                  </div>
                  <div className="disc-btn-block js-disc-btn" style="float:right;">
                      <div className="disc-btn sg-text-transform primaryButton button" style="width:100%" tabIndex="0">
                          <div className="title-container"><p className="title">find experiences</p></div>
                      </div>
                  </div>

                  <div className="clearAll"></div>
                  <div className="disc-popup-block js-disc-popup-block">
                      <div className="up-arrow"></div>

                      <div className="discovery-popup js-discovery-popup sg-f-bdy desktop">
                          <div className="disc-header-search">
                              <a href="/filter/" className="sg-c-primary sg-text-transform sg-f-ttl">advanced search</a>
                              <div className="clearAll"></div>
                          </div>
                          <div className="disc-all-ex">
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj js-filter-all sg-hover-3"
                                  data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="">
                                  <p className="disc-item-text">
                                      All Experiences </p>
                              </div>
                          </div>
                          <div className="disc-column inline-top js-disc-col">
                              <div className="col-title js-col-title sg-f-ttl sg-text-transform">CATEGORIES</div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="147" data-catname="culinary" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Culinary</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="313" data-catname="beer-wine-and-spirits" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Beer, Wine, &amp; Spirits</p>
                              </div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="88" data-catname="adventure" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Adventure</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="6" data-catname="music" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Music</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="36" data-catname="entertainment" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Film &amp; TV</p></div>
                              <div className="disc-item disc-view-more js-view-more"
                                   onClick="discoveryViewMore($(this))">
                                  <p className=" disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">more...</p>
                              </div>
                              <div className="more-items js-more-items">
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="35" data-catname="sport" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Sports</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="214" data-catname="health-and-wellness"
                                      data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Health &amp; Wellness</p>
                                  </div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="109" data-catname="fashion" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Fashion &amp; Style</p>
                                  </div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="269" data-catname="performing-arts"
                                      data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Performing Arts</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="92" data-catname="art" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Fine Art</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="282" data-catname="photography" data-location="">
                                      <p className="fo-14-n-s4 disc-item-text js-disc-item-text">Photography</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="262" data-catname="artisans" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Artisans</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="297" data-catname="home-decor" data-location="">
                                      <p className="fo-14-n-s4 disc-item-text js-disc-item-text">Home Decor</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="146" data-catname="authors" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Literature</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="128" data-catname="poker" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Games &amp; Hobbies</p>
                                  </div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="177" data-catname="speakers" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Speakers &amp; Events</p>
                                  </div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="9" data-catname="cult-wine" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Cult Wine</p></div>
                                  <div className="disc-item disc-view-less js-view-less"
                                       onClick="discoveryShowLess($(this))">
                                      <p className="disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">less...</p>
                                  </div>
                              </div>
                          </div>
                          <div className="disc-column inline-top js-disc-col">
                              <div className="col-title js-col-title sg-f-ttl sg-text-transform">Activities</div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="397" data-catname="outdoors" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Outdoors</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="75" data-catname="lessons" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Lessons</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="290" data-catname="local-tours" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Local Tours</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="89" data-catname="travel-and-destinations" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Travel &amp; Destinations</p>
                              </div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="289" data-catname="concerts" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Concerts &amp; Backstage
                                  Access</p></div>
                              <div className="disc-item disc-view-more js-view-more"
                                   onClick="discoveryViewMore($(this))">
                                  <p className=" disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">more...</p>
                              </div>
                              <div className="more-items js-more-items">
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="264" data-catname="once-in-a-lifetime"
                                      data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Once-in-a-Lifetime
                                      Experiences</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="278" data-catname="activities-for-kids"
                                      data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Activities for Kids</p>
                                  </div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="135" data-catname="team-activities"
                                      data-location=""><p className="fo-14-n-s4 disc-item-text js-disc-item-text">Team
                                      Activities</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="31" data-catname="corporate-speakers-and-events"
                                      data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Corporate Events</p></div>
                                  <div className="disc-item disc-view-less js-view-less"
                                       onClick="discoveryShowLess($(this))">
                                      <p className="disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">less...</p>
                                  </div>
                              </div>
                          </div>
                          <div className="disc-column inline-top js-disc-col">
                              <div className="col-title js-col-title sg-f-ttl sg-text-transform">occasions</div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="245" data-catname="anniversary" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Anniversary</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="257" data-catname="gifts-for-him" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Gifts for Him</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="261" data-catname="gifts-for-her" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Gifts for Her</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="263" data-catname="couples" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Date Night</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="293" data-catname="party-time" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Parties</p></div>
                              <div className="disc-item disc-view-more js-view-more"
                                   onClick="discoveryViewMore($(this))">
                                  <p className=" disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">more...</p>
                              </div>
                              <div className="more-items js-more-items">
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="266" data-catname="wedding" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Weddings</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="19" data-catname="groups" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Group Events</p></div>
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="12" data-catname="gifts" data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Gifts</p></div>
                                  <div className="disc-item disc-view-less js-view-less"
                                       onClick="discoveryShowLess($(this))">
                                      <p className="disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">less...</p>
                                  </div>
                              </div>
                          </div>
                          <div className="disc-column inline-top js-disc-col">
                              <div className="col-title js-col-title sg-f-ttl sg-text-transform">LOCATIONS</div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="223" data-catname="things-to-do-in-san-francisco"
                                  data-location="san-francisco-bay-area"><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">San Francisco</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="250" data-catname="things-to-do-in-new-york" data-location="new-york"><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">New York City</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="251" data-catname="things-to-do-in-los-angeles"
                                  data-location="los-angeles"><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Los Angeles</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="232" data-catname="things-to-do-in-napa-sonoma" data-location="napa"><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Napa &amp; Sonoma</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="378" data-catname="things-to-do-in-boston" data-location="boston"><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Boston</p></div>
                              <div className="disc-item disc-view-more js-view-more"
                                   onClick="discoveryViewMore($(this))">
                                  <p className=" disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">more...</p>
                              </div>
                              <div className="more-items js-more-items">
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="414" data-catname="things-to-do-in-chicago"
                                      data-location="evanston"><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Chicago</p></div>
                                  <div className="disc-item disc-view-less js-view-less"
                                       onClick="discoveryShowLess($(this))">
                                      <p className="disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">less...</p>
                                  </div>
                              </div>
                          </div>
                          <div className="disc-column inline-top js-disc-col">
                              <div className="col-title js-col-title sg-f-ttl sg-text-transform">TRENDING</div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="256" data-catname="charity-auctions" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Charity Auctions</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="126" data-catname="hotlist" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Popular</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="389" data-catname="experiences-ending-soon" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Experiences Ending Soon</p>
                              </div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="106" data-catname="what-is-new" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">New &amp; Notable</p></div>
                              <div
                                  className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                  tabIndex="0" data-type="radio" data-closest=".js-discovery-popup" data-name="category"
                                  data-value="380" data-catname="experiences-under-150" data-location=""><p
                                  className="fo-14-n-s4 disc-item-text js-disc-item-text">Experiences Under $150</p>
                              </div>
                              <div className="disc-item disc-view-more js-view-more"
                                   onClick="discoveryViewMore($(this))">
                                  <p className=" disc-item-text sg-c-primary sg-text-transform sg-hover-3 sg-cursor">more...</p>
                              </div>
                              <div className="more-items js-more-items">
                                  <div
                                      className="disc-item js-disc-item js-filter-disc-item js-filter-op js-useObj txt-ovr-3 sg-f-bdy sg-hover-3 "
                                      tabIndex="0" data-type="radio" data-closest=".js-discovery-popup"
                                      data-name="category" data-value="381" data-catname="experiences-under-250"
                                      data-location=""><p
                                      className="fo-14-n-s4 disc-item-text js-disc-item-text">Experiences Under $250</p>
                                  </div>
                              </div>
                          </div>
                          <div className="view-all-categories">
                              <p className="fo-11-n-m  co-gr le-14 sg-text-transform"
                                 onClick="$('.js-filter-hint[data-mapping=disc]').click()">
                                  view all </p>
                              <div className="clearAll"></div>
                          </div>
                          <div className="disc-footer">
                              <a href="/filter/" className="fo-11-n-m  co-gr le-14">
                                  ADVANCED SEARCH </a>
                              <div className="clearAll"></div>
                          </div>
                      </div>

                  </div>

                  <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-5" tabIndex="0"
                      style="display: none;"></ul>
              </div>
          </div>
      </div>
  );
};

export default Banner;
