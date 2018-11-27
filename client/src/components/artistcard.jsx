import React, {Component} from 'react';



class Artistcard extends Component{
    render(){
        return <div>
             <div className="container">
        <div className="col s5 push-s7">
        <img className="responsive-img" id="profilepic" src="http://www.liannelahavas.com/wp-content/themes/liannelahavas/images/home_image.jpg"></img>
            <div class="container" id="moreinfo">
            <p>Lianne La Havas</p>
                <p>Genre: Soul</p>
                <p>London, UK</p>
                <p>Top Tracks: djaslfksjdflkajf;sdlkjfalksdjflksajfdslkjflaskjdskjfasl</p>
                <p>Related Artists: Adele, Hey, Hey, Hey</p>
                <p>IG Handle: @liannelahavas</p>
                <p>Website:....... Url</p>
                <a class="waves-effect waves-light btn-small" id="button">Update Artist</a>
                <a class="waves-effect waves-light btn-small" id="button">Remove Artist</a>
            </div>
        </div>
        </div>
        </div>
    ;
          
    }
}
export default Artistcard;