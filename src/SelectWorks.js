import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
                    <a href="https://brevitymag.com/current-issue/almost/">
                      <em>"Almost"</em> - published in <em>Brevity</em>
                    </a>
                  </h3>
                </li>
              </ul>
              <h3>Short Form Fiction</h3>
              <ul className="worksUl">
                <li>
                  <h3>
                    <a href="http://100wordstory.org/apartment-key/">
                      <em>“Apartment Key”</em> - published in{" "}
                      <em>100 Word Story</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="./Laundry_Day_Carly_Anderson.pdf">
                      <em>“Laundry Day”</em> - published in{" "}
                      <em>Boston Literary Magazine</em>
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    <a href="./No_Going_Back_Carly_Anderson.pdf">
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
