import React from 'react';

const Become = ({appName, token}) => {
    if (token) {
        return null;
    }
    return (
        <React.Fragment>
            <div className="band">
                <div className="center separator">
                </div>
            </div>
            <div className="band">
                <p className="mk-home-title">Станьте участником клуба TryThat - поделитесь вашими знаниями, умениями и
                    впечатлениями с другими</p>
                <ul className="talent-imgs">
                    <li>
                        <div style={{backgroundImage: 'url(images/hockey.jpg)'}}>
                        </div>
                    </li>
                    <li>
                        <div style={{backgroundImage: 'url(images/dinner.jpg)'}}>
                        </div>
                    </li>
                    <li>
                        <div style={{backgroundImage: 'url(images/tasting.jpg)'}}>
                        </div>
                    </li>
                </ul>
                <div className="center" style={{width: '100%', minWidth: '960px'}}>
                    <div className="talents">
                        <ul>
                            <li className="offer">
                                <p className={"p-offer"}>От уроков игры в теннис до хоккейных тренировок с звездами
                                    КХЛ</p></li>
                            <li className="offer">
                                <p className={"p-offer"}>От известных поваров солидных ресторанов до влюбленных в кухню
                                    самоучек, обучающих у себя на дому</p></li>
                            <li className="offer">
                                <p className={"p-offer"}>От экскурсий на местные пивоварни до посещения малоизвестных
                                    музеев с местными гидами</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Become;
