import React, { Component } from 'react';
// import "./style/form.css";
import { Row, Input } from 'react-materialize';
import axios from "axios";


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
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('/api/artists', this.state).then(response => {
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
        })
    }
    captureUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <Row>
                <form>
                    <Input label="Artist Name" onChange={this.captureUserInput} name="artist_name" value={this.state.artist_name} s={12} />
                    <Input label="Image" onChange={this.captureUserInput} name="image" s={12} value={this.state.image} />
                    <Input label="Genre" onChange={this.captureUserInput} name="genre" s={12} value={this.state.genre} />
                    <Input label="City, Country" onChange={this.captureUserInput} name="city_country" value={this.state.city_country} s={12} />
                    <Input label="Instagram Handle" onChange={this.captureUserInput} name="ig_handle" value={this.state.ig_handle} s={12} />
                    <Input label="Website" onChange={this.captureUserInput} name="website" s={12} value={this.state.website} />
                    <Input label="Listeners" onChange={this.captureUserInput} name="fans" s={12} value={this.state.fans} />
                    <button className="waves-effect waves-light btn-small" onClick={this.handleSubmit}>Add Artist</button>
                </form>
            </Row>
        )
            ;
    }
}

export default Form;
