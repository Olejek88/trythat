import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityHowItWorks extends React.Component {
  render() {
    return (
        <div className="how-this-work">
            <div className="inner-sec">
                <h4 className="product_sec_title">Как это работает</h4>
                <table className="elements-list">
                    <tbody><tr>
                        <td>
                            <img src={"images/steps_schedule.jpg"} alt="" />
                                <p className="fo-18-n-s4">Предоставьте детали</p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style={{padding: '0 60px 0 60px'}}>Обозначьте время года, дни недели, даты и время услуги.
                                    Выберите количество человек.
                                    <div><p></p>
                                    </div>
                                </div></td>
                        <td>
                            <img src={"images/steps_confirm.jpg"} alt="" />
                                <p className="fo-18-n-s4">Подтвердите выбор</p>
                                <p className="fo-15-n-s4"></p>
                                <div style={{padding: '0 60px 0 60px'}}>Исполнитель подтвердит и запланирует услугу или
                                    предложит вам альтернативу.</div>
                                <p></p>
                        </td>
                        <td>
                            <img src={"images/steps_enjoy.jpg"} alt="" />
                                <p className="fo-18-n-s4">Вперед к впечатлениям! </p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style={{padding: '0 60px 0 60px'}}>
                                    Чудесно проведите время. Мы предложим вам новые впечатления, на базе понравившихся Вам</div>
                                <p></p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
  }
}

export default ActivityHowItWorks;
