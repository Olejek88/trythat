import React from 'react';
import {inject} from "mobx-react/index";
import FollowButton from "../Components/FollowButton";

@inject('followListStore','userStore','customerStore','commonStore')
class FollowListItem extends React.Component {

    render() {
        const luminary = this.props.luminary;
        let luminary_image = this.props.commonStore.apiServer+luminary.user.image.path;
        let luminary_name = luminary.user.firstName + " " + luminary.user.lastName;
        let luminary_link = "/luminary/" + luminary.id;
        let luminary_who = luminary.description;

        return (
            <React.Fragment>
                <li className="celeb-1479">
                    <div className="image"><a href={luminary_link}>
                        <img src={luminary_image} alt={luminary_name}/>
                    </a></div>
                    <div className="desc">
                        <p className="cname">{luminary_who}</p>
                        <p className="pname"><a href={luminary_link}>{luminary_name}</a></p>
                    </div>
                    <div className="buttons">
                        <div className="js-follow-con" style={{width: '174px', textAlign: 'center'}}>
                            <FollowButton luminary={luminary} />
                        </div>
                    </div>
                    <div className="cover">
                    </div>
                </li>
            </React.Fragment>
        );
    }
}

export default FollowListItem;
