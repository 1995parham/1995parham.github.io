import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/base.css";
import "../styles/main.css";

import { AppProps } from "next/app";

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <div id="wrapper" className="margLTop margLBottom">
      <div className="container">
        <div className="row">
          <div className="col-md-3 left-content">
            <header id="header">
              <div className="main-header">
                <figure className="img-profile">
                  <img src="/me-1.png" alt="Parham Alvani" />
                  <figcaption className="name-profile">
                    <span>PARHAM ALVANI</span>
                  </figcaption>
                </figure>
                <nav id="main-nav" className="main-nav clearfix tabbed">
                  <ul>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fas fa-user"></i>About Me
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="fas fa-graduation-cap"></i>Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="fas fa-briefcase"></i>Work
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        <i className="fas fa-pen"></i>Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://1995parham.github.io/stopwatch/"
                        target="_blank"
                        className="nav-link"
                      >
                        <i className="fas fa-stopwatch"></i>Stopwatch
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://1995parham.github.io/MeInBSc/"
                        target="_blank"
                        className="nav-link"
                      >
                        <i className="fas fa-memory"></i>Me in B.Sc.
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                <ul className="social">
                  <li className="anim">
                    <a href="https://github.com/1995parham" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="anim">
                    <a
                      href="http://stackoverflow.com/users/4242097/parham-alvani"
                      target="_blank"
                    >
                      <i className="fab fa-stack-overflow"></i>
                    </a>
                  </li>
                </ul>
                <p>Success is the sole earthly judge of right and wrong</p>
              </div>
            </header>
          </div>
          <div className="col-md-9 right-content">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainApp;
