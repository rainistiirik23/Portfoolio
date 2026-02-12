import { ReactSVG } from "react-svg";
import { HeaderNavigation } from "~/components/headerNavigation";
import { PageNavigationBar } from "~/components/pageNavigationBar";
import globeIconLogo from "~/src/assets/icons/globe.svg";
import githubLogo from "~/src/assets/icons/portfolio-github-repository-icon.svg";
import exclamationMarkIcon from "~/src/assets/icons/exclamationMarkIcon.svg";
import { useState } from "react";
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<String | undefined>();
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <div className="page-heading-container">
          <h1 className="page-heading">Projektid</h1>
        </div>
        <div className="projects-container">
          <ul className="unordered-project-list-container">
            <li className="unordered-project-list-item">
              <div className="project-container">
                <h2 className="project-title">Projekti tiitel</h2>
                <div className="project-details-container">
                  <div>
                    <p className="project-description">Projekti kirjeldus</p>
                    <div className="unordered-used-tool-list-container">
                      <ul className="unordered-used-tool-list">
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            Javascript
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            Remix
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            Node js
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            express
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            Discord js
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            html
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            html
                          </span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">
                            html
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="project-thumbnail"></div>
                    <div className="project-unordered-icons-list-container">
                      <ul className="project-icons-unordered-list">
                        <li>
                          <ReactSVG
                            beforeInjection={(svg) =>
                              svg.classList.add("project-icon")
                            }
                            src={githubLogo}
                          ></ReactSVG>
                        </li>
                        <li>
                          <ReactSVG
                            onClick={() => {
                              setSelectedProject("destiny-vendorbot");
                            }}
                            beforeInjection={(svg) =>
                              svg.classList.add("project-icon")
                            }
                            src={exclamationMarkIcon}
                          ></ReactSVG>
                        </li>
                        <li>
                          <ReactSVG
                            beforeInjection={(svg) =>
                              svg.classList.add("project-icon")
                            }
                            src={globeIconLogo}
                          ></ReactSVG>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <PageNavigationBar />
      </footer>
    </>
  );
}
