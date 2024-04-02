import Title from "../components/title";
import React from "react";
import Image from "next/image";

function Experience() {
  return (
    <section id="work-exp" className="bgWhite ofsInBottom">
      <div className="experience">
        <Title title="Work Experience" />

        <div className="content d-grid gap-5">
          <div className="col-3 mx-auto">
            <Image src="/snapp.png" height={1024} width={1024} alt="snapp" />
          </div>
          <div className="text-body">
            <p>
              I began my journey at Snapp on January 27, 2019. During those
              early days, I was part of the Charlie team. Our mission was to
              rewrite high-load endpoints of Snapp using Go and gradually
              dismantle the monolithic PHP codebase by transitioning to
              microservices. One of my significant achievements during this
              period was creating the Surge service in Go.
            </p>
            <p>
              Under the guidance of Sina Saeedi, I worked diligently, with Reza
              Saftari as my direct manager. However, as our team structure
              evolved, I transitioned to the Shared Services team. There, under
              the joint management of Sina Saeedi and Rashad Ansari, we
              developed Go-based services that proved valuable across multiple
              teams.
            </p>
            <p>
              Subsequently, I was promoted to Team Leader and joined the
              Dispatching team. Working alongside talented and dedicated
              colleagues, we provide essential services for delivering events
              (including ride offers) to both drivers and passengers.
            </p>
          </div>
          <div className="col-3 mx-auto">
            <Image src="/aiotrc.png" height={1024} width={1024} alt="aiotrc" />
          </div>
          <div>
            <p className="text-body">
              I served as a solutions architect for our open-source IoT
              platform, which connects to over 5000 LoRa nodes spread across
              agricultural lands to collect data on humidity and soil
              conditions. In addition to this, the platform utilizes Sentinel-2
              satellite imagery to furnish farmers with comprehensive insights
              about their land and crops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
