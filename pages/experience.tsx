import Title from "../components/title";
import React from "react";
import Image from "next/image";

function Experience() {
  return (
    <section id="work-exp" className="bgWhite ofsInBottom">
      <div className="experience">
        <Title title="Work Experience" />

        <div className="content d-grid gap-5">
          {/* AveeHealth */}
          <div className="text-body">
            <h4>AveeHealth</h4>
            <h6 className="text-muted">
              Senior Software Engineer | Vancouver, B.C. | Jan 2025 - Jan 2026
            </h6>
            <ul>
              <li>
                Spearheaded the development of a new doctors panel using Python
                and React, successfully migrating users from the old system
                without disruption.
              </li>
              <li>
                Architected and implemented Django database models, overcoming
                the project&apos;s most significant technical challenge to ensure
                data integrity and system functionality.
              </li>
              <li>
                Built an AI-powered transcription pipeline using Deepgram, RAG,
                and Pydantic AI to transcribe doctor-patient sessions and
                generate structured SOAP notes.
              </li>
            </ul>
          </div>

          {/* Snapp */}
          <div className="col-3 mx-auto">
            <Image src="/snapp.png" height={1024} width={1024} alt="snapp" />
          </div>
          <div className="text-body">
            <h4>Snapp!</h4>
            <h6 className="text-muted">
              Senior Cloud Engineer | Tehran, Iran | Oct 2020 - Present
            </h6>
            <ul>
              <li>
                Led the design and implementation of a company-wide cloud
                platform, progressing to lead engineer for platform architecture.
              </li>
              <li>
                Engineered Kubernetes operators (CRDs) to automate ArgoCD
                authentication and authorization.
              </li>
              <li>
                Led the design of a scalable microservice architecture for a
                high-volume delivery application, leveraging NATS to handle over
                300k messages/sec.
              </li>
              <li>
                Implemented KServe and Knative on Kubernetes to build ML
                pipelines, reducing resource consumption and boosting data
                gathering by 10%.
              </li>
              <li>
                Deployed and managed Kafka on Kubernetes using the Strimzi
                operator; mentored teams on messaging best practices.
              </li>
            </ul>

            <h6 className="text-muted">
              Software Engineer (Shared Services Team) | Jan 2019 - Oct 2020
            </h6>
            <ul>
              <li>
                Optimized critical legacy applications (PHP) by migrating them
                to modern Go microservices, increasing availability by 20%.
              </li>
              <li>
                Developed a real-time stream processing service to dynamically
                adjust pricing and balance demand/supply, resulting in a 5%
                increase in accepted rides.
              </li>
              <li>
                Developed and maintained backend services in Go for real-time
                order processing and delivery tracking.
              </li>
            </ul>
          </div>

          {/* IoT Working Group / AIOTRC */}
          <div className="col-3 mx-auto">
            <Image src="/aiotrc.png" height={1024} width={1024} alt="aiotrc" />
          </div>
          <div className="text-body">
            <h4>IoT Working Group of Amirkabir University of Technology</h4>
            <h6 className="text-muted">
              Software Architect | Tehran, Iran | Jan 2017 - Jan 2019
            </h6>
            <ul>
              <li>
                Secured and managed a ~$30,000 university research grant to
                establish the IoT laboratory and launch pilot projects.
              </li>
              <li>
                Engineered a custom Reliable Layer-2 Transport Protocol
                (Stop-and-Wait ARQ with Retry logic) on top of raw NRF radio
                modules for guaranteed packet delivery.
              </li>
              <li>
                Achieved stable performance for 1,000 concurrent IoT devices
                during load testing of the &quot;Nahal&quot; platform.
              </li>
              <li>
                Built a scalable backend connecting 5000+ LoRa nodes for
                agricultural monitoring, utilizing Sentinel-2 satellite imagery
                for crop insights.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
