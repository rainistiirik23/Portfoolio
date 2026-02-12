import { PageNavigationBar } from "~/components/pageNavigationBar";
import { HeaderNavigation } from "~/components/headerNavigation";
import { ReactSVG } from "react-svg";
import remixIcon from "~/src/assets/icons/remixIcon.svg";
import expressIcon from "~/src/assets/icons/expressIcon.svg";
import phpIcon from "~/src/assets/icons/phpIcon.svg";
import javascriptIcon from "~/src/assets/icons/javascriptIcon.svg";
import laravelIcon from "~/src/assets/icons/laravelIcon.svg";
import mysqlIcon from "~/src/assets/icons/mysqlIcon.svg";
import reactIcon from "~/src/assets/icons/reactIcon.svg";
export function Skills() {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <div className="page-heading-container">
          <h1 className="page-heading">Skills</h1>
        </div>
        <div className="unordered-skills-list-container ">
          <ul className="unordered-skills-list">
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={remixIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  Remix
                </span>
              </li>
            </div>
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={expressIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  Express
                </span>
              </li>
            </div>
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={phpIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  Php
                </span>
              </li>
            </div>
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={javascriptIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  Javascript
                </span>
              </li>
            </div>
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={laravelIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  Laravel
                </span>
              </li>
            </div>
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={mysqlIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  Mysql
                </span>
              </li>
            </div>
            <div className="unordered-skills-list-item-container">
              <li className="unordered-skills-list-item">
                <ReactSVG
                  src={reactIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("unordered-skills-list-item-skill-icon");
                  }}
                ></ReactSVG>
                <span className="unordered-skills-list-item-descriptor">
                  React
                </span>
              </li>
            </div>
          </ul>
        </div>
      </main>
      <footer>
        <PageNavigationBar />
      </footer>
    </>
  );
}
