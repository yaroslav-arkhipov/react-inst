import React, {Component} from 'react';
import User from "./user";
import InstService from "../services/InstService";
import ErrorMsg from "./error";

export default class Users extends Component {
    InstService = new InstService();
    state={
        error: false,
        names: [],
        photos: []
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers(){
        this.InstService.getProfile()
            .then(this.onProfileLoaded)
            .catch(this.onError)
    }

    onError = () =>{
        this.setState({
            error:true
        })
    }

    onProfileLoaded = (photos) =>{
        this.setState({
            error:false,
            photos
        })
    }

    renderItems(arr){
        return arr.map(item =>{
            return (
                <a className="user min">
                <img src={item.photo} alt={item.alt}/>
                <div>{item.name}</div>
                </a>
            )
        })
    }
    render() {
        const {error, photos} = this.state;
        if (error){
            return <ErrorMsg/>
        }

        const items = this.renderItems(photos);
        return (
            <div className="right">
                <User
                    src="https://man-to-man.ru/wp-content/uploads/Vnutrennij-sterzhen-e1504423397975-900x590.jpg?file_version=2"
                    alt={"inst"}
                    name="Scott"
                />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}