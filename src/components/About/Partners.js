import React from 'react';

const Partners = ({appName, token}) => {
    if (token) {
        return null;
    }
    return (
        <div className="frameContainer frameType11 desktop" data-frame="company_partners_footer">
            <div className="frame_title  desktop sg-f-dspl-m">Инвесторы и партнеры</div>
        </div>
    );
};

export default Partners;
