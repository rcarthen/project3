import React, { Component } from 'react';
import axios from "axios";
import "./style.css/dashboard.css";
import { Tabs, Tab } from 'react-materialize';
import Form from './form';
import ArtistList from './artistList';

class Dashboard extends Component {
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
            <Tabs className='tab-demo z-depth-1'>
                <Tab title="The Team">
                   <ArtistList />
                </Tab>
                <Tab title="New Artist" active><Form /></Tab>
            </Tabs>
        );
    }
}
export default Dashboard;
