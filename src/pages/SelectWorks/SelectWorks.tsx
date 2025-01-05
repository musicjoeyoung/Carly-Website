import "./SelectWorks.scss"

const works = {
  "Short Form Essay": [
    {
      title: "Almost",
      publication: "Brevity",
      link: "https://brevitymag.com/current-issue/almost/",
      isPdf: false
    }
  ],
  "Short Form Fiction": [
    {
      title: "Apartment Key",
      publication: "100 Word Story",
      link: "http://100wordstory.org/apartment-key/",
      isPdf: false
    },
    {
      title: "Laundry Day",
      publication: "Boston Literary Magazine",
      link: "src/assets/documents/Laundry_Day_Carly_Anderson.pdf",
      isPdf: true
    },
    {
      title: "No Going Back",
      publication: "Newtown Literary",
      link: "src/assets/documents//No_Going_Back_Carly_Anderson.pdf",
      isPdf: true
    }
  ]
};

const SelectWorks = () => {
  return (
    <div className="page">
      <div className="works">
        {Object.entries(works).map(([category, items]) => (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="worksUl">
              {items.map((item) => (
                <li key={item.title}>
                  <p>
                    <a href={item.link} target="_blank">
                      <em>"{item.title}"</em> - published in{" "}
                      <em>{item.publication}</em>
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SelectWorks;
