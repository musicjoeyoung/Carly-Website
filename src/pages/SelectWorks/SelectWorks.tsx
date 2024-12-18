import "./SelectWorks.scss"

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const SelectWorks = () => {
  return (
    <div className="App">
      <div id="canvas">
        <Header />
        <section id="page">
          <div>
            <div>
              <h3>Short Form Essay</h3>
              <ul className="worksUl">
                <li>
                  <h3>
                    <a
                      href="https://brevitymag.com/current-issue/almost/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <em>"Almost"</em> - published in <em>Brevity</em>
                    </a>
                  </h3>
                </li>
              </ul>
              <h3>Short Form Fiction</h3>
              <ul className="worksUl">
                <li>
                  <h3>
                    <a
                      href="http://100wordstory.org/apartment-key/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <em>“Apartment Key”</em> - published in{" "}
                      <em>100 Word Story</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a
                      href="./Laundry_Day_Carly_Anderson.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <em>“Laundry Day”</em> - published in{" "}
                      <em>Boston Literary Magazine</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a
                      href="./No_Going_Back_Carly_Anderson.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <em>“No Going Back”</em> - published in{" "}
                      <em>Newtown Literary</em>
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
            <div>&nbsp;</div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SelectWorks;
