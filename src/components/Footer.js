import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue-grey">
          <i class="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a
              class="btn-floating blue"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/esalcedo01"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              class="btn-floating blue darken-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/eduardo-salcedo94/"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              class="btn-floating black"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/esalcedo94"
            >
              <i class="fa fa-github"></i>
            </a>
          </li>

        </ul>
      </div>
    );
  }
}

export default About;
