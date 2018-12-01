import React, { Component } from 'react';
import axios from 'axios';
import './style.css/artistcard.css';


class Artistcard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        axios.get("/api/artists/" + this.props.match.params.id).then(response => {
            const artist_data = response.data
            console.log(response.data)
            this.setState({
                artist_data
            })
            console.log(this.state);
        })
    }
    render() {
        return <div>
            <div className="container">
                <div className="col s5 push-s7">
                    <img className="responsive-img" id="profilepic" src={this.state.artist_data && this.state.artist_data.image}/>
                    <div className="container" id="moreinfo">
                        <p>{this.state.artist_data && this.state.artist_data.artist_name}</p>
                        <p>Genre: {this.state.artist_data && this.state.artist_data.genre}</p>
                        <p>{this.state.artist_data && this.state.artist_data.city_country}</p>
                        <p>IG Handle: {this.state.artist_data && this.state.artist_data.ig_handle}</p>
                        <p>Website: <a href={this.state.artist_data && this.state.artist_data.website}>{this.state.artist_data && this.state.artist_data.website}</a></p>
                        <a className="waves-effect waves-light btn-small" id="button">Update Artist</a>
                        <a className="waves-effect waves-light btn-small" id="button">Remove Artist</a>
                    </div>
                </div>
            </div>
        </div>
            ;

    }
}
export default Artistcard;

