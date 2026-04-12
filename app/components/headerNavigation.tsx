import { ReactSVG } from "react-svg";
import githubLogo from "~/src/assets/icons/portfolio-github-repository-icon.svg";
export function HeaderNavigation() {
  return (
    <nav className="header-navigation">
      <div className="header-navigation-heading-name-container">
        <h1>Rainis</h1>
      </div>
      <div className="header-navigation-unordered-icons-list-container">
        <ul className="header-navigation-unordered-icons-list">
          <a
            href="https://github.com/rainistiirik23/Portfoolio"
            target="_blank"
          >
            <li>
              <ReactSVG src={githubLogo}></ReactSVG>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
