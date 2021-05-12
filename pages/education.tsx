import Divier from "../components/divider";
import Title from "../components/title";

function Education() {
  return (
    <section id="education" className="bgWhite ofsInBottom">
      <div className="expertise">
        <Title title="Education" />
        <div className="content">
          <div className="block-content">
            <div className="timeline education">
              <div className="row">
                <div className="col-md-12">
                  <div className="exp-holder margTop">
                    <div className="exp">
                      <div className="hgroup">
                        <h4>
                          {" "}
                          Ph.D. Network Engineering&nbsp; [ 2019 - present ]
                        </h4>
                        <h6>
                          <i className="fas fa-thumbtack"></i>
                          <b className="bold">
                            <a
                              className="gpacolor"
                              href="http://aut.ac.ir/aut/"
                            >
                              Amirkabir University of Technology
                            </a>
                          </b>
                          , Tehran, Iran
                        </h6>
                      </div>
                      <br />
                    </div>
                    <div className="exp">
                      <div className="hgroup">
                        <h4>
                          {" "}
                          M.Sc. Network Engineering&nbsp; [ 2017 - 2019 ]
                        </h4>
                        <h6>
                          <i className="fas fa-thumbtack"></i>
                          <b className="bold">
                            <a
                              className="gpacolor"
                              href="http://aut.ac.ir/aut/"
                            >
                              Amirkabir University of Technology
                            </a>
                          </b>
                          , Tehran, Iran
                        </h6>
                      </div>
                      <br />
                    </div>
                    <div className="exp">
                      <div className="hgroup">
                        <h4>
                          {" "}
                          B.Sc. Computer Engineering ( Software Engineering
                          )&nbsp; [ 2013 - 2017 ]
                        </h4>
                        <h6>
                          <i className="fas fa-thumbtack"></i>
                          <b className="bold">
                            <a
                              className="gpacolor"
                              href="http://aut.ac.ir/aut/"
                            >
                              Amirkabir University of Technology
                            </a>
                          </b>
                          , Tehran, Iran
                        </h6>
                      </div>
                      <br />
                    </div>
                    <div className="exp">
                      <div className="hgroup">
                        <h4>
                          High School Diploma in Mathematics and Physics [ 2009
                          - 2013 ]
                        </h4>
                        <h6>
                          <i className="fas fa-thumbtack"></i>
                          <b className="gpacolor">
                            {" "}
                            Energy Atomic High School
                          </b>{" "}
                          , Tehran, Iran
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button margTop ofsInTop tCenter">
          <Divier />
        </div>
      </div>
    </section>
  );
}

export default Education;
