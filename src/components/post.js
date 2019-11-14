import React, {Component} from 'react';
import User from "./user";

export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User src="https://man-to-man.ru/wp-content/uploads/Vnutrennij-sterzhen-e1504423397975-900x590.jpg?file_version=2"
                      alt={"inst"}
                      name="Scott"
                      min={true}
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    Some account
                </div>
                <div className="post__descr">
                    Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum
                </div>
            </div>

        )
    }
}