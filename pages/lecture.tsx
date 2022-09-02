import Title from "../components/title";
import React from "react";

function Lecture() {
  return (
    <section id="lecture" className="bgWhite ofsInBottom">
      <div className="expertise">
        <Title title="Lectures" />
        <div className="content">
          <div className="block-content">
            <div className="timeline book">
              <div className="row">
                <div className="col-md-12">
                  <div className="exp-holder margTop">
                    <div className="exp">
                      <div className="hgroup">
                        <h4>Internet Engineering</h4>
                        <h6>
                          <i className="fas fa-external-link-alt"></i>
                          <a href="https://1995parham-teaching.github.io/ie-lecture/">
                            Course Homepage
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="exp">
                      <div className="hgroup">
                        <h4>Python 201</h4>
                        <h6>
                          <i className="fas fa-external-link-alt"></i>
                          <a href="https://1995parham-teaching.github.io/Python201/">
                            Course Homepage
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="exp">
                      <div className="hgroup">
                        <h4>Introduction to Programming</h4>
                        <h6>
                          <i className="fas fa-external-link-alt"></i>
                          <a href="https://github.com/1995parham-teaching/c-lecture/">
                            Course Homepage
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lecture;
