import React, {Component} from 'react';
import "./form.stylecss";
import {Row, Input} from 'react-materialize';

class Form extends Component{
    render(){
        <Row>
        <Input type="artist" label="Artist" s={12} />
        <Input type="image" label="Image" s={12} />  
        <Input type="genre" label="Genre" s={12} />
        <Input type="city" label="City, Country" s={12} />
        <Input type="city" label="City, Country" s={12} />
        <Input type="ighandle" label="Instagram Handle" s={12} />
        <Input type="website" label="Website" s={12} />
        <Input type="listeners" label="Listeners" s={12} />
    </Row>

;
    }
    }
export default Form;
          