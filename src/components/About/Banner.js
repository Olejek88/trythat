import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
      <div className="band band-about">
          <div className="landing_page_title">
              <p className="title-1">О нашей компании и команде</p>
          </div>
      </div>
  );
};

export default Banner;
