// import React, { Component } from 'react';
// import axios from 'axios';
// import './style.css/artistcard.css';
// import {Button} from 'react-materialize';

// class Artistcard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     componentDidMount() {
//         axios.get("/api/artists/" + this.props.match.params.id).then(response => {
//             const artist_data = response.data
//             console.log(response.data)
//             this.setState({
//                 artist_data
//             })
//             console.log(this.state);
//         })
//     }
//     // removeArtist= (event)=>{
//     //     event.preventDefault ();
//     //     console.log(this.state.artist_data._id)
//     //     axios.delete(`api/artists/${this.state.artist_data._id}`, this.state.artist_data._id)
//     //     .then((response)=>{
//     //         console.log(response);
        
//     //     })
//     // }
//     render() {
//         return <div>
//             <div className="container">
//                 <div className="col s5 push-s7">
//                     <img className="responsive-img" id="profilepic" src={this.state.artist_data && this.state.artist_data.image} />
//                     <div className="container" id="moreinfo">
//                         <p>{this.state.artist_data && this.state.artist_data.artist_name}</p>
//                         <p>Genre: {this.state.artist_data && this.state.artist_data.genre}</p>
//                         <p>{this.state.artist_data && this.state.artist_data.city_country}</p>
//                         <p>IG Handle: {this.state.artist_data && this.state.artist_data.ig_handle}</p>
//                         <p>Website: <a href={this.state.artist_data && this.state.artist_data.website}>{this.state.artist_data && this.state.artist_data.website}</a></p>
//                         <Button waves='light' id="button">Update Artist</Button>
//                         <Button waves='light' id="button" onClick={this.removeArtist}>Remove Artist</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             ;

//     }
// }
// export default Artistcard;

// <h5 className="make">MAKE MUSIC MEANINGFUL
//         </h5>
//       <h5 id="name" className="make"> The music industry's most contemporary & effective artist management app.</h5>
// state = {
//     register: false
//   }

//   toggleModal = () => {
//     this.setState({ register: !this.state.register })
//   }