import React from 'react';

const TeamMember = ({appName, token}) => {
    if (token) {
        return null;
    }
    return (
        <React.Fragment>
            <div id="member_1" className="celebrityBox tile_celebrity tile">
                <div className="img-box-wrapper">
                    <div className="img-box">
                        <div className="img-overlay" style={{display: 'none'}}>
                        </div>
                        <img className="luminary-img" src={"images/p1.png"} alt="Olejek"/>
                    </div>

                </div>
                <div className="celeb-info">
                    <div className="celeb-info-content">
                        <div className="name ">
                            <p className="sg-f-dspl-m2 sg-c-1 sg-text-transform">Oleg Ivanov</p>
                        </div>
                        <div className="charity">
                            <p className="sg-f-dspl-s sg-c-2">IT chief</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="member_detail_1" className="team_member_div team_member_div_1 desktop">
                <div style={{clear: 'both'}}></div>
                <div className="left_col">
                    <div className="celebrityBox">
                        <div className="img-box-wrapper">
                            <div className="img-box">
                                <img className="luminary-img" src={"images/p1.png"} alt={"team member"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right_col">
                    <div className="member_name">
                        Oleg Ivanov
                    </div>

                    <div className="member_position">
                        IT Chief
                    </div>

                    <div className="member_social_links">
                        <a href="https://www.linkedin.com/">
                            <img src={"images/icon_instagram.png"} alt="Opens In New Window"/>
                        </a>
                    </div>
                </div>

                <div className="member_details"><p>
                    Участие в 8 НИР, успешное участие в проектах:<br/><br/>
                    - разработка системы ИС «Энергоресурс» для использования в качестве энергосберегающей,
                    вычислительной системы учета для жилых зданий и сооружений, разработка алгоритмов расчета потребления.<br/>
                    - разработка программного обеспечения для ситуационных центров энергоэффективности Челябинской
                    области, контроллеров сбора данных, интерфейсов визуализации.<br/>
                    - реализация системы учета энергоресурсов (энергосервисный контракт) для Южноуральского
                    Арматурно-Изоляторного завода на базе ИС «Энергоресурс».<br/>
                    - разработка проекта на базе SCADA DeltaV для установки поверки расходомеров УПА-2000 ПГ Метран.<br/>
                    - разработка программно-технических комплексов для систем АСУТП и АСКУЭ для промышленных
                    предприятий области на базе различных SCADA систем (в том числе собственной разработки).<br/>
                    - разработка ПТК «ТОИРУС».
                </p></div>

            </div>
        </React.Fragment>
    );
};

export default TeamMember;
