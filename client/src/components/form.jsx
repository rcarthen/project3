import React, { Component } from 'react';
// import "./style/form.css";
import { Row, Input } from 'react-materialize';
import axios from "axios";
import DashNav from './dashNav';


class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            artist_name: "",
            image: "",
            genre: "",
            city_country: "",
            ig_handle: "",
            website: "",
            fans: ""
        }
        
    }

    componentDidMount() {
        if(this.props.match.params.artistId){
            axios.get("/api/artists/" + this.props.match.params.artistId).then(response => {
                console.log(response.data)
                this.setState(response.data)
                console.log(this.state);
            })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        if(this.state._id){
            this.update_artist(this.state)
        }
        else{
            this.createArtist(this.state)
        }
    }

    createArtist = (artist) => {
        axios.post('/api/artists', artist).then(response => {
            console.log(response.data)
            this.setState({
                artist_name: "",
                image: "",
                genre: "",
                city_country: "",
                ig_handle: "",
                website: "",
                fans: ""
            })
            this.props.history.push('/artists/' + response.data._id)
        })
    }
    
    update_artist = (artist) => {
        axios.put('/api/artists/'+ artist._id, artist).then(response => {
            console.log(response.data)
            this.setState({
                artist_name: "",
                image: "",
                genre: "",
                city_country: "",
                ig_handle: "",
                website: "",
                fans: ""
            })
            this.props.history.push('/artists/'+ response.data._id)
        })
    }
    
    captureUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <div>
                    <DashNav />
                </div>
                <Row>
                    <form>
                        <Input label="Artist Name" onChange={this.captureUserInput} name="artist_name" value={this.state.artist_name} s={12} />
                        <Input label="Image" onChange={this.captureUserInput} name="image" s={12} value={this.state.image} />
                        <Input label="Genre" onChange={this.captureUserInput} name="genre" s={12} value={this.state.genre} />
                        <Input label="City, Country" onChange={this.captureUserInput} name="city_country" value={this.state.city_country} s={12} />
                        <Input label="Instagram Handle" onChange={this.captureUserInput} name="ig_handle" value={this.state.ig_handle} s={12} />
                        <Input label="Website" onChange={this.captureUserInput} name="website" s={12} value={this.state.website} />
                        <Input label="Listeners" onChange={this.captureUserInput} name="fans" s={12} value={this.state.fans} />
                        <button className="waves-effect waves-light btn-small" onClick={this.handleSubmit}>
                            {this.state._id == null ? "Add" : "Update"} Artist
                        </button>
                    </form>
                </Row>
            </div>

        )
            ;
    }
}

export default Form;
