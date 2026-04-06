import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import { HeaderNavigation } from "~/components/headerNavigation";
import { PageNavigationBar } from "~/components/pageNavigationBar";
import { DestinyVendorBot } from "~/components/project-descripitons/destinyVendorBot";
import globeIconLogo from "~/src/assets/icons/globe.svg";
import githubLogo from "~/src/assets/icons/portfolio-github-repository-icon.svg";
import exclamationMarkIcon from "~/src/assets/icons/exclamationMarkIcon.svg";
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<String | null>(null);
  const [showGithubProjectsListState, setshowGithubProjectsListState] = useState<Boolean>(false);
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("body-disable-scroll");
    } else if (!selectedProject) {
      document.body.classList.remove("body-disable-scroll");
    }
  });
  if (selectedProject) {
    switch (selectedProject) {
      case "destiny-vendorbot":
        return (
          <>
            <div
              onClick={() => {
                setSelectedProject(null);
              }}
              className="dim-container"
            >
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
                                  <span className="used-tool-name-for-project">Javascript</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">Remix</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">Node js</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">express</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">Discord js</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">html</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">html</span>
                                </li>
                                <li className="unordered-used-tool-list-item">
                                  <span className="used-tool-name-for-project">html</span>
                                </li>
                              </ul>
                            </div>
                            <div className="project-thumbnail"></div>
                            <div className="project-unordered-icons-list-container">
                              <ul className="project-icons-unordered-list">
                                <a
                                  href="https://github.com/rainistiirik23/Destiny-vendorInventory-express"
                                  target="_blank"
                                >
                                  <li>
                                    <ReactSVG
                                      beforeInjection={(svg) => svg.classList.add("project-icon")}
                                      src={githubLogo}
                                    ></ReactSVG>
                                  </li>
                                </a>
                                <li>
                                  <ReactSVG
                                    onClick={() => {
                                      setSelectedProject("destiny-vendorbot");
                                    }}
                                    beforeInjection={(svg) => svg.classList.add("project-icon")}
                                    src={exclamationMarkIcon}
                                  ></ReactSVG>
                                </li>
                                <li>
                                  <ReactSVG
                                    beforeInjection={(svg) => svg.classList.add("project-icon")}
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
            </div>
            <DestinyVendorBot setSelectedProjectFunction={setSelectedProject}></DestinyVendorBot>
          </>
        );

      default:
        break;
    }
  }
  if (showGithubProjectsListState) {
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
                            <span className="used-tool-name-for-project">Javascript</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">Remix</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">Node js</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">express</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">Discord js</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">html</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">html</span>
                          </li>
                          <li className="unordered-used-tool-list-item">
                            <span className="used-tool-name-for-project">html</span>
                          </li>
                        </ul>
                      </div>
                      <div className="project-thumbnail"></div>
                      <div className="project-unordered-icons-list-container">
                        <ul className="project-icons-unordered-list">
                          <li
                            className="project-github-icon-list-item"
                            onClick={() => {
                              setshowGithubProjectsListState(false);
                            }}
                          >
                            <ReactSVG
                              beforeInjection={(svg) => svg.classList.add("project-icon")}
                              src={githubLogo}
                            ></ReactSVG>
                            {/*  </a> */}
                            <div className="github-project-links-unordered-list-container">
                              <ul className="github-project-links-unordered-list">
                                <li className="github-project-link-list-item">
                                  <a
                                    target="blank"
                                    href="https://github.com/rainistiirik23/Destiny-vendorInventory-express"
                                  >
                                    Back end
                                  </a>
                                </li>
                                <li className="github-project-link-list-item">
                                  <a
                                    target="blank"
                                    href="https://github.com/rainistiirik23/Destiny-vendorInventory-remix"
                                  >
                                    Front-end
                                  </a>
                                </li>
                                <li className="github-project-link-list-item">
                                  <a
                                    target="blank"
                                    href="https://github.com/rainistiirik23/Destiny-vendorInventory-discord-bot"
                                  >
                                    Discord bot
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <ReactSVG
                              onClick={() => {
                                setSelectedProject("destiny-vendorbot");
                              }}
                              beforeInjection={(svg) => svg.classList.add("project-icon")}
                              src={exclamationMarkIcon}
                            ></ReactSVG>
                          </li>
                          <li>
                            <ReactSVG
                              beforeInjection={(svg) => svg.classList.add("project-icon")}
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
                          <span className="used-tool-name-for-project">Javascript</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">Remix</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">Node js</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">express</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">Discord js</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">html</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">html</span>
                        </li>
                        <li className="unordered-used-tool-list-item">
                          <span className="used-tool-name-for-project">html</span>
                        </li>
                      </ul>
                    </div>
                    <div className="project-thumbnail"></div>
                    <div className="project-unordered-icons-list-container">
                      <ul className="project-icons-unordered-list">
                        <li
                          onClick={() => {
                            setshowGithubProjectsListState(true);
                          }}
                        >
                          <ReactSVG
                            beforeInjection={(svg) => svg.classList.add("project-icon")}
                            src={githubLogo}
                          ></ReactSVG>
                        </li>
                        <li>
                          <ReactSVG
                            onClick={() => {
                              setSelectedProject("destiny-vendorbot");
                            }}
                            beforeInjection={(svg) => svg.classList.add("project-icon")}
                            src={exclamationMarkIcon}
                          ></ReactSVG>
                        </li>
                        <li>
                          <ReactSVG
                            beforeInjection={(svg) => svg.classList.add("project-icon")}
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
