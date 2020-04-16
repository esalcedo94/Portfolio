import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div class="container row">
        <div class="container">
          <div class="row">
            <div class="col s12 m12 l11">
              <div class="card hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="https://www.dreadcentral.com/wp-content/uploads/2017/06/rick-and-morty.jpg"
                    alt="Eduardo's Rick and Morty App"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <i class="material-icons right">visibility</i>
                  </span>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://rick-and-morty-tracker.herokuapp.com"
                    >
                      Rick and Morty Characters
                    </a>
                  </p>
                  <p class="right">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/esalcedo94/final_project"
                    >
                      Code
                    </a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Rick and Morty Character Tracker
                    <i class="material-icons right">close</i>
                  </span>
                  <p class="center-align flow-text">
                    Full CRUD application that uses Django, Python, Postgresql,
                    Materialize and AWS.
                    <span>
                      A Rick And Morty Character Tracker application that allows
                      users to track which episode the character was last seen.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m12 l11">
              <div class="card hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="http://cdn.images.insidelacrosse.com/auto/0717/59587dfa8e6f5/900x600/59587dfa8e6f5.jpg"
                    alt="Eduardo Salcedo Lacrosse Games App"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <i class="material-icons right">visibility</i>
                  </span>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://esalcedo-express-mongo-example.herokuapp.com/lax"
                    >
                      Lacrosse Game Scores
                    </a>
                  </p>
                  <p class="right">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/esalcedo94/express-mongo-starter"
                    >
                      Code
                    </a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Lacrosse Game Scores
                    <i class="material-icons right">close</i>
                  </span>
                  <p class="center-align flow-text">
                    A full stack application using MongoDB, Express, Mongoose,
                    Materialize, and EJS.
                    <span>
                      Full CRUD functionality. MVC file structure and
                      Authorization for user sign in/log in.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s12 m12 l11">
                <div class="card hoverable">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="https://wallpapersite.com/images/pages/pic_w/17568.jpg"
                      alt="Eduardo Salcedo Social App"
                    />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      <i class="material-icons right">visibility</i>
                    </span>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://butterflyeffect-1.herokuapp.com/"
                      >
                        Social Butterfly App
                      </a>
                    </p>
                    <p class="right">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/shirsi/butterfly-1"
                      >
                        Code
                      </a>
                    </p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      Social Butterfly App
                      <i class="material-icons right">close</i>
                    </span>
                    <p class="center-align project-flow-text">
                      A full stack social media type app that uses MongoDB,
                      Express, Mongoose, Router and React
                      <span>
                        Users that are signed in can post an image or video.
                        User can also leave comments and like posts.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col s12 m12 l11">
                <div class="card hoverable">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="https://1.bp.blogspot.com/-sTMKMbK4qw4/UDG3RhJTvoI/AAAAAAAASQk/tK71UdRlQXw/s1600/banana+pancake+(2).jpg"
                      alt="Eduardo Salcedo's Meal App"
                    />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      <i class="material-icons right">visibility</i>
                    </span>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://esalcedo94.github.io/meal-app/"
                      >
                        Meal Recipes App
                      </a>
                    </p>
                    <p class="right">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/esalcedo94/esalcedo94.github.io/tree/master/meal-app"
                      >
                        Code
                      </a>
                    </p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      Meal Recipes App
                      <i class="material-icons right">close</i>
                    </span>
                    <p class="center-align flow-text">
                      App that uses AJAX to make a request to third party API
                      (MealDB) and retieves some of the data onto the DOM.
                      <span>
                        Search for meals and in return get images of meals, with
                        recipe and link to youtube video.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s12 m12 l11">
                <div class="card hoverable">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="https://www.riskified.com/blog/wp-content/uploads/2017/01/BlogBanner_89_sneakers-info-01-1.png"
                      alt="Eduardo Salcedo's Shoe App"
                    />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      <i class="material-icons right">visibility</i>
                    </span>
                    <p>Sneaker Collection App</p>
                    <p class="right">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/esalcedo94/project4"
                      >
                        Code
                      </a>
                    </p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      Sneaker Collection App
                      <i class="material-icons right">close</i>
                    </span>
                    <p class="center-align flow-text">
                      A Ruby-on-Rails back-end using postgresql for our database
                      and incorporated full CRUD. For the front-end used React.
                      <span>
                        Also incorporated Bootstrap CSS framework for styling
                        the buttons, while we decided to style the rest of the
                        page manually.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
