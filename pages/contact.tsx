import Divier from "../components/divider";
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
                <b style={{ fontWeight: "bold" }}>
                  <i className="fas fa-envelope"></i> Email
                </b>
                :&nbsp; parham.alvani <b style={{ fontWeight: "bold" }}>at</b>{" "}
                tuta <b style={{ fontWeight: "bold" }}>dot</b> io
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fab fa-windows"></i> Email
                </b>
                :&nbsp; parham.alvani <b style={{ fontWeight: "bold" }}>at</b>{" "}
                hotmail <b style={{ fontWeight: "bold" }}>dot</b> com
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fab fa-yahoo"></i> Email
                </b>
                :&nbsp; parham.alvani <b style={{ fontWeight: "bold" }}>at</b>{" "}
                yahoo <b style={{ fontWeight: "bold" }}>dot</b> com
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fas fa-university"></i> Email
                </b>
                :&nbsp; parham.alvani <b style={{ fontWeight: "bold" }}>at</b>{" "}
                aut <b style={{ fontWeight: "bold" }}>dot</b> ac{" "}
                <b style={{ fontWeight: "bold" }}>dot</b> ir
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fab fa-skype"></i> Skype
                </b>
                :&nbsp; parham.alvani
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fas fa-phone"></i> Phone
                </b>
                :&nbsp;{" "}
                <a href="tel://+989390909540" style={{ color: "#777" }}>
                  (+98) 939 0909 540
                </a>
                <Divier />
                <iframe
                  src="https://api.neshan.org/v2/static?key=service.XzI8u04rz0BP19WwNJmjKqEc5gCwtEgqdYzIZEaz&type=dreamy&zoom=17&center=35.731965,51.393047&width=600&height=500&marker=red"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-4">
                <a
                  href="https://github.com/1995parham.key"
                  target="_blank"
                  role="button"
                  rel="noreferrer"
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
