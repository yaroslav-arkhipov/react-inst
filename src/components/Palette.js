import React, {Component} from 'react';
import InstService from "../services/InstService";
import ErrorMsg from "./error";

export default class Palette extends Component{
    InstService = new InstService();
    state ={
        error: false,
        photos: []
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos(){
        this.InstService.getPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () =>{
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) =>{
        this.setState({
            error: false,
            photos
        })
    }

    renderItems(arr){
        return arr.map(item =>{
            return (
                <img src={item.src} alt={item.alt}/>
            )
        })
    }
    render() {
        const {error, photos} = this.state;
        if (error){
           return <ErrorMsg/>
        }

        const items = this.renderItems(photos);

        return(
            <div className="palette">
                {items}
            </div>
        )
    }
}