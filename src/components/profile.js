import React from 'react';
import User from "./user";
import Palette from "./Palette";

const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://man-to-man.ru/wp-content/uploads/Vnutrennij-sterzhen-e1504423397975-900x590.jpg?file_version=2"
                  alt={"inst"}
                  name="Scott"
            />
            <Palette/>
        </div>
    )
}

export default Profile;