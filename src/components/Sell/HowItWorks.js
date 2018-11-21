import React from 'react';

const HowItWorks = ({ appName, token }) => {
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
              <p className="mk-home-title" style={{marginTop: '50px'}}>Как работает наш сервис?</p>
          </div>
          <div className="band band-steps">
              <div className="dark-img-overlay">
              </div>
              <div className="center">
                  <div className="steps">
                      <div className="step123">
                          <ul>
                              <li className="sg-inline-top">
                                  <div className="number" style={{flex: '0.2'}}><img src={"images/step1.png"} alt={"Шаг 1"} />
                                  </div>
                                  <p className="text" style={{flex: '0.8'}}>Заполните свой профиль и создайте свой набор
                                      впечатлений и услуг, используя наши шаблоны.</p>
                              </li>
                              <li className="sg-inline-top">
                                  <div className="number" style={{flex: '0.2'}}><img src={"images/step2.png"} alt={"Шаг 2"} />
                                  </div>
                                  <p className="text" style={{flex: '0.8'}}>Мы проверим Ваш профиль, свяжемся с Вами и если
                                  все в порядке, то начнем сотрудничать.</p>
                              </li>
                              <li className="sg-inline-top">
                                  <div className="number" style={{flex: '0.2'}}><img src={"images/step3.png"} alt={"Шаг 3"} />
                                  </div>
                                  <p className="text" style={{flex: '0.8'}}>Наш менеджер поможет Вам настроить ваш
                                      магазин услуг так, чтобы он был максимально привлекательным для клиентов.</p>
                              </li>
                              <li className="sg-inline-top">
                                  <div className="number" style={{flex: '0.2'}}><img src={"images/step4.png"} alt={"Шаг 4"} />
                                  </div>
                                  <p className="text" style={{flex: '0.8'}}>Продавайте ваши услуги на нашей платформе,
                                      отвечайте на заявки, отмечайте ваше время работы и получайте свои деньги.</p>
                              </li>
                          </ul>
                      </div>
                      <div style={{width: '192px'}} tabIndex="0" className="primaryButton button">
                          <div className="title-container"><p className="title">Начать</p></div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default HowItWorks;
