import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
      <div className="discovery normal_marquee marquee first_pageframe full_width for_category">
          <div className="slide_img_div" style={{backgroundImage: 'url(culinary.jpg)'}}>
          </div>
          <div className="marquee_text_container_discovery for_category">
              <table className="marquee_text_table_discovery">
                  <tbody>
                  <tr>
                      <td>
                          <div className="discovery_marquee_titles_div">
                              <h1 className="marquee_title  sg-f-dspl-l sg-c-3 sg-text-transform">Кулинария</h1>
                              <h2 className="marquee_sub_title sg-f-dspl-s sg-c-3">От фермерских рынков до баров,
                                  приватных обедов и уроков приготовления еды</h2>
                          </div>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default Banner;
