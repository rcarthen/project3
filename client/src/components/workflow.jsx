import React, {Component} from 'react';
import axios from "axios";


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
             <div class="row" class="container">
        <div class="col s12 m6" id="dashgroup2">
            <ul class="tabs" class="black-text">
                <li class="tab col s3" id="dash"><a href="#team">The Team</a></li>
                <li class="tab col s3" id="dash"><a class="active" href="#artist"> New Artist</a></li>
                <li class="tab col s3" id="dash"><a href="#calendar">Calendar</a></li>
            </ul>
            <ul>
                {this.state.artists.map(item=>(
               <React.Fragment>
               <li>{item.artist_name}</li>
                <li>{item.genre}</li>
                <li>{item.ig_handle}</li>
                </React.Fragment>
                ))}
            </ul>
        </div>
    </div>
        </div>;

}
}
export default Dashboard;