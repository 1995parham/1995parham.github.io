import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/base.css";
import "../styles/main.css";
import "highlight.js/styles/github.css";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

function MainApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Parham Alvani - Senior Software & Platform Engineer</title>
        <meta
          name="description"
          content="Software engineer with a Ph.D. and 10+ years of experience building backend systems and cloud-native platforms. Expertise in Go, Python, Kubernetes, and microservices architecture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Parham Alvani" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Parham Alvani - Senior Software & Platform Engineer" />
        <meta
          property="og:description"
          content="Software engineer with a Ph.D. and 10+ years of experience in backend systems, cloud-native platforms, and microservices architecture."
        />
        <meta property="og:url" content="https://1995parham.github.io" />
        <meta property="og:image" content="https://1995parham.github.io/me-1.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Parham Alvani - Senior Software & Platform Engineer" />
        <meta
          name="twitter:description"
          content="Software engineer with a Ph.D. and 10+ years of experience in backend systems, cloud-native platforms, and microservices architecture."
        />
        <meta name="twitter:image" content="https://1995parham.github.io/me-1.png" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐼</text></svg>"
        />
      </Head>
      <div className="margLTop margLBottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3 left-content">
              <header id="header">
                <div className="main-header">
                  <figure className="img-profile">
                    <Image
                      src="/me-1.png"
                      width={1024}
                      height={1024}
                      alt="Parham Alvani"
                    />
                    <figcaption className="name-profile">
                      <span>PARHAM ALVANI</span>
                    </figcaption>
                  </figure>
                  <nav className="main-nav">
                    <ul>
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={clsx("nav-link", {
                            active: router.pathname === "/",
                          })}
                        >
                          <i className="fas fa-user"></i>About Me
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/experience"
                          className={clsx("nav-link", {
                            active: router.pathname === "/experience",
                          })}
                        >
                          <i className="fas fa-briefcase"></i>Work
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/education"
                          className={clsx("nav-link", {
                            active: router.pathname === "/education",
                          })}
                        >
                          <i className="fas fa-graduation-cap"></i>Education
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blog"
                          className={clsx("nav-link", {
                            active: router.pathname === "/blog",
                          })}
                        >
                          <i className="fas fa-blog"></i>Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/lecture"
                          className={clsx("nav-link", {
                            active: router.pathname === "/lecture",
                          })}
                        >
                          <i className="fas fa-book"></i>Lectures
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://1995parham.github.io/MeInBSc/"
                          rel="noopener"
                          target="_blank"
                          className="nav-link"
                        >
                          <i className="fas fa-memory"></i>Me in B.Sc. (Persian)
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                  <ul className="social">
                    <li className="anim">
                      <a
                        href="https://github.com/1995parham"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="anim">
                      <a
                        href="https://stackoverflow.com/users/4242097/parham-alvani"
                        target="_blank"
                        rel="noopener"
                        aria-label="Stackoverflow"
                      >
                        <i className="fab fa-stack-overflow"></i>
                      </a>
                    </li>
                    <li className="anim">
                      <a
                        href="https://www.youtube.com/@parhamalvani"
                        target="_blank"
                        rel="noopener"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="anim">
                      <a
                        href="https://www.reddit.com/user/1995parham"
                        target="_blank"
                        rel="noopener"
                        aria-label="Reddit"
                      >
                        <i className="fab fa-reddit"></i>
                      </a>
                    </li>
                  </ul>
                  <p>I Have a Dream</p>
                </div>
              </header>
            </div>
            <div className="col-md-7 right-content">
              <Component {...pageProps} />
            </div>
            <div className="col-md-2">
              <aside className="contact-sidebar sticky-top pt-4">
                <div className="sidebar-title">
                  <h5>Contact Me</h5>
                  <div className="divider">
                    <div data-svg-drawing="yes" className="zigzag large clearfix">
                      <svg
                        xmlSpace="preserve"
                        viewBox="0 0 69.172 14.975"
                        width="37"
                        height="28"
                        y="0px"
                        x="0px"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <path
                          d="M1.357,12.26 10.807,2.81 20.328,12.332 29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793"
                          style={{ strokeDasharray: "93.9851, 93.9851", strokeDashoffset: 0 }}
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="contact-list">
                  <li>
                    <a href="https://wa.me/989390909540" target="_blank" rel="noopener">
                      <i className="fab fa-whatsapp"></i>
                      <span>WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/parham_alvani" target="_blank" rel="noopener">
                      <i className="fab fa-telegram"></i>
                      <span>Telegram</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:parham.alvani@gmail.com">
                      <i className="fab fa-google"></i>
                      <span>Email</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/1995parham.keys" target="_blank" rel="noopener">
                      <i className="fas fa-key"></i>
                      <span>Public Keys</span>
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainApp;
