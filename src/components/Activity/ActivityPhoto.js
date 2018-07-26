import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityPhoto extends React.Component {
  render() {
      return <div className="left-box product-slider-box" style={{marginBottom: '40px'}}>
          <div className="pImgContainer">
              <a className="prev p-arrow disabled" id="pImages_left" tabIndex="0"></a>
              <div className="scrollable-placeholder" style={{display: 'none'}}>
                  <img src={"ex1.jpg"} alt="Experience"
                       style={{maxWidth: '714px', width: '100%', display: 'block', margin: '0 auto'}} />
              </div>
              <div className="scroll" style={{display: 'block'}}>
                  <div className="inner-container items" style={{width: '100000px', left: '-714px', height: '470px'}}>
                      <div className="imgDiv cloned">
                          <img data-link="example_experience.jpg" src={"example_experience.jpg"}
                               title="Example Experience" alt="Example Experience"
                               style={{maxWidth: '714px', width: '100%', height: '100%', display: 'block', margin: '0 auto'}}/>
                      </div>
                      <div className="imgDiv" style={{position: 'relative', visibility: 'visible', marginTop: '0p'}}>
                          <img data-link="example_experience.jpg" src={"example_experience.jpg"}
                               title="Example Experience" alt="Example Experience"
                               style={{maxWidth: '714px', width: '100%', height: '100%', display: 'block', margin: '0 auto'}}/>
                      </div>
                      <div className="imgDiv cloned" style={{position: 'relative', visibility: 'visible', marginTop: '0px'}}>
                          <img data-link="example_experience.jpg" src={"example_experience.jpg"}
                               title="Example Experience" alt="Example Experience"
                               style={{maxWidth: '714px', width: '100%', height: '100%', display: 'block', margin: '0 auto'}} />
                      </div>
                  </div>
              </div>
              <a className="next p-arrow disabled" id="pImages_right" tabIndex="0">
              </a>
          </div>

          <div style={{width: '100%', position: 'absolute', bottom: '0px'}}>
              <div className="pImgSlide" style={{margin: '0 auto', width: '14px'}}>
                  <a href="#" className="active">
                  </a>
              </div>
          </div>
      </div>;
  }
}

export default ActivityPhoto;
