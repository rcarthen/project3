import React, { Component } from 'react';
// import "./style/form.css";
import axios from "axios";
import Artistcard from './artistcard';
import DashNav from './dashNav';
import { Link } from 'react-router-dom';


class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }
    componentWillMount() {
        axios.get("/api/artists").then(response => {
            console.log(response.data);
            this.setState({ artists: response.data })
        })

    }
    render() {
        return (
            <div>
                <div>
                    <DashNav />
                </div>
                <div>
                {this.state.artists.map(item => (
                    <div className="container" key={item._id}>
                        <div className="row">
                            <div className="col s12 m7">
                                <div className="card medium">
                                    <div className="card-image">
                                        <div>
                                            <a> <img id="profilepic" src={item.image}>
                                            </img> </a>
                                        </div>
                                    </div>
                                    <div className="card-content" id="card">
                                        <h5>{item.artist_name}</h5>
                                        <p>Genre: {item.genre}</p>
                                        <p>{item.ig_handle}</p>
                                        <Link className="waves-effect waves-light btn-small" to={`/artists/${item._id}`}>MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
            ;
    }
}

export default ArtistList;