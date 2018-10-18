import React from 'react';

class CategoryRow extends React.Component {
  render() {
    return (
        <div className="discovery discovery-row">
            <div className="layout_tile discovery " style={{float: 'left'}}>
                <a className="tile_collection" href="/">
                    <div className="collection_img_container">
                        <img className="collection_img"
                             data-src="exp1.jpg" alt="Local, Find amazing experiences in your city" src="exp1.jpg" />
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title">Local</div>
                                            <div className="collection_description" style={{textAlign: 'center'}}>
                                                Find amazing experiences in your city
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
                <a className="tile_collection" href="/">
                    <div className="collection_img_container">
                        <img className="collection_img"
                             data-src="exp2.jpg" alt="Once-in-a-Lifetime Experiences, For over the top occasions."
                             src="exp2.jpg"/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title">Once-in-a-Lifetime Experiences</div>
                                            <div className="collection_description"
                                                 style={{textAlign: 'center'}}>For over the top occasions.
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
            <div className="layout_tile discovery " style={{float:'left'}}>
                <a className="tile_collection" href="/">
                    <div className="collection_img_container">
                        <img className="collection_img"
                             data-src="exp3.jpg" alt="Charity Auctions and Sweepstakes, Bid and give back"
                             src="exp3.jpg"/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title">Charity Auctions and Sweepstakes</div>
                                            <div className="collection_description"
                                                 style={{textAlign: 'center'}}>Bid and give back
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
