import React from 'react';
import Posts from "./posts";
import Users from "./users";
import Profile from "./profile";

export default function Feed () {
    return(
        <div className="container feed">
            <Posts src="" alt="inst"/>
            <Users/>
        </div>
    )
}