import React, {Component} from 'react';
import axios from "axios";
import "./style.css/dashboard.css";
import {Tabs, Tab} from 'react-materialize';
import Form from './form';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            artists: []
        }
    }
    componentWillMount   () {
        axios.get( "/api/artists").then(response=>{
            console.log(response.data);
            this.setState({artists:response.data})
        })

    }
    render(){
        return (
        <Tabs className='tab-demo z-depth-1'>
    <Tab title="The Team">The Team
            <div>
                {this.state.artists.map(item=>(
            <div className="container"> 
      <div className="row">
          <div className="col s12 m7">
            <div className="card medium">
              <div className="card-image">
              <div>
              <a> <img id="profilepic"src={item.image}>
                </img> </a>
                </div>
              </div>
              <div className="card-content" id="card">
              <h5>{item.artist_name}</h5>
                <p>Genre: {item.genre}</p>
                <p>{item.ig_handle}</p>
                <button className="waves-effect waves-light btn-small" data-id={item.id_} id="more">MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
        </Tab>
        <Tab title="New Artist" active><Form/></Tab>
            </Tabs>
        );
    }
}
export default Dashboard;
          