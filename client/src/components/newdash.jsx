import React, {Component} from 'react';
import {Tabs, Tab} from 'react-materialize';

class Newdash extends Component{
        render(){
    <Tabs className='tab-demo z-depth-1'>
    <Tab title="Test 1">The Team</Tab>
    <Tab title="Test 2" active>New Artist</Tab>
</Tabs>;
        }
    }

export default Newdash;