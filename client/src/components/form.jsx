import React, {Component} from 'react';
// import "./style/form.css";
import { Row, Input} from 'react-materialize';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios";


class Form extends Component{
    state=
    {
        artist: ""
    }
    handleSubmit=(event) => {
event.preventDefault()
console.log("hey", this.state.artist);
// axios.post('/api/artists', function (req, res) {
//     // artists.create(req.body)
//     //   .then(function (data) {
//     //     res.json(data);
//     //   })
//     //   .catch(function (err) {
//     //     res.json(err);
//     //   });
//   }); /////grab the values
    }
    captureUserInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    // captureInput=(event)=>{this.setState}
    render(){
        return(
        <Row>
       <Input type="artist" label="Artist" onChange={this.captureUserInput} name="Artist"  s={12} />
        <Input type="image" label="Image" s={12} />  
        <Input type="genre" label="Genre" s={12} />
        <Input type="city" label="City, Country" s={12} />
        <Input type="ighandle" label="Instagram Handle" s={12} />
        <Input type="website" label="Website" s={12} />
        <Input type="listeners" label="Listeners" s={12} />
        <button className="waves-effect waves-light btn-small" onClick={this.handleSubmit}>Add Artist</button>
      
    </Row>
        )
;
    }
    }
export default Form;
          