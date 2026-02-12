import { ReactSVG } from "react-svg";
import globeIconLogo from "~/src/assets/icons/globe.svg";
import githubLogo from "~/src/assets/icons/portfolio-github-repository-icon.svg";
export function HeaderNavigation() {
  return (
    <nav className="header-navigation">
      <div className="header-navigation-heading-name-container">
        <h1>Rainis</h1>
      </div>
      <div className="header-navigation-unordered-icons-list-container">
        <ul className="header-navigation-unordered-icons-list">
          <li>
            <ReactSVG src={githubLogo}></ReactSVG>
          </li>
          <li>
            <ReactSVG src={globeIconLogo}></ReactSVG>
          </li>
        </ul>
      </div>
    </nav>
  );
}
