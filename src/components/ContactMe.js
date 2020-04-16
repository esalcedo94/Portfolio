import React, { Component } from "react";
import ReactContactForm from "react-mail-form";
import { Link } from "react-router-dom";

class ContactMe extends Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m12 l12">
          <div class="card blue-grey darken-1">
            <div class="card-content grey white-text">
              <span class="card-title">Feel free to contact me anytime</span>
              <p class="flow-text">
                {" "}
                I am currently in the job market looking for full stack,
                frontend, or backend positions. If you have any questions,
                comments or concerns I can be contacted via email below or
                directly at 1-760-500-8290
                <span>The link below is my résumé</span>
                <span>Thank you</span>
              </p>
              <ReactContactForm
                to="esalcedo63@gmail.com"
                titlePlaceholder="Subject"
                className="input-field email-form"
              />
            </div>
            <div class="card-action">
              <Link to="/files/resume2020_.pdf" target="_blank" download>
                Résumé
              </Link>
            </div>
          </div>
        </div>
      </div>

      //     <Row>
      //     <Col
      //       m={6}
      //       s={12}
      //       l={12}
      //     >
      //       <Card
      //         actions={[
      //           <a key="1" href="#">This is a link</a>,
      //           <a key="2" href="#">This is a link</a>
      //         ]}
      //         className="blue-grey darken-1"
      //         closeIcon={<Icon>close</Icon>}
      //         revealIcon={<Icon>more_vert</Icon>}
      //         textClassName="white-text"
      //         title="Contact Me"
      //       >
      //         I am currently in the job market looking for full stack, fronend, or backend positions. If you have any questions comments or concerns feel free to reach out to me.
      //         Also I have a link to my resume below. Thank you.
      //       </Card>
      //     </Col>
      //   </Row>
    );
  }
}

export default ContactMe;
