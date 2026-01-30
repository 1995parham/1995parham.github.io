import Title from "../components/title";
import React from "react";
import Image from "next/image";
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
              <h3>Senior Software & Platform Engineer</h3>
            </div>
            <div className="row">
              <div className="col-md-8 text-body">
                <p>
                  Software engineer with a Ph.D. and over 10 years of experience
                  building backend systems and cloud-native platforms. Proven
                  expertise in Go, Python, Kubernetes, and microservices
                  architecture, with hands-on success engineering high-throughput
                  solutions handling 300,000+ messages/sec.
                </p>
                <br />
                <p>
                  My journey began in 2012 at Amirkabir University of Technology,
                  where my first programming course with{" "}
                  <a href="https://ce.aut.ac.ir/~bakhshis/">Prof. Bakhshi</a>{" "}
                  sparked my passion for Unix, Linux, and the world of computing.
                </p>
                <br />
                <p>
                  I am deeply interested in networks and their applications in
                  Internet of Things. As a researcher, I love hands-on work—building
                  real systems rather than theoretical models. My Ph.D. research
                  focused on practical IoT solutions and network protocols.
                </p>
                <br />
                <p>
                  As a developer, I thrive on solving complex challenges, understanding
                  root causes, and optimizing performance. My track record spans
                  full-stack development, distributed systems design, and platform
                  engineering—from writing production services to architecting
                  company-wide infrastructure.
                </p>
                <br />
                <Image
                  src="/parham-alvani-software-engineer.jpg"
                  width={1024}
                  height={1024}
                  alt="Parham Alvani"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-4">
                <b className="fw-bold fs-5">Interests:</b>
                <ul className="bullet">
                  <li>Internet of Things (IoT)</li>
                  <li>Embedded Programming</li>
                  <li>Cyber-Physical Systems</li>
                  <li>Kernel Hacking</li>
                  <li>Cloud-Native Platforms</li>
                </ul>
                <hr />
                <b className="fw-bold fs-5">Key Skills:</b>
                <ul className="bullet">
                  <li>Go, Python, Rust</li>
                  <li>Kubernetes, Docker</li>
                  <li>Microservices Architecture</li>
                  <li>Platform Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/1995parham/1995parham.pdf/releases/download/${resumeTag}/parham.pdf`}
              className="but opc-2"
            >
              <i className="fas fa-paperclip"></i> Here is my CV (updated at{" "}
              {resumeTag})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/1995parham/1995parham.pdf/releases/latest",
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`);
    }

    const latest = await res.json();

    return {
      props: {
        resumeTag: latest.tag_name || "latest",
      },
    };
  } catch (error) {
    console.error("Failed to fetch resume tag:", error);
    return {
      props: {
        resumeTag: "latest",
      },
    };
  }
};
