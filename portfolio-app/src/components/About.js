import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div class="container">
        <div class="card-image">
          <img
            class="home-image"
            src="https://i.imgur.com/QYuHkZO.jpg"
            alt="Eduardo Salcedo"
          />
        </div>
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="card">
              <div class="card-content about-content">
                <h3 class="center-align card-title">Software Engineer</h3>
                <p class="center-align">
                  Hello! My name is Eduardo Salcedo. I am a San Diego software
                  engineer. I have a passion for solving problems and developing
                  software with intuitive design and functionality. My
                  experience as an intern has taught me how to learn from others
                  and increased my level of communication. I am a huge fan of
                  constructive criticism and constant feedback because I believe
                  as a developer we continue to learn new things everyday. I am
                  driven to learn more, create scalable programs, and
                  communicate at a high level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l12">
            <h2 class="white-text header">Skills</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img
                  class="about-images"
                  src="https://i.imgur.com/PbsUN1d.jpg"
                />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p class="abouts">
                    I primarily use Javascript but picking up a new framework or
                    languange is not a problem. Languages I have worked with
                    include Java, C#, C++, Python, Ruby, HTML, and CSS. I'm also
                    a fluent spanish speaker. I have some programming experience
                    working as an intern. I am comfortable developing on the
                    frontend and backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l12">
            <h2 class="white-text right-align header">Diversion</h2>
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <p class="abouts">
                    When I'm not programming, I am a varsity lacrosse coach for El Camino High School. 
                    I love the game of lacrosse but not only that, teaching kids valuble lessons and giving back to the community is a great thing to me.
                    I have been coaching for about 10 years now. I started with a local middle school club and now coach those same kids at my alma mater. 
                  </p>
                </div>
              </div>
              <div class="card-image">
                <img class="about-images" src="https://i.imgur.com/iLb3IeP.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
