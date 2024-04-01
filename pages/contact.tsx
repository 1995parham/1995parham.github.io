import Title from "../components/title";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="bgWhite ofsInBottom">
      <div className="contact">
        <Title title="Contact Me" />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="row">
              <div className="col-md-8">
                <strong>
                  <i className="fab fa-google"></i> Email
                </strong>
                :&nbsp; parham.alvani <strong>at</strong>{" "}
                gmail <strong>dot</strong> com
                <br />

                <strong>
                  <i className="fab fa-skype"></i> Skype
                </strong>
                :&nbsp; parham.alvani
                <br />
              </div>
              <div className="col-md-4">
                <a
                  href="https://github.com/1995parham.keys"
                  target="_blank"
                  role="button"
                  rel="noopener"
                  className="btn btn-outline-dark"
                >
                  Public Keys
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
