import { useState } from "react";
import "./Tabs.css";


const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const handleShowTab = (index) => {
    setTabIndex(index);
  };

  return (
    <section className="tabs-section" id="tabs">
      <div className="container">
        <div className="tabs-heading">
          <h2 className="line">Tabs Variation</h2>
          <p className="text">Click the Tab </p>
        </div>

        <div className="tabs">
          <div className="tabs-title">
            <button
              className={tabIndex === 1 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(1)}
            >
             Search from List
            </button>
            <button
              className={tabIndex === 2 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(2)}
            >
             Tabs
            </button>
            <button
              className={tabIndex === 3 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(3)}
            >
              Random Generator
            </button>
            <button
              className={tabIndex === 4 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(4)}
            >
              Accordion
            </button>
            <button
              className={tabIndex === 5 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(5)}
            >
              Slider
            </button>
            <button
              className={tabIndex === 6 ? "tab active-tab" : "tab"}
              onClick={() => handleShowTab(6)}
            >
              Visibility Toggle
            </button>
          </div>
          <div className="tabs-content">
            <article
              className={tabIndex === 1 ? "content active-content" : "content"}
            >
              <h4>Search from List </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                fugit numquam temporibus. Reiciendis quod rerum atque
                consequatur porro inventore voluptate harum blanditiis facilis
                veniam nesciunt voluptatum cumque, quo, a saepe?
              </p>
            </article>
            <article
              className={tabIndex === 2 ? "content active-content" : "content"}
            >
              <h4>Tabs</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                fugit numquam temporibus. Reiciendis quod rerum atque
                consequatur porro inventore voluptate harum blanditiis facilis
                veniam nesciunt voluptatum cumque, quo, a saepe?
              </p>
            </article>
            <article
              className={tabIndex === 3 ? "content active-content" : "content"}
            >
              <h4>Random Generator</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                fugit numquam temporibus. Reiciendis quod rerum atque
                consequatur porro inventore voluptate harum blanditiis facilis
                veniam nesciunt voluptatum cumque, quo, a saepe?
              </p>
            </article>
            <article
              className={tabIndex === 4 ? "content active-content" : "content"}
            >
              <h4>Accordion</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                fugit numquam temporibus. Reiciendis quod rerum atque
                consequatur porro inventore voluptate harum blanditiis facilis
                veniam nesciunt voluptatum cumque, quo, a saepe?
              </p>
            </article>
            <article
              className={tabIndex === 5 ? "content active-content" : "content"}
            >
              <h4>Slider</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                fugit numquam temporibus. Reiciendis quod rerum atque
                consequatur porro inventore voluptate harum blanditiis facilis
                veniam nesciunt voluptatum cumque, quo, a saepe?
              </p>
            </article>
            <article
              className={tabIndex === 6 ? "content active-content" : "content"}
            >
              <h4>Visibility Toggle</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                fugit numquam temporibus. Reiciendis quod rerum atque
                consequatur porro inventore voluptate harum blanditiis facilis
                veniam nesciunt voluptatum cumque, quo, a saepe?
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;