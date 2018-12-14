import React from 'react';

class CategoryRow extends React.Component {
    render() {
        return (
            <div className="discovery discovery-row">
                <div className="layout_tile discovery " style={{float: 'left'}}>
                    <a className="tile_collection" href={"/#/activities/category/3"}>
                        <div className="collection_img_container">
                            <img className="collection_img"
                                 alt="Незабываемые впечатления и приключения рядом с вами в вашем городе"
                                 src={'images/exp3.jpg'}/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title">Рядом с вами</div>
                                            <div className="collection_description" style={{textAlign: 'center'}}>
                                                Незабываемые впечатления и приключения в вашем городе
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="gradient">
                            </div>
                        </div>
                    </a>
                </div>
                <div className="layout_tile discovery " style={{float: 'left'}}>
                    <a className="tile_collection" href={"/#/activities/category/2"}>
                        <div className="collection_img_container">
                            <img className="collection_img" alt="Впечатления для особого случая"
                                 src={'images/exp.jpg'}/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title">Впечатления для особого случая</div>
                                            <div className="collection_description"
                                                 style={{textAlign: 'center'}}>Попробуйте что-то невероятное раз в
                                                жизни.
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="gradient">
                            </div>
                        </div>
                    </a>
                </div>
                <div className="layout_tile discovery " style={{float: 'left'}}>
                    <a className="tile_collection" href={"/#/activities/category/1"}>
                        <div className="collection_img_container">
                            <img className="collection_img"
                                 alt="Дарите новые впечатления своим друзьям и близким"
                                 src={'images/exp2.jpg'}/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title">Дарите новые впечатления</div>
                                            <div className="collection_description" style={{textAlign: 'center'}}>
                                                Своим друзьям и близким
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="gradient">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default CategoryRow;
