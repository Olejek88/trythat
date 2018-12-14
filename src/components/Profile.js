import React from 'react';
import LoadingSpinner from './Elements/LoadingSpinner';
import RedError from './Elements/RedError';
import {Link, NavLink} from 'react-router-dom';
import {inject} from 'mobx-react';

const EditProfileSettings = props => {
    if (props.isUser) {
        return (
            <Link
                to="/settings"
                className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"/> Edit Profile Settings
            </Link>
        );
    }
    return null;
};

const FollowUserButton = props => {
    if (props.isUser) {
        return null;
    }

    let classes = 'btn btn-sm action-btn';
    if (props.following) {
        classes += ' btn-secondary';
    } else {
        classes += ' btn-outline-secondary';
    }

    const handleClick = ev => {
        ev.preventDefault();
        if (props.following) {
            props.unfollow(props.username)
        } else {
            props.follow(props.username)
        }
    };

    return (
        <button
            className={classes}
            onClick={handleClick}
        >
            <i className="ion-plus-round"/>
            &nbsp;
            {props.following ? 'Unfollow' : 'Follow'} {props.username}
        </button>
    );
};

class Profile extends React.Component {
    componentWillMount() {
        this.props.activityStore.setPredicate(this.getPredicate());
    }

    componentDidMount() {
        this.props.profileStore.loadProfile(this.props.match.params.username);
        this.props.activityStore.loadActivities();
    }

    componentDidUpdate(previousProps) {
        if (this.props.location !== previousProps.location) {
            this.props.profileStore.loadProfile(this.props.match.params.username);
            this.props.activityStore.setPredicate(this.getPredicate());
            this.props.activityStore.loadActivities();
        }
    }

    getTab() {
        if (/\/favorites/.test(this.props.location.pathname)) return 'favorites';
        return 'all'
    }

    getPredicate() {
        switch (this.getTab()) {
            case 'favorites':
                return {favoritedBy: this.props.match.params.username}
            default:
                return {author: this.props.match.params.username}
        }
    }

    handleFollow = () => this.props.profileStore.follow();
    handleUnfollow = () => this.props.profileStore.unfollow();

    handleSetPage = page => {
        this.props.activityStore.setPage(page);
        this.props.activityStore.loadActivities();
    };

    renderTabs() {
        const {profile} = this.props.profileStore;
        return (
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        isActive={
                            (match, location) => {
                                return location.pathname.match("/favorites") ? 0 : 1;
                            }
                        }
                        to={`/@${profile.username}`}
                    >
                        Мои впечатления
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={`/@${profile.username}/favorites`}
                    >
                        Избранные впечатления
                    </NavLink>
                </li>
            </ul>
        );
    }

    render() {
        const {profileStore, userStore} = this.props;
        const {profile, isLoadingProfile} = profileStore;
        const {currentUser} = userStore;

        if (isLoadingProfile && !profile) return <LoadingSpinner/>;
        if (!profile) return <RedError message="Can't load profile"/>;

        const isUser = currentUser && profile.username === currentUser.username;

        return (
            <div className="profile-page">

                <div className="user-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-10 offset-md-1">

                                <img src={profile.image} className="user-img" alt=""/>
                                <h4>{profile.username}</h4>

                                <EditProfileSettings isUser={isUser}/>
                                <FollowUserButton
                                    isUser={isUser}
                                    username={profile.username}
                                    following={profile.following}
                                    follow={this.handleFollow}
                                    unfollow={this.handleUnfollow}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <div className="articles-toggle">
                                {this.renderTabs()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('activityStore', 'profileStore', 'userStore')(Profile);
