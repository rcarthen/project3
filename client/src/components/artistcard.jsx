import React, { Component } from 'react';
import axios from 'axios';
import './style.css/artistcard.css';
import {Button} from 'react-materialize';
import TweetList from './twitter/tweetList';
import DashNav from './dashNav';
import Calendar from './calendar';

class Artistcard extends Component {
    state = {
        tweets:[]
    }
    
    componentDidMount() {
        axios.get("/api/artists/" + this.props.match.params.id).then(response => {
            this.setState({
                artist_data:response.data
            })
            axios.get("/api/tweets?hashtag=" + this.state.artist_data.hashtag).then(response => {
                this.setState({ tweets: response.data.statuses })
                console.log(response.data)
            })
        })
        
    }
    removeArtist= (event)=>{
        event.preventDefault ();
        console.log(this.state.artist_data._id)
        axios.delete(`/api/artists/${this.state.artist_data._id}`)
        .then((response)=>{
             this.props.history.push('/artists/')
        
        })
    }
    goToUpdateView = (event)=>{
        this.props.history.push('/updateArtist/'+this.state.artist_data._id)
    }

    render() {
        return( <div>
            <div>
                <DashNav/>
            </div>
            <div className="container">
                <div className="col s5 push-s7">
                    <img className="responsive-img" id="solopic" src={this.state.artist_data && this.state.artist_data.image}/>

                    <div className="container" id="moreinfo">
                        <h5 id="artistcard">{this.state.artist_data && this.state.artist_data.artist_name}</h5>
                        <p>Genre: {this.state.artist_data && this.state.artist_data.genre}</p>
                        <p>{this.state.artist_data && this.state.artist_data.city_country}</p>
                        <p>IG Handle: {this.state.artist_data && this.state.artist_data.ig_handle}</p>
                        <p>Website: <a href={this.state.artist_data && this.state.artist_data.website}>{this.state.artist_data && this.state.artist_data.website}</a></p>
                       <Calendar/>
                        <Button waves='light' id="button" onClick={this.goToUpdateView}>Update Artist</Button>
                        <Button waves='light' id="button" onClick={this.removeArtist}>Remove Artist</Button>
                    </div>
                </div>
                <div>
                    {this.state.tweets.map(item => (
                        <div className="tweets">
                        <i class="fab fa-twitter"></i>
                            <div>@{item.user.screen_name}</div> 
                            <p>{item.text}</p>
                            <hr/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
         ) ;

    }
}
export default Artistcard;

