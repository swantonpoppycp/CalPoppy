
import {suggestions, aboutSPR, aboutCreators, aboutHayes, aboutKurfess, disclaimer} from "./aboutTxt";
import '../style/about.css';
import hayes from "../images/hayes_grey.jpeg";
import kurfess from "../images/kurfess_franz.jpeg";

const About = () => {
  return (
    <div class="container">
      <div class="row text-white center-block">
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">Suggested Questions</h4>
              <h6>Click on any of the questions to ask Poppy!</h6>
              <div class="btn-group-vertical">
                <button onClick="sendMessage(suggestions[0])" type="button" class="roundbutton">{suggestions[0]}</button>
                <button onClick="sendMessage(suggestions[1])" type="button" class="roundbutton">{suggestions[1]}</button>
                <button onClick="sendMessage(suggestions[2])" type="button" class="roundbutton">{suggestions[2]}</button>
                <button onClick="sendMessage(suggestions[3])" type="button" class="roundbutton">{suggestions[3]}</button>
                <button onClick="sendMessage(suggestions[4])" type="button" class="roundbutton">{suggestions[4]}</button>
                <button onClick="sendMessage(suggestions[5])" type="button" class="roundbutton">{suggestions[5]}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">About Swanton Pacific Ranch</h4>
              <h6><br/>{aboutSPR[0]}<p/><br/>{aboutSPR[1]}</h6>
            </div> 
          </div>
        </div>

        <div class="w-70"></div>

        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">About the Creators</h4>
              <h6><br/>{aboutCreators[0]}<p/>
                  {aboutCreators[1]}<br/>
                  {aboutCreators[2]}
              </h6>

              <h5>
                <br/>Dr. Grey Hayes<br/>
              </h5>
              <img src={hayes} width="50%" /><br/>
              {aboutHayes[1]}
              <h6>
                <br/>{aboutHayes[0]}
              </h6>

              <h5>
                <br/>Dr. Franz J. Kurfess<br/>
              </h5>
              <img src={kurfess} width="50%" /><br/>
              <h6>
                <br/>{aboutKurfess[0]}<br/>{aboutKurfess[1]}
              </h6>
            </div> 
          </div>
        </div>
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">Disclaimer</h4>
              <h6>{ disclaimer }</h6>
            </div> 
          </div> 
        </div>
      </div>
    </div>
  );
  }

  export default About;