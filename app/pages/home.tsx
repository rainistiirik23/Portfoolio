import { PageNavigationBar } from "~/components/pageNavigationBar";
import { HeaderNavigation } from "~/components/headerNavigation";
import { ReactSVG } from "react-svg";
import emailIcon from "~/src/assets/icons/email.svg";
import linkedInIcon from "~/src/assets/icons/LinkedIn.svg";
import githubIcon from "~/src/assets/icons/portfolio-github-repository-icon.svg";

export function Welcome() {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <div className="introduction-container">
          <div className="introduction-headers-container">
            <h2>Minu nimi on Rainis</h2>
            <h2 className="introduction-headers-second">
              Ma olen nooremtarkvaraarendaja
            </h2>
          </div>
          <div>
            <ul className="introduction-container-unordered-icon-links-list">
              <li>
                <a
                  href="https://linkedin.com/in/rainis-ross-tiirik"
                  target="_blank"
                >
                  <ReactSVG
                    src={linkedInIcon}
                    beforeInjection={(svg) => {
                      svg.classList.add("introduction-icons");
                    }}
                  ></ReactSVG>
                </a>
              </li>
              <li>
                <a href="https://github.com/rainistiirik23" target="_blank">
                  <ReactSVG
                    src={githubIcon}
                    beforeInjection={(svg) => {
                      svg.classList.add("introduction-icons");
                    }}
                  ></ReactSVG>
                </a>
              </li>
              <li>
                <ReactSVG
                onClick={()=>{
                    navigator.clipboard.writeText("rainis.tiirik9@gmail.com")
                }}
                  src={emailIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add("introduction-icons");
                  }}
                ></ReactSVG>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <PageNavigationBar />
    </>
  );
}
