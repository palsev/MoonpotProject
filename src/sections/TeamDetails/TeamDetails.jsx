import TeamDetailsStyleWrapper from "./TeamDetails.style";
import thumb from "assets/images/team/teamBig.png";
import fbIcon from "assets/images/icons/facebook.svg";
import linkedIcon from "assets/images/icons/linkedin.svg";
import twitterIcon from "assets/images/icons/twitter.svg";

const TeamDetails = () => {
  return (
    <TeamDetailsStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="left_content_thumb">
              <img src={thumb} alt="team thumb" className="img-fuild" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="right_content">
              <h3 className="member_title">
                Versace
                <span>Project Lead</span>
              </h3>

              <p>
                Hi, I am Versace, I am a Project Lead at Mopots.io, I have 5 years experience in crypto development world, with basic react and next js ( html, css, javascript and others ).
              </p>
              <p>
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur cites of the word
                in classical literature. The standard chunk of Lorem Ipsum used
                since the 1500s is reproduced below for those interested.
              </p>
              <p>
                Sections 1.10.32 and 1.10.33 from De Finibus Bonorum et Malorum"
                by Cicero are also reproduced in their exact original
              </p>

              <ul className="member_details">
                <li>
                  <strong>Experience:</strong> <span>5+ Years</span>
                </li>
                <li>
                  <strong>Email:</strong> <span>mopotsnfts@gmail.com</span>
                </li>
                <li>
                  <strong>TELEGRAM:</strong> <span>@Versaceboss</span>
                </li>
                <li className="social_items">
                  <strong>Social:</strong>
                  <a href="#">
                    {" "}
                    <img src={fbIcon} alt="icon" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <img src={linkedIcon} alt="icon" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <img src={twitterIcon} alt="icon" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TeamDetailsStyleWrapper>
  );
};

export default TeamDetails;
