import React from 'react';

const Why = ({appName, token}) => {
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
                <p className="mk-home-title">Почему вы должны присоединиться?</p>
            </div>
            <div className="band" style={{background: '#f4f4f4'}}>
                <div className="center">
                    <div className="why">
                        <ul>
                            <li>
                                <p className="subject">Присоединяйтесь</p>
                                <p className="text">Окажитесь в крутой компании среди лучших и талантливых людей в
                                    области
                                    кулинарии, спорта, туризма, музыки, стиля и других направлений отдыха.</p>
                            </li>
                            <li>
                                <p className="subject">Бесплатно</p>
                                <p className="text">После подтверждения регистрации вы сможете настроить свое
                                    предложение
                                    уникальным образом и выделить его среди других. Мы всего лишь возьмем небольшую
                                    комиссию с каждого предложения.</p>
                            </li>
                            <li>
                                <p className="subject">Работайте с профи</p>
                                <p className="text">Наша опытная команда всегда поможет вам на всех этапах работы,
                                    чтобы предоставить нашим клиентам максимальный уровень удобства и
                                    информирования.</p>
                            </li>
                            <li>
                                <p className="subject">Премиальные клиенты</p>
                                <p className="text">Через наш сервис Вы сможете встретиться с уникальными и интересными
                                    людьми, которые ценят свой образ жизни и живут ради новых впечатлений.</p>
                            </li>
                            <li>
                                <p className="subject">Собственный график работы</p>
                                <p className="text">Вы сможете гибко настроить свой график работы: устраивать квесты или
                                    экскурсии по ночам или в полнолуние или учить йоге на открытом воздухе рано
                                    утром. </p>
                            </li>
                            <li>
                                <p className="subject">Расширяйте свой бизнес</p>
                                <p className="text">Наша команда непрерывно работает над привлечением новых клиентов,
                                    которые будут заинтересованы в получении нового опыта и впечатлений.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Why;
