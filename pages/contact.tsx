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
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </strong>
                :&nbsp;
                <a
                  href="https://wa.me/98XXXXXXXXXX"
                  target="_blank"
                  rel="noopener"
                >
                  +98 XXX XXX XXXX
                </a>
                <br />

                <strong>
                  <i className="fab fa-telegram"></i> Telegram
                </strong>
                :&nbsp;
                <a
                  href="https://t.me/parham_alvani"
                  target="_blank"
                  rel="noopener"
                >
                  @parham_alvani
                </a>
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
