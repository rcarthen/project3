import React from 'react';
import axios from "axios";
 
class TweetList extends React.Component {
    constructor(props) {
        super(props);
        console.log('constucted component with hashtag:' + props.hashtag)
        this.state = {
            hashtag:props.hashtag,
            tweets: []
        }
    }
    componentWillMount() {
        console.log('mounting component with hashtag'+ this.state.hashtag);
        axios.get("/api/tweets?hashtag=" + this.state.hashtag).then(response => {
            this.setState({ tweets: response.data })
        })

    }
  
 
    render() {
        return <div> hello {this.state.hashtag}</div>
        ;
    };
  
}

export default TweetList;