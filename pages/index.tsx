import Title from "../components/title";
import React from "react";
import { GetStaticProps } from "next";

type HomeProps = {
  resumeTag: string;
};

export default function Home({ resumeTag }: HomeProps) {
  return (
    <section id="about" className="bgWhite ofsInBottom">
      <div className="about">
        <Title title="Who am I?" />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="profile margBSmall">
              <h1>Parham Alvani</h1>
              <h3>Backend developer</h3>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>
                  I was born on February 20, 1995, in Tehran, where I currently live.
                  I work as a Backend Engineer and I love to write codes.
                  Everything for me began in 2012 when I finished my high school
                  and start my bachelor at Amirkabir University in Software engineer.
                  My first programming course was with Prof. Bakhshi which was great
                  and motivated me to learn more about Unix, Linux and the world of Computer.
                </p>
                <br />
                <p>
                  I am interested in networks and using of them in Internet of
                  Things and I do my best to improve the network connections of
                  things around the world.
                </p>
                <br />
                <p>
                  As a researcher, I love to do hands-on research and create a thing instead of writing useless equations.
                  In the world of Internet of Things you have this opportunity to do this because here we
                  have more hands-on journals and your requirements to create things is not too much.
                </p>
                <br />
                <img src="/me-2.jpg" alt="Parham Alvani" />
              </div>
              <div className="col-md-4">
                <b style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Interests:
                </b>
                <ul className="bullet">
                  <li>Internet of Things (IoT)</li>
                  <li>Embedded Programming</li>
                  <li>Cyber-Physical Systems</li>
                  <li>Kernel Hacking</li>
                  <li>Mathematical Optimization</li>
                </ul>
                <b
                  style={{
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "30px",
                  }}
                >
                  TOEFL iBT score:
                </b>
                <b>(95/120)</b>
                <ul className="bullet">
                  <li>Reading: (28/30)</li>
                  <li>Listening: (27/30)</li>
                  <li>Speaking: (20/30)</li>
                  <li>Writing: (20/30)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="button margTop ofsInTop tCenter">
          <div className="row">
            <div className="col-md-12">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/1995parham/1995parham.pdf/releases/download/${resumeTag}/main.pdf`}
                className="but opc-2"
              >
                <i className="fas fa-paperclip"></i> Here is my CV (updated at{" "}
                {resumeTag})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(
    "https://api.github.com/repos/1995parham/1995parham.pdf/releases/latest"
  );
  const latest = await res.json();

  return {
    props: {
      resumeTag: latest.tag_name,
    },
  };
};
