import Title from "../components/title";

type HomeProps = {
  resume_tag: string;
};

export default function Home({ resume_tag }: HomeProps) {
  return (
    <section id="about" className="bgWhite ofsInBottom">
      <div className="about">
        <Title title="Who am I?" />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="profile margBSmall">
              <h1>Parham Alvani</h1>
              <h3>PhD Student, Backend developer</h3>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>
                  I was born in February 20 1995 in Tehran where I currently
                  live and study Network Engineering at Amirkabir University of
                  Technology.
                </p>
                <br />
                <p>
                  I'm interested in networks and using of them in Internet of
                  Things and I do my best to improve the network connections of
                  things around the world.
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
                  <li>Software Defined Networking (SDN)</li>
                  <li>Network Function Virtualization (NFV)</li>
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
                href={`https://github.com/1995parham/1995parham.pdf/releases/download/${resume_tag}/main.pdf`}
                className="but opc-2"
              >
                <i className="fas fa-paperclip"></i> Here's my CV (updated at{" "}
                {resume_tag})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/repos/1995parham/1995parham.pdf/releases/latest"
  );
  const latest = await res.json();

  return {
    props: {
      resume_tag: latest.tag_name,
    },
  };
}
