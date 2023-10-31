import Title from "../components/title";
import React from "react";
import Image from "next/image"

function Experience() {
  return (
    <section id="work-exp" className="bgWhite ofsInBottom">
      <div className="experience">
        <Title title="Work Experience" />

        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <Image src="/snapp.png" alt="snapp" />
            </div>
            <div className="col-md-6">
              <p>
                I&apos;ve started to work at Snapp in the 27 January 2019. Those days I worked at the Charlie team,
                and we wanted to re-write high load endpoints of Snapp in Go and start dismantling
                the huge monotonic PHP code in microservices. One of my achievements on those days is writing Surge service in Go.
                I worked under supervision of Sina Saeedi and my direct manager was Reza Saftari.
                After our team structured changed, and I joined the Shared services team to work under management of Sina Saeedi and Rashad Ansari. At the shared services team we provided services in Go which are useful for multiple teams. Then I promoted to Tech specialist and started working at the Dispatching team. Since then, I work at the Dispatching team and have chance to work with many talented and awesome people. Dispatching team provides services to deliver event (including ride offer) to drivers and passenger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
