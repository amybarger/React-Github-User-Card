import React from 'react';
import GithubFollowersCard from "./GithubFollowersCard";

const FollowersList = (props)=> {
    console.log("followers props", props)

    return (
        <div className="followersList">
            {props.followersInfo.map(info => {
                return (
            <GithubFollowersCard 
            user={info} key={info.id} />)
            })}
        </div>
    )
}

export default FollowersList;