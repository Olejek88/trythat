import React from 'react';
import { observer } from 'mobx-react';

@observer
class CategoryRow extends React.Component {
  render() {
    return (
        <div className="layout_tiles_container discovery pageframe_content_container  ">
            <div className="layout_tile tile1  discovery ">
                <a className="tile_collection tile desktop " href="/">
                    <div className="collection_img_container">
                        <img className="collection_img  lazyloaded"
                             data-src="https://d5xydlzdo08s0.cloudfront.net/media/categories/231/localtile__L.jpg"
                             alt="Local, Find amazing experiences in your city"
                             src="https://d5xydlzdo08s0.cloudfront.net/media/categories/231/localtile__L.jpg" />
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="collection_title sg-f-dspl-m2 sg-c-3 sg-text-transform">Local
                                            </div>
                                            <div className="collection_description sg-f-dspl-s sg-c-3"
                                                 style={{textAlign: 'center'}}>Find amazing experiences in your city
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
            <div className="layout_tile tile2  discovery ">
                <a className="tile_collection tile desktop " href="/">
                    <div className="collection_img_container">
                        <img className="collection_img  lazyloaded"
                             data-src="https://d5xydlzdo08s0.cloudfront.net/media/categories/264/cabotile__L.jpg"
                             alt="Once-in-a-Lifetime Experiences, For over the top occasions."
                             src="https://d5xydlzdo08s0.cloudfront.net/media/categories/264/cabotile__L.jpg"/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div
                                                className="collection_title sg-f-dspl-m2 sg-c-3 sg-text-transform">Once-in-a-Lifetime
                                                Experiences
                                            </div>
                                            <div className="collection_description sg-f-dspl-s sg-c-3"
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
            <div className="layout_tile tile3  discovery ">
                <a className="tile_collection tile desktop " href="/">
                    <div className="collection_img_container">
                        <img className="collection_img  lazyloaded"
                             data-src="https://d5xydlzdo08s0.cloudfront.net/media/categories/256/charityauctiontile__L.jpg"
                             alt="Charity Auctions and Sweepstakes, Bid and give back"
                             src="https://d5xydlzdo08s0.cloudfront.net/media/categories/256/charityauctiontile__L.jpg"/>
                            <div className="collection-text-wrapper">
                                <table className="collection-text-content">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div
                                                className="collection_title sg-f-dspl-m2 sg-c-3 sg-text-transform">Charity
                                                Auctions and Sweepstakes
                                            </div>
                                            <div className="collection_description sg-f-dspl-s sg-c-3"
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
            <div style={{clear: 'both'}}>
            </div>
        </div>
    );
  }
}

export default CategoryRow;
