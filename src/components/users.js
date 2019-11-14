import React from 'react';
import User from "./user";

export default function Users() {
    return(
        <div className="right">
            <User src="https://man-to-man.ru/wp-content/uploads/Vnutrennij-sterzhen-e1504423397975-900x590.jpg?file_version=2"
                  alt={"inst"}
                  name="Scott"
            />
            <div className="users__block">
                <User src="https://man-to-man.ru/wp-content/uploads/Vnutrennij-sterzhen-e1504423397975-900x590.jpg?file_version=2"
                      alt={"inst"}
                      name="Scott"
                      min={true}
                />
                <User src="https://man-to-man.ru/wp-content/uploads/Vnutrennij-sterzhen-e1504423397975-900x590.jpg?file_version=2"
                      alt={"inst"}
                      name="Scott"
                      min={true}
                />
            </div>
        </div>
    )
}
