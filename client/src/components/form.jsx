import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import axios from "axios";
import DashNav from './dashNav';
import './style.css/form.css';

// Form to Add an Artist & Update Artist's Details
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
        if (this.props.match.params.artistId) {
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
        if (this.state._id) {
            this.update_artist(this.state)
        }
        else {
            this.createArtist(this.state)
        }
    }

    // Create a New Artist

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

    //Update an Artist's Details
    update_artist = (artist) => {
        axios.put('/api/artists/' + artist._id, artist).then(response => {
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

    /// Capturing User's Input
    captureUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            //Rendering Form to Update/Add an Artist
            <div>
                <div>
                    <DashNav />
                </div>
                <div className="container">
                    <Row>
                        <form>
                            <Input label="ARTIST NAME" onChange={this.captureUserInput} id="form" name="artist_name" value={this.state.artist_name} s={12} />
                            <Input label="IMAGE URL" onChange={this.captureUserInput} id="form" name="image" s={12} value={this.state.image} />
                            <Input label="GENRE" onChange={this.captureUserInput} name="genre" s={12} value={this.state.genre} />
                            <Input label="CITY, COUNTRY" onChange={this.captureUserInput} name="city_country" value={this.state.city_country} s={12} />
                            <Input label="INSTAGRAM" onChange={this.captureUserInput} name="ig_handle" value={this.state.ig_handle} s={12} />
                            <Input label="WEBSITE" onChange={this.captureUserInput} name="website" s={12} value={this.state.website} />
                            <Input label="@TWITTER" onChange={this.captureUserInput} name="at" s={12} value={this.state.hashtag} />
                            <button className="waves-effect waves-light btn-small" id="update" onClick={this.handleSubmit}>
                                {this.state._id == null ? "Add" : "Update"} Artist
                        </button>
                        </form>
                    </Row>
                </div>
            </div>

        )
            ;
    }
}
export default Form;
