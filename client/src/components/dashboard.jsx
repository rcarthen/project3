import React, {Component} from 'react';
import axios from "axios";
import './dashboard.css';
import {Link} from "react-router-dom";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            artists: []
        }
    }
    componentDidMount   () {
        axios.get( "/api/artists").then(response=>{
            console.log(response.data);
            this.setState({artists:response.data})
        })

    }
    render(){
        return <div>
             <div className="row" className="container">
        <div className="col s12 m6">
            <ul className="tabs" className="black-text">
                <li className="tab col s3" id="dash"><a href="#team">The Team</a></li>
                <li className="tab col s3" id="dash"><a className="active" href="#artist"> New Artist</a></li>
                <li className="tab col s3" id="dash"><a href="#calendar">Calendar</a></li>
            </ul>
            <div>
                {this.state.artists.map(item=>(
            //    <React.Fragment>
                   
            //        <img src={item.image}>
            //        </img>
            //    <h5>{item.artist_name}</h5>
            //     <p>{item.genre}</p>
            //     <p>{item.ig_handle}</p>
            //     <a class="waves-effect waves-light btn-small" id="button">More Information</a>
            
            //     </React.Fragment>
            <div className="container"> 
      <div className="row">
          <div className="col s12 m7">
            <div className="card medium">
              <div className="card-image">
              <div>
                <img id="profilepic"src={item.image}>
                </img>
                </div>
                <span className="card-title">{item.artist_name}</span>
              </div>
              <div className="card-content" id="card">
              <h5>{item.artist_name}</h5>
                <p>Genre: {item.genre}</p>
                <p>{item.ig_handle}</p>
                <button className="waves-effect waves-light btn-small" data-id={item.id_} id="more" onClick={}>More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
            </div>
        </div>
    </div>
        </div>;
}
}
export default Dashboard;
          

///get each artist by sinle artist:id 