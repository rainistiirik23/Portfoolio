import homeIcon from "~/src/assets/icons/homeIcon.svg";
import contactIcon from "~/src/assets/icons/contactIcon.svg";
import projectsIcon from "~/src/assets/icons/projectsIcon.svg";
import skillsIcon from "~/src/assets/icons/skillsIcon.svg";
import { ReactSVG } from "react-svg";

export function PageNavigationBar() {
  return (
    <nav className="page-navigation-bar">
      <ul className="page-navigation-bar-unordered-icons-list">
        <li className="page-navigation-bar-unordered-icon-list-item">
          <a href="/">
            <ReactSVG
              src={homeIcon}
              beforeInjection={(svg) => {
                svg.classList.add("page-navigation-bar-svg-icon");
              }}
              className="page-navigation-bar-unordered-icon-list-item-container"
            ></ReactSVG>
            <span className="page-navigation-bar-unordered-icon-list-item-descriptor">
              Home
            </span>
          </a>
        </li>
        <li className="page-navigation-bar-unordered-icon-list-item">
          <a href="/skills">
            <ReactSVG
              src={skillsIcon}
              beforeInjection={(svg) => {
                svg.classList.add("page-navigation-bar-svg-icon");
              }}
              className="page-navigation-bar-unordered-icon-list-item-container"
            ></ReactSVG>
            <span className="page-navigation-bar-unordered-icon-list-item-descriptor">
              Skills
            </span>
          </a>
        </li>
        <li className="page-navigation-bar-unordered-icon-list-item">
          <a href="/projects">
            <ReactSVG
              src={projectsIcon}
              beforeInjection={(svg) => {
                svg.classList.add("page-navigation-bar-svg-icon");
              }}
              className="page-navigation-bar-unordered-icon-list-item-container"
            ></ReactSVG>
            <span className="page-navigation-bar-unordered-icon-list-item-descriptor">
              Project
            </span>
          </a>
        </li>
        <li className="page-navigation-bar-unordered-icon-list-item">
          <a href="/contact">
            <ReactSVG
              src={contactIcon}
              beforeInjection={(svg) => {
                svg.classList.add("page-navigation-bar-svg-icon");
              }}
              className="page-navigation-bar-unordered-icon-list-item-container"
            ></ReactSVG>
            <span className="page-navigation-bar-unordered-icon-list-item-descriptor">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
