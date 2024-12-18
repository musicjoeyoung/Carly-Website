import "./About.scss"

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <div className="App">
      <div id="canvas">
        <Header />
        <section id="page">
          <div>
            <div>
              <h3>
                Carly Anderson is a NYC-based writer, editor, and teacher,
                specializing in short form fiction and essays.
              </h3>
              <h3>
                At the age of six, Carly penned her first poem titled, “The
                Cookie Crumbled,” expressing her grief over her parents’
                separation. Although her writing has evolved throughout the
                years, she continues to explore love, loss, and grief, examine
                the fragility of connection, and grapple with the complexities
                of the human experience. Her works have appeared in several
                literary journals, including <em>Brevity </em>and{" "}
                <em>100 Word Story.</em>
              </h3>
              <h3>
                She lives with her composer-performer husband, Joe, and their
                adorable rescue cat, Hudson.
              </h3>
            </div>
            <div>&nbsp;</div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
