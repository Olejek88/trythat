import React from 'react';
import {observer} from 'mobx-react';
import ExperienceMini from "../ExperienceMini";

@observer
class ActivityInfo extends React.Component {
    render() {
        return (
            <div className="luminary-section sg-bd-2 sg-bg-2" data-html="">
                <div className="cb" data-celebid="36">
                    <div className="cb-title"><h4 className=" sg-f-ttl ">Об организаторе</h4></div>
                    <div className="cb-box">
                        <a href="/" style={{display: 'inline-block'}}>
                            <div className="img-box-wrapper">
                                <div className="img-box">
                                    <div className="img-overlay" style={{
                                        position: 'absolute',
                                        width: '177px',
                                        height: '177px',
                                        borderRadius: '88px',
                                        display: 'none',
                                        opacity: '0.6',
                                        zIndex: '0',
                                        backgroundColor: '#e1e1e1'
                                    }}>
                                    </div>
                                    <img className="img-coming-soon" style={{display: 'none'}}
                                         src={"lum_comingsoonbanner.png"} alt={"скоро"}/>
                                    <img className="luminary-img" src={"waters_350px__L.jpg"}
                                         alt="Alice Waters"/>
                                </div>
                            </div>
                        </a>
                        <div className="js-follow-con" style={{width: '174px', textAlign: 'center'}}>
                            <div lvl="2" data-id="36" style={{margin: '10px 0 0 2px'}}
                                 className="follow following wide primaryButton button" tabIndex="0">
                                <div className="title-container"><p className="title">
                                    <img className="greenCheck" src="icon_checkmark_green.png" style={{display: 'none'}} alt={""}/>
                                    <span className="title following-text sg-text-transform">FOLLOW</span></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="cb-desc ">
                        <a className="name" href="/" data-celebid="36"><h4 className="sg-f-ttl">Alice Waters</h4></a>
                        <p className="org">Chef, Author, Proprietor</p>
                        <div className="desc body-text sg-f-bdy "><p>Recognized
                            as one of the most important culinary voices in America, Alice Waters
                            has led the charge in cultivating and eating seasonally and locally
                            while supporting the local food economy. Her restaurant Chez Panisse in
                            Berkeley, California has consistently been named one of the 50 best in
                            the world. In 1996, Alice's commitment to education led to the creation
                            of The Edible Schoolyard at Berkeley’s Martin Luther King, Jr., Middle
                            School. The program is nationally recognized for its efforts to
                            integrate gardening, cooking, and sharing school lunch into the core
                            curriculum. Alice is also the author of eight books, including the
                            seminal book for home cooks: <em>The Art of Simple Food: Notes and Recipes from a Delicious
                                Revolution</em>.</p>
                        </div>

                    </div>
                    <div className="cb-shop">
                        <p className="title  sg-f-ttl" style={{marginBottom: '28px'}}>Shop More Experiences</p>
                        <div className="view-all">
                            <a className="sg-f-bdy sg-c-1 sg-text-transform sg-inline-middle" href="/">
                                view all
                            </a>
                        </div>
                        <div className="list mini_product_list">
                            <ExperienceMini id={1}/>
                            <ExperienceMini id={2}/>
                        </div>
                        <a href="/">
                            <div className="custom-exp sg-bg-1" style={{textAlign: 'center'}}>
                                <p className="body-text sg-f-bdy ">Запросить уникальное предложение</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityInfo;
