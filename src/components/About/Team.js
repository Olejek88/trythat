import React from 'react';
import TeamMember from "./TeamMember";

const Team = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
      <React.Fragment>
          <div data-frame="company_team">
              <div className="frame_title_about sg-f-dspl-m">Наша команда</div>
              <div className="team_div">
                  <div className="team_list_div" style={{display: 'block'}}>
                      <TeamMember id={1}/>
                      <TeamMember id={2}/>
                      <TeamMember id={3}/>
                      <TeamMember id={4}/>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default Team;
