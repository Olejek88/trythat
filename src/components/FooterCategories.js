import React from 'react';
import { observer } from 'mobx-react';

@observer
class FooterCategories extends React.Component {
  render() {
    return (
        <div className="footer_div">
            <h2 className="footer_header" style={{marginBottom: '20px'}}>Shop more experiences that give back</h2>
            <div className="pageframe_content_container">
                <table className="tile_table discovery catch_all_footer_table" data-cols="5">
                    <tbody>
                    <tr>
                        <td className="sg-bd-2">
                            <div className="catch_all_footer_subtitle">CATEGORIES</div>
                            <table className="catch_all_footer_lists_table">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul className="catch_all_footer_list">
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Culinary</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Beer, Wine, &amp; Spirits</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Adventure</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Music</a></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="catch_all_footer_list">
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Fine Art</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Photography</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Artisans</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Home Decor</a></li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="sg-bd-2">
                            <div className="catch_all_footer_subtitle">Activities</div>
                            <table className="catch_all_footer_lists_table">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul className="catch_all_footer_list">
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Outdoors</a></li>
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Lessons</a></li>
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Local Tours</a></li>
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Travel &amp; Destinations</a></li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="sg-bd-2">
                            <div className="catch_all_footer_subtitle">occasions</div>
                            <table className="catch_all_footer_lists_table">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul className="catch_all_footer_list">
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Parties</a></li>
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Weddings</a></li>
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>Group
                                                Events</a></li>
                                            <li><a href="/" className="sg-f-bdy"
                                                   style={{lineHeight: '2em'}}>Gifts</a></li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="sg-bd-2">
                            <div
                                className="catch_all_footer_subtitle">LOCATIONS
                            </div>
                            <table className="catch_all_footer_lists_table">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul className="catch_all_footer_list">
                                            <li><a href="/" className="sg-f-bdy" style={{lineHeight: '2em'}}>
                                                Chelyabinsk</a></li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{clear: 'both'}}>
            </div>
        </div>
    );
  }
}

export default FooterCategories;
